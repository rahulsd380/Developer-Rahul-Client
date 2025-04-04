import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import Ripple from "../../Reusable/Ripple/Ripple";

const Form = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_6ucobnr", "template_ip8soen", form.current, {
        publicKey: "S7pp7UJ33cHUaBySS",
      })
      .then(
        () => {
          toast("Message sent to Rahul!", {
            style: {
              padding: "10px",
              borderRadius: "5px",
            },
            duration: 3000,
            className: "class",
          });
        },
        () => {
          toast.error("Failed! Try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full flex flex-col gap-7"
    >
      <div className="flex flex-col md:flex-row items-center gap-[30px] w-full">
        <input
          name="from_name"
          placeholder="Name*"
          type="text"
          className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300"
        />

        <input
          name="from_email"
          placeholder="Email*"
          type="email"
          className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300"
        />
      </div>
      <input
        name="subject"
        placeholder="Subject*"
        type="text"
        className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300"
      />

      <textarea
        name="message"
        placeholder="Message*"
        className="outline-none bg-[#0E1330] border border-[#282D45] rounded-[10px] py-3 px-5 w-full text-white h-[150px] focus:border-[0.2px] focus:border-[#0696E7]/50 transition duration-300"
      ></textarea>

      <div className="flex justify-center md:justify-end">
        <Ripple>
          <button
            type="submit"
            className="w-full md:w-[190px] bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 px-5 text-xs sm:text-base text-white rounded sm:rounded-[7px] flex justify-center items-center"
          >
            Send Message
          </button>
        </Ripple>
      </div>
    </form>
  );
};

export default Form;
