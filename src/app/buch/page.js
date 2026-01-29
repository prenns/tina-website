import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function EbookIncentive() {
  return (
    <div className="space-y-8 lg:space-y-12">
      <section className="container mx-auto px-4 md:px-6 lg:py-20 2xl:max-w-[1400px]">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <img
            src="/mml-buch-erhaeltlich.png"
            alt="Mama Managering Mental am Limit Cover"
            className="h-auto w-full rounded-lg object-cover shadow-lg"
            width={640}
            height={360}
          />
          <div>
            <h2 className="max-w-4xl text-3xl leading-tight font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-4xl xl:tracking-tighter">
              Mama, Managerin, Mental am Limit.
            </h2>
            <p className="text-foreground mt-4 max-w-4xl text-base text-balance sm:text-lg">
            Jetzt erhältlich. Ein Blick hinter die perfekte Fassade – ehrlich, roh, und ohne Filter.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="h-12 px-6 border border-black bg-white hover:bg-gray-50 text-black font-normal rounded-lg flex items-center justify-center gap-2.5 shadow-sm [&_img]:block [&_img]:mx-auto"
                asChild
              >
                <a
                  href="https://www.thalia.at/shop/home/artikeldetails/A1077709090"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/thalia_logo.png"
                    alt="Thalia"
                    width={80}
                    height={24}
                    className="h-5 w-auto"
                  />
                </a>
              </Button>
              <Button
                variant="outline"
                className="h-12 px-6 border border-black bg-white hover:bg-gray-50 text-black font-normal rounded-lg flex items-center justify-center gap-2.5 shadow-sm [&_img]:block [&_img]:mx-auto"
                asChild
              >
                <a
                  href="https://www.amazon.de/Mama-Managerin-Mental-Limit-perfekte/dp/3819223835/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="[&_img]:translate-y-0.5"
                >
                  <Image
                    src="/Amazon_logo.svg.webp"
                    alt="Amazon"
                    width={80}
                    height={24}
                    className="h-5 w-auto block mx-auto"
                  />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40">
        <div className="container mx-auto px-4 py-8 md:px-6 lg:py-12 2xl:max-w-[1100px]">
          <div className="mx-auto max-w-3xl space-y-5 rounded-2xl border bg-background/95 p-8 shadow-sm backdrop-blur">
            <p className="text-lg font-semibold">
              Zwei Kinder, ein Millionenbusiness, alles erreicht – und dann der Zusammenbruch.
            </p>
            <p className="text-base leading-relaxed text-foreground">
              In Mama, Managerin, Mental am Limit erzählt Tina Prennsberger mit schonungsloser Offenheit, was passiert, wenn man nach außen hin perfekt funktioniert – und innerlich zerfällt. Mit einer einzigartigen Mischung aus trockenem Humor, pointierten Metaphern und emotionalem Tiefgang nimmt sie die Leser:innen mit durch Depression, Therapie und auf den steinigen Weg zurück zu sich selbst.
            </p>
            <p className="text-base leading-relaxed text-foreground">
              Dieses Buch ist kein Ratgeber. Es ist ein Blick in den Rückspiegel – und zugleich eine Einladung, das Steuer wieder selbst in die Hand zu nehmen.
            </p>
            <p className="text-base font-medium leading-relaxed text-foreground">
              Für alle, die bereit sind, hinter scheinbar perfekte Fassaden zu blicken – auch hinter ihre eigene.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}