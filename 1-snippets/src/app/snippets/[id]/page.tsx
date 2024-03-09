import Link from "next/link";
import { notFound } from "next/navigation";

import { db } from "@/db";

import { deleteSnippet } from "@/actions";

import { IoMdArrowBack } from "react-icons/io";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

interface ViewSnippetProps {
  params: {
    id: string;
  };
}

export default async function ViewSnippetPage({ params }: ViewSnippetProps) {
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, parseInt(params.id));

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold mb-4">{snippet?.title}</h3>
        <div>
          <Link
            href="/"
            className="bg-blue-400 px-4 py-2 rounded text-white flex items-center"
          >
            <IoMdArrowBack className="mr-1 text-xl" /> Back
          </Link>
        </div>
      </div>
      <pre className="bg-slate-100 rounded px-8 py-4">
        <code>{snippet.code}</code>
      </pre>
      <div className="mt-4">
        <form className="bg-blue-400 text-white rounded mr-2 inline-block">
          <Link
            href={`/snippets/${params.id}/edit`}
            className="flex items-center px-4 py-2"
          >
            <BiSolidEdit className="mr-1 text-xl" /> Edit
          </Link>
        </form>
        <form
          action={deleteSnippetAction}
          className="bg-red-400 text-white rounded inline-block"
        >
          <button className="flex items-center px-4 py-2">
            <RiDeleteBin6Line className="mr-1 text-xl" /> Delete
          </button>
        </form>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
