"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { createPost } from "@/actions";
import FormButton from "./form-button";

export default function PostCreateForm({ slug }: { slug: string }) {
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [formState, action] = useFormState(createPost.bind(null, slug), {
    errors: {},
  });

  useEffect(() => {
    if (formState.errors.title) {
      setTitleError(formState.errors.title.join(", "));

      setTimeout(() => {
        setTitleError("");
      }, 5000);
    }

    if (formState.errors.content) {
      setContentError(formState.errors.content.join(", "));

      setTimeout(() => {
        setContentError("");
      }, 5000);
    }

    if (formState.errors._form) {
      setLoginError(formState.errors._form.join(", "));

      setTimeout(() => {
        setLoginError("");
      }, 5000);
    }
  }, [formState]);

  return (
    <div>
      <h1 className="font-semibold text-center">Create a Post </h1>

      <form action={action}>
        <div className="flex flex-col mt-4">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="border-[2px] border-slate-200 rounded mt-2 p-2"
          />
        </div>

        {titleError ? (
          <div className="bg-red-200 border-[2px] border-red-400 rounded p-2 mt-2">
            {titleError}
          </div>
        ) : null}

        <div className="flex flex-col mt-4">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            rows={5}
            className="border-[2px] border-slate-200 rounded mt-2 p-2"
          />
        </div>

        {contentError ? (
          <div className="bg-red-200 border-[2px] border-red-400 rounded p-2 mt-2">
            {contentError}
          </div>
        ) : null}

        {loginError ? (
          <div className="bg-red-200 border-[2px] border-red-400 rounded p-2 mt-2">
            {loginError}
          </div>
        ) : null}

        <FormButton>Create Post</FormButton>
      </form>
    </div>
  );
}
