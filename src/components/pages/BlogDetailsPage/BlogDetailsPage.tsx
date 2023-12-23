import Banner from "../../molecules/Banner/Banner";

import blog1 from 'public/bank-security.jpg';
import NextImage from "@/components/atom/NextImage/NextImage";
import news from 'public/team-member-1.jpg'
import { ImMail } from "react-icons/im";
import { HiThumbUp } from "react-icons/hi";
import { MdOutlineFacebook } from "react-icons/md";

const BlogDetailsPage = () => {


  return (
    <div className="text-grey-2 pt-24 ">
      {/* @ts-ignore */}
      <div className="mt-10 max-w-[1200px] mx-auto pt-10 px-5">
        <h3 className="font-semibold text-2xl sm:text-5xl text-center mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quia ducimus!</h3>
        <NextImage src={news} alt="news image" className="w-full sm:w-[550px] h-96" />
        <div className="pt-6 mt-10 flex items-center justify-between border-t">
          <div className="flex items-center gap-6 !text-xs">
            <span>DECEMBER 18, 2023</span>
            |
            <span>POSTED BY: <b>NORRIS ANDERSON</b></span>
            |
            <span>CATEGORY: <b>PRIVATE INVESTIGATIONS</b></span>
          </div>
        </div>
        <div className="mt-14">
          Federal Trade Commission (FTC) issued an advisory warning consumers about scammers hiding malicious links within QR codes as an increasingly convenient means of accessing information. Scammers have taken advantage of this trend to steal sensitive personal data. QR codes have become an easy target for cybercriminals looking to breach individuals’ privacy. Their use may include creating malicious QR codes that, when scanned by users, lead them to fake websites or phishing pages designed to gather passwords, financial details, or any other sensitive data from them.
          <br />  <br />
          For your safety and to avoid becoming the target of QR code scams, it is imperative to exercise extreme caution and heed these important tips: Only scan QR codes from reliable and reputable sources; do not scan codes from unknown or dubious origins.
          <br />  <br />
          Make sure your QR code scanning app comes from a legitimate and reputable provider; some fraudulent apps may pose as legitimate scanners to trick users. Keep abreast of security alerts and advisories issued by authorities like the FTC to stay aware of potential threats and take preventative steps against them. Until you know a website’s legitimacy, avoid entering personal or sensitive data through QR codes.
          <br />  <br />
          For added protection against potential vulnerabilities and exploits, ensure that all security software and applications on your mobile device are regularly updated. Becoming informed and alert and taking precautionary steps against QR code scams are the keys to protecting themselves in today’s digital environment. The Federal Trade Commission emphasizes the importance of promptly reporting suspected fraudulent activities – this will contribute to combating cybercrime while safeguarding personal data. Stay vigilant, informed, and cautious for the best digital experience!
          <br />  <br />
          Federal Trade Commission (FTC) issued an advisory warning consumers about scammers hiding malicious links within QR codes as an increasingly convenient means of accessing information. Scammers have taken advantage of this trend to steal sensitive personal data. QR codes have become an easy target for cybercriminals looking to breach individuals’ privacy. Their use may include creating malicious QR codes that, when scanned by users, lead them to fake websites or phishing pages designed to gather passwords, financial details, or any other sensitive data from them.
          <br />  <br />
          For your safety and to avoid becoming the target of QR code scams, it is imperative to exercise extreme caution and heed these important tips: Only scan QR codes from reliable and reputable sources; do not scan codes from unknown or dubious origins.
          <br />  <br />
          <p>
            Read More About. </p>
          <div className="mt-10">
            <span>Please Like, Follow and Share.</span>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <button className="flex items-center gap-1 bg-primary text-white p-2 px-3 text-xs rounded-lg">
              <ImMail /> Follow
            </button>
            <button className="flex items-center gap-1 bg-primary text-white p-2 px-3 text-xs rounded-lg">
              <HiThumbUp size={16} /> Like
            </button>
            <button className="flex items-center gap-1 bg-primary text-white p-2 px-3 text-xs rounded-lg">
              <MdOutlineFacebook size={17} /> Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
