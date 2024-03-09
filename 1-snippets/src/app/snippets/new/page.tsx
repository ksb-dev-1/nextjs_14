"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { useState, useEffect } from "react";

import { createSnippet } from "@/actions";

import { IoMdArrowBack } from "react-icons/io";

export default function CreateSnippetPage() {
  const [formState, action] = useFormState(createSnippet, { message: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    setError(formState.message);

    setTimeout(() => {
      setError("");
    }, 5000);
  }, [formState]);

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-bold text-xl">Create Snippet</h3>
        <Link
          href="/"
          className="bg-blue-400 px-4 py-2 rounded text-white flex items-center"
        >
          <IoMdArrowBack className="mr-1 text-xl" /> Back
        </Link>
      </div>
      <form className="border p-8 rounded" action={action}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <label className="w-12" htmlFor="title">
              Title
            </label>
            <input
              name="title"
              className="border rounded p-2 w-full"
              id="title"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="w-12" htmlFor="code">
              Code
            </label>
            <textarea
              name="code"
              className="border rounded p-2 w-full"
              id="code"
            />
          </div>
          {error ? (
            <div className="bg-red-100 border-red-500 border-[2px] rounded px-4 py-2">
              {error}
            </div>
          ) : null}
          <button
            type="submit"
            className="border rounded p-2 bg-blue-500 text-white"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
