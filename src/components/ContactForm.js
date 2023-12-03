const ContactForm = () => {
  return (
    <>
      <div>
        <form
          method="post"
          action="http://www.hemasblomster.dk/cgi-bin/FormMail.pl"
          accept-charset="ISO-8859-1"
          onsubmit="var originalCharset = document.charset; 
            document.charset = 'ISO-8859-1'; 
            window.onbeforeunload = function () {document.charset=originalCharset;};"
          class="bg-violet-300 p-8 text-white font-semibold"
        >
          Navn
          <br />
          <input
            name="realname"
            class="block w-full p-1 border-2 text-black font-light"
            required
          />
          <br />
          Email
          <br />
          <input
            name="email"
            class="block w-full p-1 border-2 text-black font-light"
            required
          />
          <br />
          Besked
          <br />
          <textarea
            cols="40"
            rows="6"
            name="Message"
            class="resize-none border-2 text-black font-normal"
            required
          ></textarea>
          <br />
          <input
            type="submit"
            value="Send besked"
            class="block bg-violet-800 hover:bg-violet-600 text-white font-bold py-2 w-full rounded mt-3"
          />
          <input type="hidden" name="recipient" value="info@hemasblomster.dk" />
          <input type="hidden" name="subject" value="Subject" />
          <input
            type="hidden"
            name="redirect"
            value="http://www.hemasblomster.dk/thanks.html"
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