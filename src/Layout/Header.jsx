import { Link, NavLink } from "react-router-dom";
import Switcher from "../utils/Theme/Switcher";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Collapse, IconButton } from "@material-tailwind/react";
const Header = () => {
  const { t, i18n } = useTranslation("header");
  const [openNav, setOpenNav] = useState(false);
  const [language, setLanguage] = useState("en");
  
  useEffect(() => {
    i18n.changeLanguage(language);
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
  }, [language, i18n]);

  const navItems = [
    { path: "/", label: t("li") },
    { path: "/about", label: t("li3") },
    { path: "/projects", label: t("li2") },
    { path: "/contact", label: t("li1") },
  ];

  return (
    <header data-aos="zoom-in-right"
      className="bg-primary font-spartan text-lg text-text sticky shadow-lg py-8 top-0 z-10 duration-300"
    >
      <div className="container h-10 flex items-center justify-between ">
        <h1 className="font-julia text-5xl">
          <Link to="/" data-aos="zoom-out">
            <img
              src="https://ik.imagekit.io/sardorovnasss/portfolio/logo_white.png?updatedAt=1717484143053"
              alt="logo"
              width={140}
              className=""
            />
          </Link>
        </h1>
        <nav className="hidden lg:flex" >
          <ul className="flex items-center gap-10">
            {navItems.map((item, index) => (
              <li key={index} className={`group relative text-quotes`} data-aos="zoom-out">
                <div className="group-hover:scale-x-100 w-full transition duration-300 bg-secondary absolute h-[1px] left-0 bottom-[1px] scale-x-0"></div>
                <NavLink to={item.path} data-aos="zoom-out">{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3 items-center">
          <Switcher />
          <div className="relative">
            <select
              defaultValue="en"
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent text-secondary appearance-none duration-300 text-xl pr-5 outline-none p-3 cursor-pointer"
            >
              <option value="en" className="p-3 bg-primary">
                en
              </option>
              <option value="ru" className="p-3 bg-primary">
                ru
              </option>
              <option value="uz" className="p-3 bg-primary">
                uz
              </option>
            </select>
            <svg
              className="absolute right-0 top-[23px] cursor-pointer"
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1C3.64878 2.22939 5.12657 5.56889 6.55038 8.4134C7.18529 9.68183 8.8099 9.67912 9.45505 8.41587C10.9004 5.58574 12.4251 2.29115 15 1"
                className="stroke-secondary"
                strokeWidth="2"
              />
            </svg>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden cursor-pointer"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav} className="w-full h-full bg-primary">
        <ul className="flex flex-col items-center gap-4">
          {navItems.map((item, index) => (
            <li key={index} className="py-2">
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </header>
  );
};

export default Header;
