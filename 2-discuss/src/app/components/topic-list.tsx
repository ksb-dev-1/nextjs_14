import Link from "next/link";
import { db } from "@/db";
import paths from "@/paths";
import { Topic } from "@prisma/client";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic: Topic) => {
    return (
      <div key={topic.id} className="bg-slate-200 px-4 py-2 rounded m-2">
        <Link href={paths.topicShow(topic.slug)}>{topic.slug}</Link>
      </div>
    );
  });

  return (
    <div className="border-[2px] border-slate-200 p-4 rounded max-w-[225px] w-full">
      <h3 className="font-semibold mb-2">Topics</h3>
      {renderedTopics}
    </div>
  );
}
