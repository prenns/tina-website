
import TypewriterText from "@/components/ui/typeWriterText";
import { getLatestPosts } from "@/services/posts";
import BlogCard from "@/components/blog/blogCard";

export const metadata = {
  title: 'Tina Prennsberger - Gedanken, Geschichten & Impulse fürs Leben',
  description: "Willkommen auf dem persönlichen Blog von Tina Prennsberger. Hier schreibt sie über das echte Leben – mit Worten, die berühren, inspirieren und verbinden"
};

export default async function Home() {

  let posts = await getLatestPosts(3);

  return (
    <div className="bg-white">
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div className="mx-auto max-w-7xl px-6 py-6 sm:py-16 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty sm:text-7xl">
                Hallo, ich bin Tina.
              </h1>
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-violet-500 sm:text-7xl">
                <TypewriterText words={["Mutter.", "Unternehmerin.", "Personalerin.", "Autorin."]} />
              </h2>
              <p className="mt-8 text-xl/8 text-balance text-gray-700">Zwei kleine Kinder, ein wachsendes Millionenbusiness – und ein Kopf voller Fragen, Ideen und To-dos.</p>
              <p className="mt-4 text-gray-600 text-base/7">
                Zwischen Spielplatz und Strategie-Meeting, zwischen Familienzeit und Firmenführung versuche ich, nicht mich selbst zu verlieren.
                Ich glaube an ehrliche Worte, echte Geschichten – und daran, dass man nicht perfekt sein muss, um Großes zu schaffen. Das zu erkennen, war mein größter Lernprozess.
                Hier schreibe ich über mentale Gesundheit, Mutterschaft, Leadership – und das echte Leben dazwischen.
                Als Unternehmerin. Als Mama. Als Frau.
              </p>
            </div>
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <img alt="Portrait von Tina Prennsberger" src="/profile1.png" className="mx-auto w-xl max-w-full drop-shadow-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
                Neu im Blog
              </h2>
              <p className="mt-2 text-lg/8 text-gray-600">Aus dem echten Leben, nicht aus dem Ratgeber.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} blogPost={post} />
              ))}
            </div>
          </div>
        </div>


      </main>
    </div>
  )
}
