

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
                           

                            Das ist doch das Ziel, oder?
                            Nur spricht kaum jemand darüber, was vorher kommt:

                            Durchbeißen. Über Grenzen gehen.

                            Denn diese Freiheit verdient man sich oft mit allem, was man hat.
                            Und doch würde ich es immer wieder tun.

                            Weil es mir erlaubt, ein Leben aufzubauen, das zu mir passt.

                            Weil ich heute selbst entscheiden kann, wie ich arbeiten – und wie ich führen will.

                            Und weil ich jeden Tag daran glaube, dass Menschlichkeit nicht das „Nice to have“ ist, sondern das Fundament von allem.

                            Für meine Familie. Für mein Team. Für mich.
                            Ich will nicht nur wirtschaftlich wachsen. Ich will Menschen mitnehmen.

                            Meine Mitarbeiter sehen, fördern und ehrlich wertschätzen.

                            Denn ohne sie wäre all das nicht möglich.


                        </p>
                        <p className="mt-8 text-base/7 text-gray-600">
                            Und das Schreiben?

                            Das ist mein Rückzugsort. Mein Ventil. Mein Weg, Dinge zu verarbeiten – und zu teilen.

                            Seit ich denken kann, liebe ich Geschichten. Früher Märchen. Dann Romane. Heute das echte Leben.
                            Lange habe ich nur für mich geschrieben – auf Zetteln, in Notizbüchern, nachts in mein Handy getippt.

                            Immer dann, wenn Gedanken zu groß für meinen Kopf wurden, habe ich sie rausgelassen.

                            Vielleicht, weil ich insgeheim geglaubt habe:

                            Was du fühlst, könnte genau das sein, was jemand anders gerade lesen muss.
                        </p>
                    </div>
                    <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                        <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90"
                                    className="block size-full object-cover"
                                />
                            </div>
                            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-40">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90"
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
