import Link from 'next/link';
import FormattedDate from '../ui/formattedDate';

export default function BlogCard({ blogPost }) {

    let image = null;
    if(blogPost.featuredImage) {
        image =  <img alt={blogPost.featuredImage.node.altText} src={blogPost.featuredImage.node.sourceUrl} className="absolute inset-0 -z-10 size-full object-cover" />
    }

    return (
        <article
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
        >
            {image}
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-gray-900 via-gray-900/40" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />

            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
                <FormattedDate dateString={blogPost.date} className="mr-8" />
                <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2" className="-ml-0.5 size-0.5 flex-none fill-white/50">
                        <circle r={1} cx={1} cy={1} />
                    </svg>
                    <div className="flex gap-x-2.5">
                        <img alt={`Profilbild von ${blogPost.author.node.firstName} ${blogPost.author.node.lastName}`} src={blogPost.author.node.avatar.url} className="size-6 flex-none rounded-full bg-white/10" />
                        {blogPost.author.node.firstName} {blogPost.author.node.lastName}
                    </div>
                </div>
            </div>
            <h3 className="mt-3 text-lg/6 font-semibold text-white">
                <Link href={`/blog/${blogPost.slug}`}>
                    <span className="absolute inset-0" />
                    {blogPost.title}
                </Link>
            </h3>
        </article>
    );
}