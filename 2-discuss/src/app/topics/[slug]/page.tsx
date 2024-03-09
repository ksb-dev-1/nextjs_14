import Link from "next/link";
import paths from "@/paths";
import PostList from "@/app/components/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/posts";
import { db } from "@/db";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default async function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params;

  return (
    <div>
      <div className="flex items-start justify-between mb-4">
        <p>
          <span>Posts related to </span>
          <span className="capitalize font-semibold">{slug}</span>
        </p>
        <Link
          href={paths.postCreate(slug)}
          className="bg-blue-400 rounded px-2 py-1 text-white"
        >
          Create Post
        </Link>
      </div>
      <div>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
    </div>
  );
}
