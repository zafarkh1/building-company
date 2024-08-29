import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Services(props) {
  const { t } = useTranslation();

  const items = [
    {
      text: t("services.free_consultation"),
      img: "/images/services1.png",
      aos: "fade-right",
    },
    {
      text: t("services.documentation"),
      img: "/images/services2.png",
      aos: "fade-left",
    },
    {
      text: t("services.repair_service"),
      img: "/images/services3.png",
      aos: "fade-up",
    },
    {
      text: t("services.professional_team"),
      img: "/images/services4.png",
      aos: "fade-up",
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      id="services"
      className="bg-gray-100 lg:px-[10rem] px-6 lg:py-12 py-6 overflow-x-hidden"
    >
      <h2 className="lg:text-5xl text-2xl font-medium text-center">
        {t("services.title")}
      </h2>
      <div className="grid sm:grid-cols-2 lg:gap-8 sm:gap-6 gap-5 lg:mt-10 mt-6 text-gray-100">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 flex items-center justify-between rounded-xl pl-5"
            data-aos={item.aos}
            data-aos-duration="1000"
            data-aos-easing="ease-in-quart"
          >
            <p className="xl:text-xl md:text-lg sm:text-base text-sm">
              {item.text}
            </p>
            <img src={item.img} alt={item.text} className="w-1/3 h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
