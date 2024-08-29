import { FaInstagram } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import { RiYoutubeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const socialMedia = [
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <PiTelegramLogoLight />, link: "https://telegram.org" },
  { icon: <RiYoutubeLine />, link: "https://youtube.com" },
];

const company = [
  { title: "projects", link: "projects" },
  { title: "news", link: "news" },
  { title: "services", link: "services" },
];

const communication = [
  { number: "+998901234567", link: "tel:+998901234567" },
  { number: "+998901234567", link: "tel:+998901234567" },
];

function Footer(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navbarHeight = 84;

  return (
    <div className="bg-gray-100 lg:px-[10rem] px-6 lg:py-12 py-6 flex lg:flex-row flex-col lg:justify-between lg:items-stretch items-center">
      {/* Logo and icons */}
      <div className="lg:w-1/2">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="/images/logo-dark.png"
            alt="logo"
            height={120}
            width={120}
          />
        </div>
        <ul className="flex gap-6 text-2xl lg:mt-6 mt-4 text-gray-700">
          {socialMedia.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="hover:text-teal-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:w-1/2 w-full flex justify-between lg:mt-0 mt-8">
        {/* Company links */}
        <div>
          <h4 className="text-gray-900 lg:text-xl font-medium">
            {t("footer.company")}
          </h4>
          <ul className="flex flex-col gap-3">
            {company.map((item, index) => (
              <li key={index} className="ml-1 mt-3 lg:text-lg text-gray-700">
                <Link
                  to={item.link}
                  className="hover:text-blue-500 transition-colors duration-300"
                  href={item.link}
                  spy={true}
                  smooth={true}
                  offset={-navbarHeight}
                  duration={1500}
                >
                  {t(`footer.${item.title}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Phone numbers */}
        <div>
          <h4 className="lg:text-xl font-medium text-gray-900">
            {t("footer.contact")}
          </h4>
          <ul className="flex flex-col gap-3">
            {communication.map((item, index) => (
              <li key={index} className="ml-1 mt-3 lg:text-lg text-gray-700">
                <a
                  href={item.link}
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  {item.number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
