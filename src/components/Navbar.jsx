import { useEffect, useState } from "react";
import { FaPhoneAlt, FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const navbarHeight = 84;

  const list1 = [
    { title: t("navbar.services"), link: "services" },
    { title: t("navbar.data"), link: "stats" },
    { title: t("navbar.projects"), link: "projects" },
  ];

  const list2 = [
    { title: t("navbar.news"), link: "news" },
    { title: t("navbar.about"), link: "about" },
    { title: t("navbar.contact"), link: "communication" },
  ];

  const languages = {
    uz: t("navbar.language_uz"),
    ru: t("navbar.language_ru"),
    en: t("navbar.language_en"),
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 lg:px-24 px-4 py-3 transition-all duration-500 ease-in ${
        location.pathname === "/" && !isScrolled
          ? "bg-transparent"
          : "bg-gray-800"
      }`}
    >
      <div className="flex justify-between items-center lg:block text-gray-100">
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl absolute top-6 left-8 cursor-pointer z-50"
            aria-label={t("navbar.toggle_menu")}
          >
            {open ? null : <GiHamburgerMenu />}
          </button>
        </div>

        <div className="lg:hidden cursor-pointer" onClick={() => navigate("/")}>
          <img src="/images/logo-light.png" alt="logo" height={90} width={90} />
        </div>

        <div className="lg:hidden text-2xl">
          <FaPhoneAlt />
        </div>
      </div>

      <ul
        className={`fixed lg:static top-0 left-0 h-full lg:w-auto sm:w-1/3 w-1/2 lg:flex lg:items-center lg:justify-between bg-gray-800
          lg:bg-transparent lg:p-0 sm:px-8 py-10 px-6 text-gray-100 transition-transform duration-500 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          } z-50`}
      >
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden md:text-3xl text-2xl absolute top-6 right-6 cursor-pointer z-50"
          aria-label={t("navbar.toggle_menu")}
        >
          <FaTimes />
        </button>
        {list1.map((item, index) => (
          <li key={index} className="lg:ml-6 lg:my-0 my-6">
            <Link
              to={item.link}
              className="relative text-lg lg:text-base group"
              onClick={() => setOpen(false)}
              href={item.link}
              spy={true}
              smooth={true}
              offset={-navbarHeight}
              duration={1500}
            >
              {item.title}
              <span
                className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 rounded-full 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in"
              ></span>
            </Link>
          </li>
        ))}

        <li
          className="relative hidden lg:block lg:mx-6 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <img
            src="/images/logo-light.png"
            alt="logo"
            height={110}
            width={110}
          />
          <span
            className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 rounded-full 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in"
          ></span>
        </li>

        {list2.map((item, index) => (
          <li key={index} className="lg:ml-6 lg:my-0 my-6">
            <Link
              to={item.link}
              className="relative text-lg lg:text-base group"
              onClick={() => setOpen(false)}
              href={item.link}
              spy={true}
              smooth={true}
              offset={-navbarHeight}
              duration={1500}
            >
              {item.title}
              <span
                className="absolute -bottom-2 -left-2 -right-2 h-1 bg-teal-500 rounded-full 
              transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in"
              ></span>
            </Link>
          </li>
        ))}
        <li className="lg:mb-0 mb-4 relative group">
          <button className="focus:outline-none bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            {languages[i18n.language]}
          </button>
          <ul
            className="absolute left-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg py-2 opacity-0 
               group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out"
          >
            {Object.keys(languages).map((lang, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-zinc-700 rounded-lg cursor-pointer transition-colors duration-300"
                onClick={() => handleLanguageChange(lang)}
              >
                {languages[lang]}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
