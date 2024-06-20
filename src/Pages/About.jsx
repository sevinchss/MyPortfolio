import { useTranslation } from "react-i18next";
import { FaHandPointRight } from "react-icons/fa";

const About = () => {
  var { t } = useTranslation("Home");
  return (
    <main className="bg-primary text-secondary  ">
      <section className=" flex flex-col items-center xl:flex-row xl:items-center  justify-between text-center xl:text-start">
        <div className=" flex flex-col items-center xl:flex-row xl:items-center  justify-between text-center xl:text-start mx-auto lg:-mt-32 mt-10">
          <div
            data-aos="fade-right"
            className=" container flex flex-col items-center lg:items-start gap-10"
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-Raleway">{t("about.h1")}</h1>
              <p className="text-xl font-Raleway">{t("about.p")}</p>
            </div>
            <div className="flex flex-col gap-4 text-xl">
              <h2 className="font-Raleway">{t("about.h2")}</h2>
              <div className="flex flex-col no-underline ">
                <div className="flex flex-row gap-2 ">
                  <FaHandPointRight />
                  <span className="font-Raleway"> {t("about.span1")}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <FaHandPointRight />
                  <span className="font-Raleway">{t("about.span2")}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <FaHandPointRight />
                  <span className="font-Raleway">{t("about.span3")}</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://ik.imagekit.io/sardorovnasss/portfolio/Untitled-1.png?updatedAt=1717872062224"
            alt=""
            width={700}
            data-aos="zoom-in-up"
            className="w-full"
          />
        </div>
      </section>
      <div name="experience" className=" w-full  ">
        <div className="container mx-auto p-2 flex flex-col justify-center -mt-28 w-full h-full text-quotes">
          <div>
            <p
              className="  text-quotes  lg:py-6 text-lg lg:text-start text-center"
              data-aos="fade-up"
            >
              {t("about.quotes")}
            </p>
          </div>
          <div
            data-aos="zoom-out"
            className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
          >
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
              <img
                src="https://ik.imagekit.io/sardorovnasss/portfolio/html.svg?updatedAt=1717271949624"
                alt=""
                className="pt-5 w-20 mx-auto"
              />
              <p className="mt-4">HTML</p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
              <img
                src="https://ik.imagekit.io/sardorovnasss/portfolio/css.svg?updatedAt=1717271958842"
                alt=""
                className="pt-5 w-20 mx-auto"
              />
              <p className="mt-4">CSS</p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
              <img
                src="https://ik.imagekit.io/sardorovnasss/portfolio/javascript.svg?updatedAt=1717271949579"
                alt=""
                className="pt-5 w-20 mx-auto"
              />
              <p className="mt-4">JavaScript</p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600">
              <img
                src="https://ik.imagekit.io/sardorovnasss/portfolio/react.svg?updatedAt=1717271944100"
                alt=""
                className="pt-5 w-20 mx-auto"
              />
              <p className="mt-4">React</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white">
              <img
                src="https://ik.imagekit.io/sardorovnasss/portfolio/bootstrap.svg?updatedAt=1717271955680"
                alt=""
                className="pt-5 w-20 mx-auto"
              />
              <p className="mt-4">Bootstrap</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400">
              <img
                src="https://ik.imagekit.io/sardorovnasss/portfolio/GitHub_Invertocat_Logo.svg.png?updatedAt=1717874199766"
                alt=""
                className="pt-5 w-20 mx-auto"
              />
              <p className="mt-4">GitHub</p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400">
              <img
                src="https://ik.imagekit.io/sardorovnasss/portfolio/tailwind.svg?updatedAt=1717271938411"
                alt=""
                className="w-20 pt-5 mx-auto"
              />
              <p className="mt-4">Tailwind</p>
            </div>
            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white">
              <img
                src="https://ik.imagekit.io/sardorovnasss/portfolio/postgresql.svg?updatedAt=1717271944017"
                alt=""
                className="pt-5 w-20 mx-auto"
              />
              <p className="mt-4">SQL</p>
            </div>

            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-500">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="w-20 mx-auto"
              />
              <p className="mt-4">Redux</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
