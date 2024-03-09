import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createSnippet(formData: FormData) {
  "use server";

  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  revalidatePath("/");

  console.log(snippet);
  redirect("/");
}
