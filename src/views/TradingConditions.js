const TradingConditions = () => {
  return (
    <>
      <div className="bg-subsite text-white">
        <h1 className="text-4xl text-center pt-32">Handelsbetingelser</h1>
      </div>

      <section className="h-auto w-8/12 m-auto pt-5 text-left">
        <h1 className="text-3xl pb-3">
          Handelsbetingelser hos Hema's Blomster
        </h1>
        <h2 className="text-2xl pb-3">Generelle oplysninger</h2>
        <p>[ FIRMANAVN ]</p>
        <p>[ ADRESSE ]</p>
        <p>[ POSTNR OG BY ]</p>
        <p>CVR nr.: [ CVR NUMMER]</p>
        <p>Telefon: [ TELEFONNUMMER ]</p>
        <p>Email: [ E-MAILADRESSE ]</p>

        <h2 className="text-2xl pb-3 mt-4">Priser</h2>
        <p>
          Hos [ FIRMANAVN ] er alle priserne i danske kroner og angivet inkl.
          moms og afgifter. Vi forbeholder os ret til fra dag til dag at ændre i
          priserne uden forudgående samtykke. Der tages forbehold for udsolgte
          varer.
        </p>

        <h2 className="text-2xl pb-3 mt-4">Betaling</h2>
        <p>
          [ FIRMANAVN ] modtager betaling med VISA-Dankort, VISA, VISA Electron,
          Mastercard, PayPal, MobilePay, Bankoverførsel. Betalingen vil først
          blive trukket på din konto, når varen afsendes. Alle beløb er i DKK.
          Danske kroner og incl. moms. Der tages forbehold for prisfejl og
          udsolgte/udgåede varer.
        </p>

        <h2 className="text-2xl pb-3 mt-4">Levering</h2>
        <p>
          [ FIRMANAVN ] tilstræber at afsende ordre indgået inden kl. 17 samme
          dag, ordre herefter sendes næstfølgende hverdag. Vi sender til hele
          Danmark. Fragtpriser fra 25 kr. Varer vil blive leveret på
          leveringsadressen, der angives ved bestillingen. Vi leverer ikke til
          udlandet og ikke til Færøerne og Grønland. Dine varer sendes med Post
          Nord eller GLS. OBS: Hvis der ikke er plads på udleveringsstedet
          bliver pakken flyttet til nærmeste udleveringssted, hvilket du får
          besked om. Opstår der problemer, kontakt da kundeservice. Der leveres
          varer alle ugens hverdage. Din vare vil blive leveret 1-3 hverdage
          efter bestillingen. For visse varer gælder særlige leveringsvilkår.
          Betingelserne vil fremgå specifikt forud for køb af disse varer.
        </p>

        <h2 className="text-2xl pb-3 mt-4">Reklamationsret</h2>
        <p>
          Der gives 2 års reklamationsret i henhold til købeloven. Vores
          reklamationsret gælder for fejl i materiale og/eller fabrikation. Du
          kan få varen repareret, ombyttet, pengene retur eller afslag i prisen,
          afhængig af den konkrete situation. Reklamationen gælder ikke fejl
          eller skader begået ved forkert håndtering af produktet/ydelsen. Du
          skal reklamere i "rimelig tid" efter du har opdaget manglen/fejlen. [
          FIRMANAVN ] vil dække returneringsomkostninger i et rimeligt omfang.
        </p>
        <br></br>
        <p>
          Ved returnering, reklamationer og benyttelse af fortrydelsesretten
          sendes til:
        </p>
        <p>[ FIRMANAVN ]</p>
        <p>[ ADRESSE ]</p>
        <p>[ POSTNR OG BY ]</p>
        <p>Der modtages ikke forsendelser pr. efterkrav.</p>

        <h2 className="text-2xl pb-3 mt-4">Refusion</h2>
        <p>
          Hvis der er tale om refusion, bedes du medsende bankoplysninger i form
          af regnr og kontonr, så det aftalte beløb kan overføres. Disse
          oplysninger kan uden risiko oplyses pr. mail eller anden elektronisk
          form, da det ikke er følsomme oplysninger og kun vil blive anvendt til
          vores opfyldelse af refusionen.
        </p>

        <h2 className="text-2xl pb-3 mt-4">Persondatapolitik</h2>
        <p>
          For at du kan indgå aftale med os og handle på vores hjemmeside, har
          vi brug for følgende oplysninger om dig:
        </p>
        <br></br>
        <p>
          For at du kan indgå aftale med os og handle på vores hjemmeside, har
          vi brug for følgende oplysninger om dig:
        </p>
        <p>Navn</p>
        <p>Adresse</p>
        <p>Telefonnummer</p>
        <p>E-mailadresse</p>
        <p>Oplysning om hvad du har købt</p>
        <br></br>
        <p>
          Vi behandler dine personoplysninger med det formål, at kunne levere
          varen til dig, og for at kunne behandle henvendelser vedrørende dit
          køb. Behandlingen sker efter reglerne i vores persondatapolitik for [
          FIRMANAVN ]. Heri kan du læse mere om, hvordan dine oplysninger
          behandles, hvornår de slettes, og hvilke rettigheder du har som
          registreret.
        </p>

        <h2 className="text-2xl pb-3 mt-4">
          Klagemuligheder - oversigt og links:
        </h2>
        <p>
          Har du en klage over et produkt, købt i vores Webshop, kan der sendes
          en klage til:
        </p>
        <br></br>
        <p>Konkurrence- og Forbrugerstyrelsens Center for Klageløsning</p>
        <p>Carl Jacobsens Vej 35</p>
        <p>2500 Valby</p>
        <p>Link: www.forbrug.dk</p>
        <br></br>
        <p>
          Hvis du er forbruger med bopæl i et andet EU-land, kan du angive din
          klage i EU Kommissionens online klageplatform.
        </p>
        <p>
          Platformen findes her:{" "}
          <a
            href="http://ec.europa.eu/consumers/odr/"
            className="text-violet-800"
          >
            http://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p>
          Angiver du en klage her, skal du oplyse vores E-mail adresse: [
          E-MAILADRESSE ]
        </p>
      </section>
    </>
  );
};

export default TradingConditions;
