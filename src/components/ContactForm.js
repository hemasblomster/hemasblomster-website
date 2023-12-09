import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // ... logik för formulärinlämningen ...

    navigate("/tak");
  };

  return (
    <>
      <div>
        <form
          method="post"
          action="http://www.hemasblomster.dk/cgi-bin/FormMail.pl"
          accept-charset="ISO-8859-1"
          onSubmit={handleSubmit}
          // onsubmit="var originalCharset = document.charset;
          //   document.charset = 'ISO-8859-1';
          //   window.onbeforeunload = function () {document.charset=originalCharset;};"
          className="bg-violet-300 p-8 text-white font-semibold text-left"
        >
          Navn
          <br />
          <input
            name="realname"
            className="block w-full p-1 border-2 text-black font-light"
            required
          />
          <br />
          Email
          <br />
          <input
            name="email"
            className="block w-full p-1 border-2 text-black font-light"
            required
          />
          <br />
          Besked
          <br />
          <textarea
            cols="40"
            rows="6"
            name="Message"
            className="resize-none border-2 text-black font-normal"
            required
          ></textarea>
          <br />
          <input
            type="submit"
            value="Send besked"
            className="block bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 w-full rounded mt-3"
          />
          <input type="hidden" name="recipient" value="info@hemasblomster.dk" />
          <input type="hidden" name="subject" value="Subject" />
          <input
            type="hidden"
            name="redirect"
            value="http://www.hemasblomster.dk/tak"
          />
          <input
            type="hidden"
            name="missing_fields_redirect"
            value="http://www.hemasblomster.dk/error.html"
          />
          <input type="hidden" name="required" value="realname,email,Message" />
        </form>
      </div>
    </>
  );
};

export default ContactForm;
