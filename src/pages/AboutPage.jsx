import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="relative my-[8rem] lg:px-[10rem] px-6">
      <h2 className="lg:text-5xl text-2xl font-medium text-center md:mb-8 mb-2">
        {t("aboutPage.title")}
      </h2>
      <button
        onClick={() => navigate("/")}
        className="absolute md:top-0 -top-10 flex items-center justify-center bg-yellow-600 text-white md:py-2 py-1 md:px-4 px-2 rounded-full shadow-md hover:bg-yellow-700 transition-all duration-300"
      >
        <FaArrowLeft className="mr-2" />
        {t("aboutPage.backToHome")}
      </button>
      <div className="lg:flex items-center gap-8">
        <p className="lg:leading-8 leading-6 lg:text-left text-center lg:text-base text-sm">
          {t("aboutPage.description")}
        </p>
        <div className="mt-6 lg:mt-0 lg:flex-shrink-0">
          <img
            src="/images/aboutPage.jpg"
            alt={t("aboutPage.imgAlt")}
            className="rounded-xl object-cover w-full lg:w-[500px] lg:h-[200px] max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
