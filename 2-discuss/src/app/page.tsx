import Link from "next/link";
import TopicList from "./components/topic-list";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="">Top Posts</h1>
        </div>
        <div>
          <Link
            href="/topics/new"
            className="bg-blue-400 rounded p-2 text-white"
          >
            Create a Topic
          </Link>
        </div>
      </div>
      <div className="mt-8 flex items-start justify-between">
        <div>Post List</div>
        <TopicList />
      </div>
    </div>
  );
}
