import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function News(props) {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
    AOS.refresh();

    const handleAnimationStart = () => {
      document.body.style.overflowX = "hidden";
    };

    const handleAnimationEnd = () => {
      document.body.style.overflowX = "auto";
    };

    window.addEventListener("aos:in", handleAnimationStart);
    window.addEventListener("aos:out", handleAnimationEnd);

    return () => {
      window.removeEventListener("aos:in", handleAnimationStart);
      window.removeEventListener("aos:out", handleAnimationEnd);
    };
  }, []);

  const items = [
    {
      heading: t("news.construction_project_manager_title"),
      desc: t("news.construction_project_manager_desc"),
      img: "/images/news1.jpg",
      aos: "fade-right",
    },
    {
      heading: t("news.new_year_greetings_title"),
      desc: t("news.new_year_greetings_desc"),
      img: "/images/news2.jpg",
      aos: "fade-left",
    },
    {
      heading: t("news.address_title"),
      desc: t("news.address_desc"),
      img: "/images/news3.jpg",
      aos: "fade-up",
    },
    {
      heading: t("news.discover_invest_title"),
      desc: t("news.discover_invest_desc"),
      img: "/images/news3.jpg",
      aos: "fade-up",
    },
  ];

  return (
    <div
      id="news"
      className="bg-gray-100 lg:px-[10rem] px-6 lg:py-12 py-6 overflow-x-hidden"
    >
      <h2 className="lg:text-5xl text-2xl font-medium text-center text-gray-800">
        {t("news.all_news")}
      </h2>
      <div className="lg:my-12 my-4 grid xl:grid-cols-2 grid-cols-1 gap-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="md:flex"
            data-aos={item.aos}
            data-aos-duration="1000"
            data-aos-easing="ease-in-quart"
          >
            <div className="md:w-1/2">
              <img
                src={item.img}
                alt={t(item.heading)}
                className="h-full w-full object-cover md:rounded-s-2xl md:rounded-e-none rounded-t-2xl"
              />
            </div>
            <div className="md:w-1/2 bg-white md:rounded-e-2xl md:rounded-b-none rounded-b-2xl md:py-4 py-3 md:px-4 px-3">
              <h4 className="md:text-xl md:mb-4 mb-2 font-medium text-indigo-900">
                {t(item.heading)}
              </h4>
              <p className="md:text-sm text-sm text-gray-700">{t(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
