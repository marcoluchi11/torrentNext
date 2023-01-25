import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
const ContactForm = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1 className="text-2xl text-white font-bold m-5">
        Do you have suggestions? Contact me!
      </h1>
      <section className="flex justify-around w-1/2 mt-10">
        <Link href="https://www.linkedin.com/in/marcoluchi11">
          <AiFillLinkedin className="text-4xl text-white" />
        </Link>
        <Link href={`mailto:marcoaluchi@hotmail.com`}>
          <AiOutlineMail className="text-4xl text-white" />
        </Link>
        <Link href="https://twitter.com/marcoluchi11">
          <AiOutlineTwitter className="text-4xl text-white" />
        </Link>
      </section>
    </section>
  );
};

export default ContactForm;
