import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { Typewriter } from "react-simple-typewriter";
import { skillsData } from "../data/skills";
import { skillsImage } from "../data/skill-image";
import Portfolio from "../Portfolio";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";

const Home = () => {
  const scrollToContent = () => {
    document
      .getElementById("content-section")
      .scrollIntoView({ behavior: "smooth" });
  };
  const { t } = useTranslation("Home");
  const form = useRef();
  const validation = yup.object().shape({
    user_name: yup.string().required("First Name is required"),
    message: yup.string().required("message is required"),
    user_email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validation) });

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_bhveb0a",
        "template_qi34zqs",
        form.current,
        "KY8Eg2a2f3f4V8MZi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <main className="bg-primary text-secondary font-forum duration-300 -mt-44 ">
      <section className=" container text-center lg:text-start">
        <div className="flex justify-around lg:flex-row flex-col">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="flex flex-col gap-3 font-Raleway lg:w-[500px] lg:px-0 px-5  lg:pt-72 m-0 pt-56"
          >
            <h1 className="lg:text-6xl w-full lg:text-start text-center text-5xl lg:w-[500px]   font-bold text-inf">
              {t("hero.h1")}
            </h1>
            <h1 className="lg:w-[500px] text-4xl m-0 text-type">
              {t("hero.h1_type")}{" "}
              <span style={{ fontWeight: "bold" }} className="">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Coder", "Frontend Developer", "Programmer"]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  cursorColor="#FFB302"
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="font-spartan lowercase italic text-quotes">
              {t("hero.span")}
            </p>
            <div className="flex gap-3 flex-row lg:justify-normal  justify-center ">
              <button
                className="text-red hover:before:bg-redborder-red-500 relative h-10 w-32 overflow-hidden border border-red-500 bg-transparent px-3 text-red-500 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 rounded-lg before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
                onClick={scrollToContent}
              >
                <span className="relative z-10">{t("hero.btn1")}</span>
              </button>
              <button
                className="text-text  bg-[#147087] border border-[#147087] duration-300 hover:text-[#147087] hover:bg-transparent  px-4 w-32 rounded-lg h-10"
              >
                 <a href="/contact">{t("hero.btn2")}</a>
              </button>
            </div>
          </div>
          <img
            data-aos="fade-left"
            data-aos-duration="1000"
            src="https://ik.imagekit.io/sardorovnasss/portfolio/photo_2024-06-04_13-32-05-removebg-preview%20(1).png?updatedAt=1717490082588"
            alt="profile"
            className="lg:pt-56 lg:w-1/2"
          />
        </div>
      </section>
        <hr className="mt-5" />

      <section
        id="content-section"
        className="my-12 lg:my-16 relative container flex flex-col gap-10 items-center lg:flex-row lg:items-start justify-between text-center lg:text-start py-10 "
      >
        <div className="hidden lg:flex flex-col items-center absolute top-20 -right-8">
          <span className="bg-secondary  w-fit text-primary rotate-90 p-2 px-5 text-xl rounded-md">
            {t("about.title")}
          </span>
          <span className="h-36 w-[2px] bg-secondary"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-5">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src="https://ik.imagekit.io/sardorovnasss/portfolio/istockphoto-1306190794-612x612-removebg-preview.png?updatedAt=1717591522866"
            alt="Sevinch"
            className=" rounded-full bg-blue-gray-100 lg:w-[450px] lg:h-[400px] transition-all duration-1000 grayscale-0 hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
          <div
            className="flex flex-col gap-8"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex flex-col ">
              <p className=" mb-5 text-secondary text-xl font-bold uppercase">
                {t("hero.h1")}
              </p>
              <p className="text-quotes text-sm lg:text-xl lg:w-full">
                {t("hero.p")}
              </p>
            </div>
            <div className="flex flex-col gap-4 text-xl font-Raleway">
              <p>{t("hero.li1")}</p>
              <p> {t("hero.li2")}</p>
              <p> {t("hero.li3")}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="relative  border-t my-12 lg:my-24 border-[#25213b]" data-aos="fade-up"
      >
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
          </div>
        </div>

        <div className="flex justify-center  lg:pt-8">
          <div className="flex  items-center mt-5">
            <span className="w-24 h-[2px] bg-secondary"></span>
            <span className="bg-secondary w-fit text-primary p-2 px-5 text-xl rounded-md">
              {t("section2.span")}
            </span>
            <span className="w-24 h-[2px] bg-secondary"></span>
          </div>
        </div>

        <div className="w-full container  " data-aos="zoom-in" data-aos-duration="1000">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <div
                className="w-36  h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-10 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={id}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-secondary shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="h-8 sm:h-10">
                      <img
                        src={skillsImage(skill)}
                        alt={skill}
                        width={40}
                        height={40}
                        className="h-full w-auto rounded-lg"
                      />
                    </div>
                    <p className="text-primary text-sm sm:text-lg">{skill}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <Portfolio />
      <div id="contact" className="container  relative mt-10 text-text">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="hidden lg:flex flex-col items-center absolute top-24 -right-8"
        >
          <span className="bg-social font-Raleway w-fit text-text rotate-90 p-2 px-5 text-xl rounded-md">
            {t("contact.h1")}
          </span>
          <span className="h-36 w-[2px] bg-social"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="" data-aos="fade-right">
            <p className="font-medium mb-5 text-secondary  text-xl uppercase">
              {t("contact.p")}
            </p>
            <div className="max-w-3xl text-secondary rounded-lg border border-secondary p-3 lg:p-5">
              <p className="text-sm text-secondary">{t("contact.p1")}</p>
              <form
                className="mt-6 flex flex-col gap-4"
                onSubmit={handleSubmit(sendEmail)}
                ref={form}
              >
                <div className="flex flex-col gap-2">
                  {t("contact.input1")}
                  <label className="text-base"> </label>
                  <input
                    className="placeholder-secondary text-secondary bg-primary w-full border rounded-md border-secondary focus:border-text ring-0 outline-0 transition-all duration-300 px-3 py-2"
                    type="text"
                    placeholder="First name"
                    name="user_name"
                    {...register("user_name", { required: true })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="user_name"
                    as="span"
                    className="text-red-700"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base"> {t("contact.input2")} </label>
                  <input
                    className=" text-black placeholder-secondary text-secondary bg-primary w-full border rounded-md border-secondary focus:border-text ring-0 outline-0 transition-all duration-300 px-3 py-2"
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    {...register("user_email", { required: true })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="user_email"
                    as="span"
                    className="text-red-700"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base">Mesage </label>
                  <textarea
                    className=" text-black placeholder-secondary text-secondary bg-primary w-full border rounded-md border-secondary focus:border-text ring-0 outline-0 transition-all duration-300 px-3 py-2"
                    name="message"
                    {...register("message", { required: true })}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="message"
                    as="span"
                    className="text-red-700"
                  />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button
                    className="flex items-center gap-1 hover:gap-3 rounded-full bg-social px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-text no-underline transition-all duration-200 ease-out hover:text-text hover:no-underline md:font-semibold"
                    type="submit"
                  >
                    <span> {t("contact.btn")}</span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-1"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
                      <path d="M3 6l9 6l9 -6"></path>
                      <path d="M15 18h6"></path>
                      <path d="M18 15l3 3l-3 3"></path>
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="lg:w-3/4 "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="flex flex-col gap-5 lg:gap-9 text-secondary">
              <p className="text-sm md:text-xl flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="bg-[#9cb0c5] p-2 rounded-full hover:bg-text hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  height="36"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>
                </svg>
                <span>sardorovnass09@gmail.com</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="bg-[#9cb0c5] p-2 rounded-full hover:bg-text hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  height="36"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20.487 20.268l-3.737-3.738a2.327 2.327 0 0 0-1.65-.682c-.623 0-1.206.244-1.647.684l-.94.94a.775.775 0 0 1-.547.226c-.193 0-.39-.073-.544-.2-1.498-1.197-3.113-2.92-4.588-4.39-2.007-2.001-3.627-4.318-4.529-5.763a.773.773 0 0 1 .082-.965l.941-.941a2.326 2.326 0 0 0 0-3.297l-3.737-3.738A2.385 2.385 0 0 0 3.739.209a7.014 7.014 0 0 0-2.77 1.796C-.727 3.747-.787 8.308 2.72 13.84c1.77 2.855 4.39 5.949 7.237 8.789 3.342 3.335 7.129 5.593 10.28 5.593 1.775 0 3.444-.672 4.632-1.895.93-.945 1.484-2.164 1.796-2.77a2.383 2.383 0 0 0-.478-2.29z"></path>
                </svg>
                <span>+998 99 476 51 08</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="bg-[#9cb0c5] p-2 rounded-full hover:bg-text hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                  height="36"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21 8V7l-3 2-2-1V7H9v1.382l-2 1L4 7v1H3c-.552 0-1 .448-1 1v9c0 .553.448 1 1 1h18c.553 0 1-.447 1-1v-9c0-.552-.447-1-1-1h-1zm-9 4l-3.5 2 3.5-4 3.5 4L12 12zm-5 6H4v-1h3v1zm0-2H4v-1h3v1zm0-2H4v-1h3v1zm13 4h-9v-1h9v1zm0-2h-9v-1h9v1zm0-2h-3v-1h3v1zm0-4h-1.382l1.382-1.382V10zM6.382 10L5 11.382V10h1.382zM20 18h-3v-1h3v1zm0-2h-3v-1h3v1z"></path>
                </svg>
                <span>{t("contact.location")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
