function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);

    alert("Apnar message pathano hoyeche. Dhonnobad!");
    e.target.reset();
  };

  return (
    <div>
      {/* Heading */}
      <section className="bg-blue-50 px-5 py-14 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Kono proshno ba shahajjo lagle amader message pathan.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-5 py-12 md:grid-cols-3">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:col-span-2
          [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-gray-300 [&_input]:px-4 [&_input]:py-2.5 [&_input]:outline-none [&_input:focus]:border-blue-600
          [&_textarea]:w-full [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-gray-300 [&_textarea]:px-4 [&_textarea]:py-2.5 [&_textarea]:outline-none [&_textarea:focus]:border-blue-600
          [&_label]:mb-1 [&_label]:block [&_label]:text-sm [&_label]:font-medium [&_label]:text-gray-700"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Apnar naam"
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Apnar message likhun"
              required
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>

        {/* Info */}
        <div className="space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-medium text-gray-900">Address</h3>
            <p className="mt-1 text-sm text-gray-600">Dhaka, Bangladesh</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="mt-1 text-sm text-gray-600">+880 1234-567890</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="mt-1 text-sm text-gray-600">support@kenakata.com</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-medium text-gray-900">Open hours</h3>
            <p className="mt-1 text-sm text-gray-600">
              Shokal 10:00 theke raat 8:00
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;