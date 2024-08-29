import { useTranslation } from "react-i18next";

function House(props) {
  const { t } = useTranslation();

  const items = [
    {
      alt: "img1",
      scr: "/images/house1.jpg",
    },
    {
      alt: "img2",
      scr: "/images/house2.jpg",
    },
    {
      alt: "img3",
      scr: "/images/house3.jpg",
    },
    {
      alt: "img4",
      scr: "/images/house4.jpg",
    },
    {
      alt: "img5",
      scr: "/images/house5.jpg",
    },
    {
      alt: "img6",
      scr: "/images/house6.jpg",
    },
  ];

  return (
    <div className="lg:pt-12 pt-6">
      <h2 className="lg:text-5xl text-2xl font-medium text-center">
        {t("house.title")}
      </h2>
      <div className="lg:mt-10 mt-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-0">
        {items.map((item, index) => (
          <div className="relative w-full h-64 " key={index}>
            <img
              src={item.scr}
              alt={item.alt}
              className="w-full h-full object-cover hover:opacity-90 border-gray-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default House;
