import React from "react";
import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation("Home");

  const portfolios = [
    {
      id: 1,
      src: "https://ik.imagekit.io/sardorovnasss/portfolio/42.jpg?updatedAt=1717927322694",
      link: "https://42-uz.vercel.app/",
      repo: "https://github.com/sevinchss/42.uz",
    },
    {
      id: 2,
      src: "https://ik.imagekit.io/sardorovnasss/portfolio/marico.jpg?updatedAt=1717927322680",
      link: "https://milaco.vercel.app/",
      repo: "https://github.com/sevinchss/milaco",
    },
    {
      id: 3,
      src: "https://ik.imagekit.io/sardorovnasss/portfolio/hacker.jpg?updatedAt=1717927322615",
      link: "https://hacker-rank-wine.vercel.app/",
      repo: "https://github.com/sevinchss/Hacker_Rank",
    },
    {
      id: 4,
      src: "https://ik.imagekit.io/sardorovnasss/portfolio/eshik.jpg?updatedAt=1717927322640",
      link: "https://eshikoyna-uz-p1ip.vercel.app/",
      repo: "https://github.com/sevinchss/eshikoyna.uz",
    },
    {
      id: 5,
      src: "https://ik.imagekit.io/sardorovnasss/portfolio/cinerama.jpg?updatedAt=1717927322991",
      link: "https://movie-api-liard.vercel.app/",
      repo: "https://github.com/sevinchss/MovieApi",
    },
    {
      id: 6,
      src: "https://ik.imagekit.io/sardorovnasss/portfolio/easy.jpg?updatedAt=1717927322620",
      link: "https://easy-bank-pied.vercel.app/",
      repo: "https://github.com/sevinchss/Easy_bank",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-backround  w-full  portfolio"
    >
      <div className="lg:mt-20  p-4 mx-auto flex flex-col justify-center w-full">
        <div className="sticky top-10">
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
          <div className="flex items-center justify-start relative">
            <span className="bg-secondary absolute right-0  w-fit text-primary px-5 py-3 text-xl rounded-md">
              {t("projects.span")}
            </span>
            <span className="w-full h-[2px] bg-secondary"></span>
          </div>
          <p className="py-8 text-center"> {t("projects.p")}</p>
        </div>

        <div
          data-aos="zoom-out"
          data-aos-duration="1000"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-20 lg:pl-10 justify-center container"
        >
          {portfolios.map(({ id, src, link, repo }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg lg:w-[380px] lg:h-[300px] "
            >
              <img
                src={src}
                alt="projects"
                className="rounded-md lg:h-[210px] duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="lg:w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(link, "_blank")}
                >
                  Demo
                </button>
                <button
                  className="lg:w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open(repo, "_blank")}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
