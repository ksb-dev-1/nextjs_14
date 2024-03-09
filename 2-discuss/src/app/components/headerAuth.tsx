"use client";

import Image from "next/image";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === "loading") {
    authContent = "Loading...";
  } else if (session?.data?.user) {
    authContent = (
      <div className="flex items-center">
        <Image
          blurDataURL={session.data.user.image || ""}
          placeholder="blur"
          height={35}
          width={35}
          src={session.data.user.image || ""}
          alt="User"
          className="rounded-full mr-2 shadow-md cursor-pointer"
        />
        <form
          action={signOut}
          className="bg-slate-200 font-semibold rounded px-2 py-1"
        >
          <button type="submit">Logout</button>
        </form>
      </div>
    );
  } else {
    authContent = (
      <form
        action={signIn}
        className="bg-slate-200 font-semibold rounded px-2 py-1"
      >
        <button type="submit">Login</button>
      </form>
    );
  }

  return authContent;
}
