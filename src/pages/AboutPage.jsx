import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="relative my-[8rem] lg:px-[10rem] px-6">
      <h2 className="xl:text-5xl text-2xl font-medium text-center md:mb-8 mb-2">
        {t("aboutPage.title")}
      </h2>
      <button
        onClick={() => navigate("/")}
        className="absolute sm:top-0 -top-8 flex items-center justify-center bg-teal-600 text-white md:py-2 py-1 
        md:px-4 px-2 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300"
      >
        <FaArrowLeft className="sm:mr-2" />
        <span className="hidden sm:inline">{t("aboutPage.backToHome")}</span>
        <IoHomeOutline className="inline sm:hidden ml-3" />
      </button>
      <div className="lg:flex items-center gap-8">
        <p className="lg:leading-8 leading-6 lg:text-left text-center lg:text-base text-sm">
          {t("aboutPage.description")}
        </p>
        <div className="mt-6 lg:mt-0 lg:flex-shrink-0">
          <img
            src="/images/aboutPage.jpg"
            alt={t("aboutPage.imgAlt")}
            className="rounded-xl object-cover w-full lg:w-[450px] lg:h-[250px] max-w-full"
            // className="rounded-xl object-cover w-full lg:w-[500px] lg:h-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
