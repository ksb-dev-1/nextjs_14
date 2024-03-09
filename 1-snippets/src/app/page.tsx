import Link from "next/link";

import { db } from "@/db";

import { IoMdAdd } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div
        key={snippet.id}
        className="flex items-center justify-between p-2 pl-4 border rounded mb-4"
      >
        {snippet.title}
        <Link
          href={`/snippets/${snippet.id}`}
          className="bg-blue-400 px-4 py-2 text-white flex items-center rounded"
        >
          <IoMdInformationCircleOutline className="mr-1 text-xl" /> View
        </Link>
      </div>
    );
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold">List of snippets</h3>
        <Link
          href="/snippets/new"
          className="bg-blue-400 px-4 py-2 rounded text-white flex items-center"
        >
          <IoMdAdd className="mr-1 text-xl" /> New
        </Link>
      </div>
      {renderedSnippets}
    </div>
  );
}
