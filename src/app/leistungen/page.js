import { Button } from '@/components/ui/button';

export const metadata = {
    title: 'Leistungen',
}

export default function Leistungen() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-4xl">
                    <p className="text-base/7 font-semibold text-violet-600">SPEAKING & WORKSHOPS</p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Leistungen
                    </h1>
                </div>

                {/* Keynote Section */}
                <section className="mt-16">
                    <div className="max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                            KEYNOTE
                        </h2>
                        <p className="mt-2 text-xl font-semibold text-gray-900">
                        &bdquo;Mental am Limit: Was niemand über Erfolg erzählt&rdquo;
                        </p>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Kein Motivationsvortrag. Keine Work-Life-Balance-Tipps. Sondern eine ehrliche Geschichte über den Weg vom 7-stelligen Unternehmen in die Erschöpfungsdepression – und was ich daraus gelernt habe.
                        </p>
                        <p className="mt-4 text-base/7 text-gray-600">
                            Ich spreche als Unternehmerin, ehemalige HR-Führungskraft und Betroffene. Nicht aus der Theorie, sondern aus der Realität.
                        </p>
                        <div className="mt-6">
                            <p className="text-base/7 font-semibold text-gray-900">Themen, die ich aufgreife (je nach Event):</p>
                            <ul className="mt-4 space-y-2 text-base/7 text-gray-600 list-disc list-inside">
                                <li>Mental Load & die unsichtbare Last hinter Erfolg</li>
                                <li>Vereinbarkeit ohne Beschönigung</li>
                                <li>Warnsignale: Wann Stress gefährlich wird</li>
                                <li>Der Preis des Wegschauens – persönlich & wirtschaftlich</li>
                                <li>Warum Therapie Stärke ist (und kein Tabu)</li>
                            </ul>
                        </div>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Für: Female Empowerment · Wirtschaftskammer · Frauennetzwerke · Unternehmen · Konferenzen
                        </p>
                        <div className="mt-6 space-y-2 text-base/7 text-gray-600">
                            <p>⏱ Dauer: 45–60 Minuten · Q&A optional</p>
                            <p>📖 Optional: Buchverkauf & Signierung</p>
                        </div>
                        <div className="mt-8">
                            <Button
                                asChild
                                size="lg"
                                className="bg-violet-600 hover:bg-violet-700 text-white"
                            >
                                <a href="mailto:tina@prennsberger.at?subject=Anfrage Keynote">
                                    Keynote anfragen
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Workshop Section */}
                <section className="mt-20">
                    <div className="max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                            WORKSHOP FÜR UNTERNEHMEN
                        </h2>
                        <p className="mt-2 text-xl font-semibold text-gray-900">
                            Mentale Gesundheit im Unternehmen – jenseits von Obstkorb &amp; Yoga
                        </p>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Mental Health ist kein Randthema. Es ist ein Führungsthema. Und es kostet Unternehmen erheblich, wenn Warnsignale zu spät erkannt werden.
                        </p>
                        <p className="mt-4 text-base/7 text-gray-600">
                            Dieser Workshop richtet sich an Führungskräfte und HR-Teams, die nicht nur darüber reden wollen – sondern wissen möchten, wie man früh erkennt, richtig anspricht und konkret handelt.
                        </p>
                        <div className="mt-6">
                            <p className="text-base/7 font-semibold text-gray-900">Daran arbeiten wir</p>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <p className="text-base/7 font-semibold text-gray-900">1) IST-Stand & Realität</p>
                                    <p className="mt-1 text-base/7 text-gray-600">
                                        Kurzer Kultur-Check (Fragebogen) + Klarheit durch Zahlen (Ausfall, Präsentismus, Leistungsträger:innen)
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base/7 font-semibold text-gray-900">2) Warnsignale erkennen</p>
                                    <p className="mt-1 text-base/7 text-gray-600">
                                        Zentrale Muster bei Überlastung + Praxisfall aus meinem eigenen Unternehmen: &bdquo;Leistungsträgerin mit kurzer Zündschnur&rdquo; – gemeinsam analysiert, offen reflektiert
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base/7 font-semibold text-gray-900">3) Schwierige Gespräche führen</p>
                                    <p className="mt-1 text-base/7 text-gray-600">
                                        Dos & Don'ts + Rollenspiel in 2er-Gruppen (inkl. Reflexion)
                                    </p>
                                </div>
                                <div>
                                    <p className="text-base/7 font-semibold text-gray-900">4) Was wirksam hilft</p>
                                    <p className="mt-1 text-base/7 text-gray-600">
                                        Symbolpolitik vs. echte Unterstützung + konkreter Action Plan für die ersten Schritte
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-base/7 font-semibold text-gray-900">Rahmenbedingungen</p>
                            <div className="mt-4 space-y-2 text-base/7 text-gray-600">
                                <p>⏱ Dauer: 2,5 Stunden (inkl. kurzer Pause)</p>
                                <p>👥 Teilnehmer:innen: max. 15 (für echte Interaktion)</p>
                                <p>📍 Ort: vor Ort im Unternehmen oder extern (österreichweit)</p>
                                <p>💬 Format: interaktiv (Input, Reflexion, Praxisfall, Rollenspiel)</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            <p className="text-base/7 font-semibold text-gray-900">Inkludiert</p>
                            <ul className="mt-4 space-y-2 text-base/7 text-gray-600 list-disc list-inside">
                                <li>Handout &bdquo;Zentrale Warnsignale&rdquo;</li>
                                <li>Checkliste &bdquo;Wie mental gesund ist unsere Kultur?&rdquo;</li>
                                <li>Mein Buch &bdquo;Mama, Managerin, Mental am Limit&rdquo; für alle Teilnehmer:innen (als vertiefende Lektüre)</li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <p className="text-base/7 font-semibold text-gray-900">Preis</p>
                            <ul className="mt-4 space-y-2 text-base/7 text-gray-600 list-disc list-inside">
                                <li>€2.490 netto (inkl. Materialien & Bücher)</li>
                                <li>zzgl. Fahrtkosten ab 30 km von Wiener Neustadt</li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <Button
                                asChild
                                size="lg"
                                className="bg-violet-600 hover:bg-violet-700 text-white"
                            >
                                <a href="mailto:tina@prennsberger.at?subject=Anfrage Workshop">
                                    Workshop anfragen
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Lesung Section */}
                <section className="mt-20">
                    <div className="max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                            LESUNG & GESPRÄCH
                        </h2>
                        <p className="mt-2 text-xl font-semibold text-gray-900">
                           &bdquo;Mama, Managerin, Mental am Limit&rdquo;
                        </p>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Keine klassische Lesung, bei der nur vorgelesen wird. Sondern ausgewählte Passagen aus dem Buch – kombiniert mit persönlicher Einordnung, ehrlichen Gesprächen und Raum für Fragen.
                        </p>
                        <div className="mt-6">
                            <p className="text-base/7 font-semibold text-gray-900">Ablauf (60 Min):</p>
                            <ul className="mt-4 space-y-2 text-base/7 text-gray-600 list-disc list-inside">
                                <li>Lesung ausgewählter Passagen</li>
                                <li>Einordnung & Hintergründe</li>
                                <li>Gespräch & Q&A</li>
                            </ul>
                        </div>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Für: Buchhandlungen · Bibliotheken · Frauennetzwerke · Unternehmens-Events · VHS
                        </p>
                        <p className="mt-4 text-base/7 text-gray-600">
                            📖 Optional: Buchverkauf & Signierung
                        </p>
                        <div className="mt-8">
                            <Button
                                asChild
                                size="lg"
                                className="bg-violet-600 hover:bg-violet-700 text-white"
                            >
                                <a href="mailto:tina@prennsberger.at?subject=Anfrage Lesung">
                                    Lesung anfragen
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Podcasts & Interviews Section */}
                <section className="mt-20">
                    <div className="max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                            PODCASTS & INTERVIEWS
                        </h2>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Ich stehe gerne für Podcast-Interviews zur Verfügung. Ich spreche offen über Mental Health, Mental Load, Vereinbarkeit, Unternehmertum – und den Preis von Erfolg.
                        </p>
                        <div className="mt-8">
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-violet-600 text-violet-600 hover:bg-violet-50"
                            >
                                <a href="mailto:tina@prennsberger.at?subject=Anfrage Podcast & Interview">
                                    Anfrage senden
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="mt-20">
                    <div className="max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm">
                        <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                            KONTAKT
                        </h2>
                        <p className="mt-6 text-base/7 text-gray-600">
                            Du möchtest mich buchen oder hast Fragen?
                        </p>
                        <p className="mt-2 text-base/7 text-gray-600">
                            Schreib mir – ich melde mich persönlich.
                        </p>
                        <div className="mt-8">
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="border-violet-600 text-violet-600 hover:bg-violet-50"
                            >
                                <a href="mailto:tina@prennsberger.at?subject=Anfrage">
                                    Anfrage stellen
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

