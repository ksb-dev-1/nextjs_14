"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import FormButton from "./form-button";
import * as actions from "@/actions";

interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
}

export default function CommentCreateForm({
  postId,
  parentId,
  startOpen,
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const [replyError, setReplyError] = useState("");
  const [loginError, setLoginError] = useState("");
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    actions.createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }

    if (formState.errors.reply) {
      setReplyError(formState.errors.reply.join(", "));

      setTimeout(() => {
        setReplyError("");
      }, 5000);
    }

    if (formState.errors._form) {
      setLoginError(formState.errors._form.join(", "));

      setTimeout(() => {
        setLoginError("");
      }, 5000);
    }
  }, [formState, startOpen]);

  const form = (
    <form action={action} ref={ref}>
      <textarea
        id="reply"
        name="reply"
        rows={5}
        className="border-[2px] border-slate-200 rounded p-2 w-full mt-2"
        placeholder="Enter your comment"
      />

      {replyError ? (
        <div className="bg-red-200 border-[2px] border-red-400 rounded p-2 mt-2">
          {replyError}
        </div>
      ) : null}

      {loginError ? (
        <div className="bg-red-200 border-[2px] border-red-400 rounded p-2 mt-2">
          {loginError}
        </div>
      ) : null}

      <FormButton>Create Comment</FormButton>
    </form>
  );

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="mt-4 bg-blue-400 rounded px-2 py-1 text-white"
      >
        Reply
      </button>
      {open && form}
    </div>
  );
}
