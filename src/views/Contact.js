import ContactForm from "../components/ContactForm";
import MenuHeader from "../components/MenuFlower";
import HomeInfo from "../components/HomeInfo";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <section class="bg-subsite bg-cover bg-no-repeat w-full text-white">
        <h1 class="text-4xl text-center pt-32">Kontakt</h1>
      </section>

      <section class="grid grid-cols-1 md:grid-cols-2 place-items-center my-10">
        <div class="p-5 md:p-1">
          <h2 class="text-5xl mb-3">Kontakt os</h2>
          <p class="text-xl  mb-10 md:mb-1">
            Hvis du har nogle spørgsmål, så tøv ikke med at kontakte os, så
            vender vi tilbage.
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
