
export const metadata = {
    title: 'Kontakt',
}

export default function Kontakt() {
    return (
        <div className="bg-white py-8 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-10 py-16 lg:grid-cols-3">
                        <div>
                            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900">Kontakt</h2>
                            <p className="mt-4 text-base/7 text-gray-600">
                                Du möchtest mir schreiben, Feedback geben oder einfach Hallo sagen?
                                Ich freue mich auf deine Nachricht.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
                            <div className="rounded-2xl bg-gray-50 p-10">
                                <h3 className="text-base/7 font-semibold text-gray-900">Email</h3>
                                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                                    <div>
                                        <dt className="sr-only">Email</dt>
                                        <dd>
                                            <a href="mailto:tina@prennsberger.at" className="font-semibold text-violet-600">
                                                tina@prennsberger.at
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
