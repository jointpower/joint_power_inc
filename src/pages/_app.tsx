import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from 'react'

import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }: AppProps) {

    useEffect(() => {
        Aos.init({
          duration: 800,
          once: true,
          
        });
      }, []);

    return (
        <>
            <Component {...pageProps} />
            <Script id="tawk" strategy="lazyOnload">
                {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
           (function(){
           var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
           s1.async=true;
          s1.src='https://embed.tawk.to/63ff201a4247f20fefe34ff9/1gqe9aq2d';
           s1.charset='UTF-8';
           s1.setAttribute('crossorigin','*');
           s0.parentNode.insertBefore(s1,s0);
           })();
        `}
            </Script>
        </>
    );
}

export default MyApp;
