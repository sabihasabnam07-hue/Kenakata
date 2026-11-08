function About() {
  return (
    <div>
      {/* Heading */}
      <section className="bg-blue-50 px-5 py-14 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          About Kenakata
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Kenakata ekta online shopping website, jekhane electronics, fashion
          ar accessories shob kichu ek jaygay pawa jay. Amader lokkho holo
          shohoj upaye, bhalo dame, bhalo product apnar hat e pouche deya.
        </p>
      </section>

      {/* Value boxes */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-900">
          Keno Kenakata?
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
              ✅
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Quality</h3>
            <p className="mt-2 text-sm text-gray-600">
              Prottek product bhalo kore check kore, shudhu shera mane-r jinish
              amra bikri kori.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-2xl">
              🚚
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              Fast Delivery
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Order korar por druto, nirapod vabe apnar thikanay product pouche
              dei.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
              💬
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Support</h3>
            <p className="mt-2 text-sm text-gray-600">
              Kono shomoshya hole amader support team shob shomoy apnar pashe
              ache.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;