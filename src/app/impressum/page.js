export const metadata = {
    title: 'Impressum',
}

export default function Impressum() {
    return (
        <div className="bg-white py-8 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="py-16">
                        <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 mb-8">Impressum</h1>
                        <div className="space-y-4 text-base/7 text-gray-600">
                            <div>
                                <p className="font-semibold text-gray-900">Bettina Prennsberger</p>
                            </div>
                            <div>
                                <p>W.A. Mozart-Gasse 23</p>
                                <p>2700 Wiener Neustadt</p>
                            </div>
                            <div>
                                <p>
                                    <a href="mailto:tina@prennsberger.at" className="font-semibold text-violet-600 hover:text-violet-700">
                                        tina@prennsberger.at
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

