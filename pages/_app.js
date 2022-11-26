import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }) {
  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: "es" },
      "google_translate_element"
    );
  }
  return (
    <>
      <Head>
      

        <script
          type="text/javascript"
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          defer
          async
        />

       

    

  
   
      </Head>
      <div
        style={{
          padding: "5px",
          cursor: "pointer",
          background: "#f6eb3c",
          color: "#1b658e",
          textAlign: "center",
          position: "fixed",
          bottom: "0px",
          zIndex: "99",
          fontSize: "15px",
          fontWeight: "bold",
        }}
        id="google_translate_element"
        onClick={googleTranslateElementInit}
      >
        Change Languge
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
