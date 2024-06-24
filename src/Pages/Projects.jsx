import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("Home");
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 600,
        once: true,
        disable: function () {
          var maxWidth = 500;
          return window.innerWidth < maxWidth;
        },
      });
    };
    loadAOS();
  }, []);
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
      className="bg-primary text-quotes w-full h-full portfolio"
    >
      <div className="  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <p className="py-8 text-center font-Raleway font-bold text-3xl mt-5">
          {" "}
          {t("projects.exactSpan")}
        </p>

        <div
          data-aos="zoom-up-down"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:pl-10 justify-center container  "
        >
          {portfolios.map(({ id, src, link, repo }) => (
            <div
              key={id}
              className="shadow-md cursor-pointer shadow-gray-600 rounded-lg lg:w-[380px] lg:h-[300px] "
            >
              <img
                src={src}
                alt="projects"
                className="cursor-pointer rounded-md lg:h-[210px] duration-200 hover:scale-105"
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

export default Projects;
