import type { Comment } from "@prisma/client";
import { db } from "..";

export type CommentWithUser = Comment & {
  user: { name: string | null; image: string | null };
};

export function fetchCommentsByPostId(
  postId: string
): Promise<CommentWithUser[]> {
  return db.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
}
