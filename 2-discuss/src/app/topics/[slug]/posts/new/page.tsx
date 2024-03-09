import PostCreateForm from "@/app/components/post-create-form";

interface CreatePostPageProps {
  params: {
    slug: string;
  };
}

export default function CreatePostPage({ params }: CreatePostPageProps) {
  const { slug } = params;

  return (
    <div>
      <PostCreateForm slug={slug} />
    </div>
  );
}
