import { getAllPosts } from "@/services/posts";
import BlogCard from "@/components/blog/blogCard";

export default async function BlogHome() {

    let posts = await getAllPosts();

    return (

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                        Mein Blog
                    </h2>
                    <p className="mt-2 text-lg/8 text-gray-600">Learn how to grow your business with our expert advice.</p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <BlogCard key={post.id} blogPost={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}
