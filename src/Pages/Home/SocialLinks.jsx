import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/wr.tyy",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sevinchss",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} />
        </>
      ),
      href: "sardorovnass09@gmail.com",
    },
    
    {
      id: 5,
      child: (
        <>
          Telegram <FaTelegramPlane size={30} />
        </>
      ),
      href: "https://telegram.com/",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="container">
      <div className="hidden lg:flex z-20 flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-social" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default SocialLinks;
