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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 lg:px-24 px-4 py-3 transition-all duration-500 ease-in ${
        location.pathname === "/" && !isScrolled
          ? "bg-transparent"
          : "bg-yellow-600"
      }`}
    >
      <div className="flex justify-between items-center lg:block text-white">
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            className={`text-3xl absolute top-6 left-8 cursor-pointer z-50`}
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
        className={`fixed lg:static top-0 left-0 h-full lg:w-auto sm:w-1/3 w-1/2 lg:flex lg:items-center lg:justify-between bg-red-800 
          lg:bg-transparent lg:p-0 sm:px-8 py-10 px-6 transition-transform duration-500 ease-in-out ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0 text-white"
          } z-50`}
      >
        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden md:text-3xl text-2xl absolute top-6 right-6 cursor-pointer z-50`}
          aria-label={t("navbar.toggle_menu")}
        >
          <FaTimes />
        </button>
        {list1.map((item, index) => (
          <li key={index} className="lg:ml-6 lg:my-0 my-6">
            <Link
              to={item.link}
              className="text-lg lg:text-base hover:text-blue-500 transition-colors duration-300"
              onClick={() => setOpen(false)}
              href={item.link}
              spy={true}
              smooth={true}
              offset={-navbarHeight}
              duration={1500}
            >
              {item.title}
            </Link>
          </li>
        ))}

        <li
          className="hidden lg:block lg:mx-6 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/images/logo-light.png"
            alt="logo"
            height={110}
            width={110}
          />
        </li>

        {list2.map((item, index) => (
          <li key={index} className="lg:ml-6 lg:my-0 my-6">
            <Link
              to={item.link}
              className="text-lg lg:text-base hover:text-blue-500 transition-colors duration-300"
              onClick={() => setOpen(false)}
              href={item.link}
              spy={true}
              smooth={true}
              offset={-navbarHeight}
              duration={1500}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li className="lg:mb-0 mb-4">
          <select
            onChange={handleChange}
            className="lg:text-xl text-base bg-white border border-gray-300 text-gray-800 outline-none py-1 px-2 rounded-lg"
          >
            <option value="uz">{t("navbar.language_uz")}</option>
            <option value="ru">{t("navbar.language_ru")}</option>
            <option value="en">{t("navbar.language_en")}</option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
