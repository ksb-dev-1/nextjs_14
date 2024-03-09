"use client";

import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { createTopic } from "@/actions";
import FormButton from "./form-button";

export default function TopicCreateForm() {
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [loginError, setLoginError] = useState("");
  const [formState, action] = useFormState(createTopic, {
    errors: {},
  });

  useEffect(() => {
    if (formState.errors.name) {
      setNameError(formState.errors.name.join(", "));

      setTimeout(() => {
        setNameError("");
      }, 5000);
    }

    if (formState.errors.description) {
      setDescriptionError(formState.errors.description.join(", "));

      setTimeout(() => {
        setDescriptionError("");
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
      <h1 className="font-semibold text-center">Create a Topic </h1>

      <form action={action}>
        <div className="flex flex-col mt-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-[2px] border-slate-200 rounded mt-2 p-2"
          />
        </div>

        {nameError ? (
          <div className="bg-red-200 border-[2px] border-red-400 rounded p-2 mt-2">
            {nameError}
          </div>
        ) : null}

        <div className="flex flex-col mt-4">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            className="border-[2px] border-slate-200 rounded mt-2 p-2"
          />
        </div>

        {descriptionError ? (
          <div className="bg-red-200 border-[2px] border-red-400 rounded p-2 mt-2">
            {descriptionError}
          </div>
        ) : null}

        {loginError ? (
          <div className="bg-red-200 border-[2px] border-red-400 rounded p-2 mt-2">
            {loginError}
          </div>
        ) : null}

        <FormButton>Create Topic</FormButton>
      </form>
    </div>
  );
}
