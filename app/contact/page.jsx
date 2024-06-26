
export const metadata = {
  title: 'Contact Us - M.T.C',
  description:
    'You can get in touch with us through this form and we shall get back to you in no time.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="bg-[url('/images/contactus.jpg')] bg-cover bg-no-repeat h-96">
      </div>      
      <div className="mt-3 ml-6 px-6 py-4 flex justify-center min-w-3xl">
        {/** TODO: change the form to use web3forms */}
        <form action="">
          <label htmlFor="name" className="flex flex-col mb-3">
            <span>
              Your Name<span className="text-red-600">*</span>
            </span>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="bg-gray-300 text-gray-900 px-2 py-3 border border-gray-400 rounded-lg"
            />
          </label>
          <label htmlFor="email" className="flex flex-col mb-3">
            <span>
              Your email<span className="text-red-600">*</span>
            </span>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-gray-300 text-gray-900 px-2 py-3 border border-gray-400 rounded-lg"
            />
          </label>
          <label htmlFor="subject" className="flex flex-col mb-3">
            <span>
              Subject<span className="text-red-600">*</span>
            </span>
            <input
              type="text"
              name="subject"
              id="suject"
              required
              className="bg-gray-300 text-gray-900 px-2 py-3 border border-gray-400 rounded-lg"
            />
          </label>
          <label htmlFor="message" className="flex flex-col mb-3">
            <span>
              Your message<span className="text-red-600">*</span>
            </span>
            <textarea
              name="message"
              id="message"
              required
              className="bg-gray-300 text-gray-900 px-2 py-3 border border-gray-400 w-full rounded-lg"
              cols="90"
              rows="10"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
