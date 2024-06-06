"use client";
import Head from "next/head";
import Footer from "../../molecules/Footer/Footer";
import Header from "../../molecules/Header/Header";
import AOS from "aos";
import { useEffect } from "react";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  type?: string;
  image?: string;
}

const Layout = ({ children, ...customMeta }: LayoutProps) => {
  const meta = {
    type: "website",
    // title: "Trusted security services",
    // description:
    //   "JPS - Joint Power Security is among the best security service industry that offers 100% security to lives and property.They also train people that has interest in safeguarding lives and properties. They are simply the best with affordable service charge ",
    ...customMeta,
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto overflow-x-hidden">
      <Head>
        {/* <title>{`${meta.title || ""} | Joint Power`}</title> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta content={meta.description} name="description" />
        {/* <meta property="og:type" content={meta.type} />
        <meta
          property="og:site_name"
          content="Joint Power Security, Rest easy knowing that you have the best security services watching over you"
        />
        <meta property="og:description" content={meta.description} />
        <meta
          name="keywords"
          content="Los,Angeles,California,Texas,all,Bakersfield,Security,guard,service,south,north,affordable,contract,unarmed,nearest,available,provide,hotel,mobile,patrol,joint,power,point,one,night,flat,fee,rate,construction,site,city,cities,Fresno,Hollywood,down,town,Sacramento,Inglewood,Hawthorne,Gardena,valley,watch,fire,urgent,Beverly,medical,property,office,find,license,officer,any,safety,trained,me,near,zip,code,access,control,warehouse,Power,gas,station,gate,gated,community,facilities,Park,parking,lot,school,church,alarm,response,Redding,San,Francisco,Diego,county,state,homeless,secure,supply,client,win,offer, jps, jpss"
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@O_sunday15" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preload" as="image" href="/images/brand-logo.svg"></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          rel="preload"
          as="image"
          href="/images/joinUs/joinus-bg-img.png"
        ></link>
      </Head>

      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
