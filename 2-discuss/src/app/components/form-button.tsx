"use client";

import { useFormStatus } from "react-dom";

export default function FormButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          type="submit"
          className="bg-blue-400 rounded text-white p-2 mt-2 text-center w-full"
        >
          Saving...
        </button>
      ) : (
        <button
          type="submit"
          className="bg-blue-400 rounded text-white p-2 mt-2 text-center w-full"
        >
          {children}
        </button>
      )}
    </>
  );
}
