

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

                <section className="mt-20 py-20 px-4 max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold text-zinc-900 mb-18 text-center">Resume</h2>
                    <div className="grid md:grid-cols-2 gap-12">

                        <div>
                            <h3 className="text-sm uppercase text-violet-500 font-semibold mb-1">2013 – heute</h3>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Berufserfahrung</h2>

                            {/* Timeline-Container mit linker Border */}
                            <div className="relative border-l border-zinc-200 space-y-10 pl-4">


                                <div className="relative">

                                    <div className="absolute -left-2 z-10 top-2 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    {/* Card */}
                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">Geschäftsführerin</h4>
                                        <p className="text-sm text-zinc-500 mb-2">WUNDERklein GmbH (seit Jänner 2022)</p>
                                        <p className="mb-2 text-sm text-zinc-600 leading-relaxed">
                                            <strong>Bereiche: </strong>Unternehmensführung, HR, Marketing, Produktentwicklung, Controlling
                                        </p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            Leitung und Skalierung eines 7-stelligen Online-Unternehmens für handgravierten Schmuck
                                        </p>
                                    </div>
                                </div>


                                <div className="relative">
                                    <div className="absolute -left-2 top-2 z-10 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">Brand Managerin</h4>
                                        <p className="text-sm text-zinc-500 mb-2">WUNDERklein GmbH (Feb. 2021 – Dez. 2021)</p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            Weiterentwicklung der Marke, Produktportfolio & Launchstrategien.
                                            (Hauptberuflich Gründerin – offiziell aber noch nicht.)
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute -left-2 top-2 z-10 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">Gründerzeit</h4>
                                        <p className="text-sm text-zinc-500 mb-2">WUNDERklein GmbH (Aug. 2018 – Jän. 2021)</p>
                                        <p className="mb-2 text-sm text-zinc-600 leading-relaxed">
                                            <strong>Während Mutterschutz & Karenz. Also... offiziell.</strong>
                                        </p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            Launch des ersten Online-Shops. Aufbau der Marke, Entwicklung erster Produktlinien, unzählige Nachtschichten, Wachstumsstrategie aus dem Kinderzimmer. Wäre es kein Karenzgeld gewesen, hätte es vermutlich schon „Geschäftsführerin“ geheißen.
                                            War’s in Wirklichkeit auch.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute -left-2 top-2 z-10 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">Leitung Human Resources</h4>
                                        <p className="text-sm text-zinc-500 mb-2">Cerha Hempel Rechtsanwälte (Okt. 2017 – Jul. 2018)</p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            Strategisches HR-Management, Budgetverantwortung, Gehaltsprozesse, Eventorganisation, Führungskommunikation
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-2 top-2 z-10 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">HR Managerin</h4>
                                        <p className="text-sm text-zinc-500 mb-2">Cerha Hempel Rechtsanwälte (Mai 2017 – Okt. 2017)</p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            Recruiting, Onboarding, Personalentwicklung, Personalmarketing, Schnittstelle zur Lohnverrechnung
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-2 top-2 z-10 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">HR Management</h4>
                                        <p className="text-sm text-zinc-500 mb-2">ADEG Österreich Handels AG (Aug. 2016 – Apr. 2017)</p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            Assessment Center, Schulungen, Employer Branding, Onboarding
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-2 top-2 z-10 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">Recruiting & Employer Branding</h4>
                                        <p className="text-sm text-zinc-500 mb-2">Allianz (AMOS Austria) (Nov. 2014 – Aug. 2016)</p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            IT-Recruiting, Vertragswesen, Onboarding, interne HR-Beratung
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-2 top-2 z-10 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">Recruiting</h4>
                                        <p className="text-sm text-zinc-500 mb-2">TU Wien (Okt. 2013 – Okt. 2014)</p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                            Recruiting-Unterstützung, Projektarbeit, internes Stellenportal
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm uppercase text-violet-500 font-semibold mb-1">2006 – 2016</h3>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-8">Ausbildung</h2>

                            <div className="relative border-l border-zinc-200 space-y-10 pl-4">

                                <div className="relative">
                                    <div className="absolute -left-2 z-10 top-2 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">MA Human Resources Management & Arbeitsrecht</h4>
                                        <p className="text-sm text-zinc-500 mb-2">FH Burgenland (2014-2016)</p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute -left-2 z-10 top-2 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">BA Soziologie, EC BWL</h4>
                                        <p className="text-sm text-zinc-500 mb-2">Universität Wien (2011-2014)</p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                        </p>
                                    </div>
                                </div>

                                <div className="relative">
                                    <div className="absolute -left-2 z-10 top-2 w-4 h-4 bg-violet-500 rounded-full"></div>
                                    <div className="absolute left-0 top-4 w-6 h-[1px] bg-zinc-200"></div>

                                    <div className="bg-white p-6 rounded-lg shadow-md ml-6">
                                        <h4 className="text-lg font-semibold text-zinc-800">HLW Wiener Neustadt</h4>
                                        <p className="text-sm text-zinc-500 mb-2">Schwerpunkt Wirtschaftsinformatik  (2006-2011)</p>
                                        <p className="text-sm text-zinc-600 leading-relaxed">
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}
