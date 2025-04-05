

export const metadata = {
    title: 'About me',
}

export default function About() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <p className="text-base/7 font-semibold text-violet-600">Über Mich</p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Meine Mission. Mein Warum.
                    </h1>
                    <p className="mt-6 text-xl/8 text-balance text-gray-700">
                    Ein eigenes Business. Mehr Freiheit. Mehr Zeit mit der Familie.
                    </p>
                </div>
                <section className="mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                    <div className="lg:pr-8">
                        <p className="mt-6 text-base/7 text-gray-600">

                            Ich wollte mehr Zeit für meine Familie.
                            Mehr Freiheit. Mehr Flexibilität.
                            Ein Leben, das zu mir passt.

                            Was selten jemand dazusagt:
                            Bevor es leichter wird, wird’s erstmal richtig hart.
                            Schlaflose Nächte. Existenzängste. Dauerverantwortung.
                            Keine Pause, kein Netz, kein doppelter Boden.

                            Ich hab mein eigenes Business gegründet, weil ich etwas verändern wollte.
                            Nicht nur für mich – auch für die Menschen, mit denen ich arbeite.
                            Weil ich glaube, dass es anders geht.
                            Ehrlicher. Menschlicher. Echter.
                            Und weil ich mir ein Leben aufbauen wollte, das nicht wie „Work-Life-Balance“ klingt,
                            sondern sich endlich so anfühlt.

                        </p>
                     
                        <p className="mt-6 text-base/7 text-gray-600">


                            Und das Schreiben?
                            Das war schon immer mein Rückzugsort.
                            Ich hab geschrieben, wenn mein Kopf zu voll war.
                            Wenn ich Dinge nicht aussprechen konnte – aber auch nicht runterschlucken wollte.

                            Früher waren es Märchen, die mich fasziniert haben. Dann Romane.
                            Und heute ist es das echte Leben, das mich nicht mehr loslässt.


                            Lange hab ich gedacht, das Schreiben wär „nur für mich“.
                            Aber irgendwann hab ich gemerkt:
                            Vielleicht ist genau das, was ich fühle,
                            auch das, was jemand anders gerade lesen muss.
                        </p>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="/about1.png"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img
                                    alt=""
                                    src="/about4.png"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="/about3.png"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img
                                    alt=""
                                    src="/about2.png"
                                    className="block size-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:mt-16 lg:col-span-1">
                        <p className="text-base/7 font-semibold text-gray-500">Zahlen</p>
                        <hr className="mt-6 border-t border-gray-200" />
                        <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                <dt className="text-sm/6 text-gray-600">Kinder</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight">
                                    <span>2</span>
                                </dd>
                            </div>

                            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                                <dt className="text-sm/6 text-gray-600">Kunden</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight">
                                    <span>+55.000</span>
                                </dd>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <dt className="text-sm/6 text-gray-600">Bücher</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight">
                                    <span>0,9</span>
                                </dd>
                            </div>

                            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                                <dt className="text-sm/6 text-gray-600">Umsatz</dt>
                                <dd className="order-first text-6xl font-semibold tracking-tight">
                                    <span>+6 Mio.</span>€
                                </dd>
                            </div>
                        </dl>
                    </div>
                </section>
            </div>
        </div>
    );
}
