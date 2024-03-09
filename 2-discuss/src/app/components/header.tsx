import Link from "next/link";

import HeaderAuth from "./headerAuth";

import { GoCommentDiscussion } from "react-icons/go";

export default async function Header() {
  return (
    <header className="fixed top-0 max-w-[800px] w-full border-b-[2px] py-4 flex items-center justify-between bg-white">
      <Link href="/" className="font-semibold flex items-center text-blue-400">
        <GoCommentDiscussion className="mr-1 text-xl" /> Discuss
      </Link>
      <input
        type="text"
        className="rounded p-1 border-[2px] border-slate-200"
      />
      <HeaderAuth />
    </header>
  );
}
