import Link from "next/link";
import { notFound } from "next/navigation";

import { db } from "@/db";
import SnippetEditForm from "@/components/snippet-edit-form";

import { IoMdArrowBack } from "react-icons/io";

interface EditSnippetProps {
  params: {
    id: string;
  };
}

export default async function EditSnippetPage({ params }: EditSnippetProps) {
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold mb-4">Edit Snippet Code</h3>
        <div>
          <Link
            href={`/snippets/${params.id}`}
            className="bg-blue-400 px-4 py-2 rounded text-white flex items-center"
          >
            <IoMdArrowBack className="mr-1 text-xl" /> Back
          </Link>
        </div>
      </div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
