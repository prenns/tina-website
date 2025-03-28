import { getAllPosts, getPostBySlug, getPostSEOtBySlug } from "@/services/posts";
import FormattedDate from "@/components/ui/formattedDate";
import { notFound } from 'next/navigation';

export const dynamicParams = false;
export const revalidate = 60;

export async function generateMetadata({ params }) {
    
    const { slug } = await params;
    const post = await getPostSEOtBySlug(slug);
    
    return {
      title: post.seo.title,
      description: post.seo.metaDesc
    }
  }


export async function generateStaticParams() {
    
    const posts = await getAllPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }) {

    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    let featuredImage = null;

    if (post.featuredImage) {
        featuredImage = (
            <div className="mb-4 mt-4">
                <img
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    className="w-full rounded-xl object-cover max-h-[500px] shadow"
                />
            </div>
        );
    }

    return (
        <div className="mt-2 lg:mt-8">
            <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
                    <article>
                        <header className="flex flex-col">
                            <div className="flex items-center gap-4">
                                {post.author?.node?.avatar?.url && (
                                    <img
                                        src={post.author.node.avatar.url}
                                        alt={`${post.author.node.firstName} ${post.author.node.lastName}`}
                                        className="h-10 w-10 rounded-full object-cover"
                                    />
                                )}
                                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {post.author.node.firstName} {post.author.node.lastName}
                                    <br />
                                    <FormattedDate
                                        dateString={post.date}
                                        className="text-xs text-zinc-400 dark:text-zinc-500"
                                    />
                                </div>
                            </div>
                            {featuredImage}
                            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                                {post.title}
                            </h1>

                        </header>
                        <div
                            className="prose mt-8"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </article>
                </div>
            </div>
        </div>
    );
}
