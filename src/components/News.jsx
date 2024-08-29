import { useTranslation } from "react-i18next";

const items = [
  {
    heading: "news.construction_project_manager_title",
    desc: "news.construction_project_manager_desc",
    img: "/images/news1.jpg",
    aos: "fade-right",
  },
  {
    heading: "news.new_year_greetings_title",
    desc: "news.new_year_greetings_desc",
    img: "/images/news2.jpg",
    aos: "fade-left",
  },
  {
    heading: "news.address_title",
    desc: "news.address_desc",
    img: "/images/news3.jpg",
    aos: "fade-up",
  },
  {
    heading: "news.discover_invest_title",
    desc: "news.discover_invest_desc",
    img: "/images/news3.jpg",
    aos: "fade-up",
  },
];

function News(props) {
  const { t } = useTranslation();

  return (
    <div id="news" className="bg-gray-100 lg:px-[10rem] px-6 lg:py-12 py-6">
      <h2 className="lg:text-5xl text-2xl font-medium text-center">
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
              <h4 className="md:text-xl md:mb-4 mb-2 font-medium">
                {t(item.heading)}
              </h4>
              <p className="md:text-sm text-sm">{t(item.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
