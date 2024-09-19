import { useTranslation } from "react-i18next";

function Projects(props) {
  const { t } = useTranslation();

  const items = [
    {
      title: t("projects.magic_city_title"),
      desc: t("projects.magic_city_desc"),
      img: "/images/project1.webp",
    },
    {
      title: t("projects.invento_title"),
      desc: t("projects.invento_desc"),
      img: "/images/project2.webp",
    },
    {
      title: t("projects.gardens_residence_title"),
      desc: t("projects.gardens_residence_desc"),
      img: "/images/project3.webp",
    },
    {
      title: t("projects.fonon_title"),
      desc: t("projects.fonon_desc"),
      img: "/images/project4.webp",
    },
    {
      title: t("projects.presidential_school_title"),
      desc: t("projects.presidential_school_desc"),
      img: "/images/project5.webp",
    },
    {
      title: t("projects.boulevard_title"),
      desc: t("projects.boulevard_desc"),
      img: "/images/project6.webp",
    },
  ];

  return (
    <div id="projects" className="lg:px-[10rem] px-6 lg:py-12 py-6">
      <h2 className="lg:text-5xl text-2xl font-medium text-center text-gray-800">
        {t("projects.our_projects")}
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 lg:mt-8 mt-4">
        {items.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.img})` }}
            className="relative bg-cover bg-no-repeat bg-center px-4 rounded-lg h-[20rem] group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>

            <div
              className="absolute lg:bottom-0 bottom-0 left-0 w-full p-4  h-full transition-all 
              transform lg:translate-y-[250px] lg:group-hover:translate-y-[-3%] duration-700 ease-in-out"
            >
              <h4 className="lg:text-3xl text-xl text-white lg:text-left text-center">
                {item.title}
              </h4>
              <p
                className="lg:text-base text-sm text-white lg:opacity-0 lg:group-hover:opacity-100 mt-2 transition-all 
              duration-700 ease-in-out lg:text-left text-center"
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
