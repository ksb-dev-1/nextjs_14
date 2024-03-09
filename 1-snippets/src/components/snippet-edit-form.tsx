"use client";

import { Editor } from "@monaco-editor/react";
import { useState } from "react";

import type { Snippet } from "@prisma/client";

import { editSnippet } from "@/actions";

import { IoMdSave } from "react-icons/io";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };

  const editSnippetAction = editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="20vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button
          type="submit"
          className="bg-blue-400 px-4 py-2 mt-4 rounded text-white flex items-center"
        >
          <IoMdSave className="mr-1 text-xl" /> Save
        </button>
      </form>
    </div>
  );
}
