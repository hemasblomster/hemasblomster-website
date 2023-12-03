import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <>
      <Menu />
      <HomeHeader />
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

      <Footer />
    </>
  );
};

export default Contact;
