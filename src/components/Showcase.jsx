import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Showcase(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center text-center text-white"
      style={{ backgroundImage: `url("/images/showcase.jpeg")` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

      <div className="relative z-1 flex flex-col gap-16">
        <h1 className="xl:text-8xl lg:text-6xl md:text-5xl text-4xl font-medium uppercase">
          Atayev Bahodir Build
        </h1>
        <p className="lg:text-3xl md:text-2xl text-xl">
          {t("showcase.subtitle")}
        </p>
        <div className="mt-4">
          <button
            className="px-4 py-2 border-white border-2 rounded-xl hover:bg-white hover:text-black"
            onClick={() => navigate("/projects")}
          >
            {t("showcase.projects_button")}
          </button>
          <a href="tel:+998901234567">
            <button className="px-4 py-2 border-white border-2 rounded-xl ml-4 hover:bg-white hover:text-black">
              {t("showcase.contact_button")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
