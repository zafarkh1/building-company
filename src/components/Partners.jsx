import { useTranslation } from "react-i18next";

function Partners(props) {
  const { t } = useTranslation();

  const items = [
    {
      alt: "img1",
      scr: "/images/partners1.jpg",
    },
    {
      alt: "img2",
      scr: "/images/partners2.jpg",
    },
    {
      alt: "img3",
      scr: "/images/partners3.jpg",
    },
    {
      alt: "img4",
      scr: "/images/partners4.jpg",
    },
    {
      alt: "img5",
      scr: "/images/partners5.jpg",
    },
    {
      alt: "img6",
      scr: "/images/partners6.jpg",
    },
    {
      alt: "img7",
      scr: "/images/partners7.jpg",
    },
    {
      alt: "img8",
      scr: "/images/partners8.jpg",
    },
  ];

  return (
    <div className="lg:pt-12 pt-6">
      <h2 className="lg:text-5xl text-2xl font-medium text-center">
        {t("partners.title")}
      </h2>
      <div className="lg:mt-10 mt-5 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-0">
        {items.map((item, index) => (
          <div className="relative w-full h-64" key={index}>
            <img
              src={item.scr}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
