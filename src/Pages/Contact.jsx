import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import * as yup from "yup";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
    <main className="bg-primary text-secondary font-forum">
      <div id="contact" className="container  relative pt-10 text-text">
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

export default Contact;
