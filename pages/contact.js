import Layout from "../components/Layout";
import ContactForm from "./../components/ContactForm";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";
const Contact = () => {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
};

export default Contact;
