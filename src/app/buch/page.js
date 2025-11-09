import { SignupForm } from '@/components/buch/signup-form';

export default function EbookIncentive() {
  return (
    <div className="space-y-8 lg:space-y-12">
      <section className="container mx-auto px-4 py-10 md:px-6 lg:py-20 2xl:max-w-[1400px]">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <img
            src="/mml-buch.png"
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
              Melde dich an und sei bei der Buchpremiere dabei – mit exlusiven Einblicken & kleinen Überraschungen in deiner Mailbox.
            </p>
            <div className="mt-6">
              <SignupForm />
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
