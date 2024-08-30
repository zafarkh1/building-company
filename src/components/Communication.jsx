import { useEffect } from "react";
import Message from "../utils/Message";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

function Communication(props) {
  const { sendMessage, error, loading, success } = Message();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-900 lg:px-[10rem] px-6 lg:py-12 py-6">
      <div
        id="communication"
        className="relative bg-cover bg-no-repeat bg-top lg:px-10 px-6 lg:py-16 py-8 text-white rounded-xl shadow-lg"
        style={{ backgroundImage: `url("/images/communication.png")` }}
      >
        <h2 className="lg:w-1/3 lg:text-4xl text-2xl lg:text-left text-center font-semibold lg:mb-10 mb-6">
          {t("communication.heading")}
        </h2>
        <form
          onSubmit={sendMessage}
          className="space-y-6 max-w-md lg:mx-0 mx-auto lg:text-base text-sm "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-quart"
        >
          <input
            id="name"
            type="text"
            placeholder={t("communication.name_placeholder")}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="tel"
            type="tel"
            placeholder={t("communication.tel_placeholder")}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            id="msg"
            placeholder={t("communication.message_placeholder")}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-xl border-2 border-teal-600 bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300"
            disabled={loading}
          >
            {loading
              ? t("communication.loading_button")
              : t("communication.submit_button")}
          </button>
        </form>
        {success && (
          <div className="absolute md:top-[-3rem] md:right-[-12rem] top-0 right-5 transform -translate-x-1/2 p-4 bg-green-100 border border-green-300 rounded-lg flex items-center shadow-lg">
            <svg
              className="w-6 h-6 text-green-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <p className="text-green-700">
              {t("communication.success_message")}
            </p>
          </div>
        )}
        {error && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 p-4 bg-red-100 border border-red-300 rounded-lg flex items-center shadow-lg">
            <svg
              className="w-6 h-6 text-red-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            <p className="text-red-700">
              {t("communication.error_message", { error })}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Communication;
