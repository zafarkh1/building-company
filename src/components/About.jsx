import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function About(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      id="about"
      className="relative bg-cover bg-no-repeat bg-top md:px-[10rem] px-6 lg:py-24 py-16 text-white"
      style={{ backgroundImage: `url("/images/about.png")` }}
    >
      <div
        className="lg:w-2/5 w-full flex flex-col lg:gap-16 gap-10 lg:items-stretch items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="ease-in-quart"
      >
        <h2 className="lg:text-5xl text-2xl font-medium lg:text-left">
          {t("about.title")}
        </h2>
        <p className="lg:leading-8 leading-6 lg:text-left text-center lg:text-base text-sm">
          {t("about.description")}
        </p>
        <button
          className="px-4 py-2 border-white border-2 rounded-xl hover:bg-white hover:text-black w-1/2"
          onClick={() => navigate("/about")}
        >
          {t("about.learn_more")}
        </button>
      </div>
    </div>
  );
}

export default About;
