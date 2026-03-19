// pages/_app.js - VERSÃO SIMPLES SEM CSS
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-L9QFXDT8PL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L9QFXDT8PL');
        `}
      </Script>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
