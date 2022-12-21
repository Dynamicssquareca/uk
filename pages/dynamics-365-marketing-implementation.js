import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

const MarketingImplementation = () => {
  return (
    <>
      <Head>
      <title>Dynamics 365 Marketing Implementation | Dynamics Square</title>
<meta name="description" content="Centralises customer information, utilize marketing automation, and enhance overall marketing performance through implementing Dynamics 365 Marketing."/>
<link rel="canonical" href="https://www.dynamicssquare.co.uk/dynamics-365-marketing-implementation/" />
      </Head>
      <section className="Solution-banner">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1>
                Thanks For Registering
                <br /> To Our Webinar!
              </h1>
              <p>
                We will send you a confirmation email shortly, with details on
                how to join.
              </p>
              <p>
                <b>Until then, take a look at our:</b>
              </p>
              <p>
                <a
                  href="https://www.dynamicssquare.co.uk/blog/"
                  target="_blank"
                  rel="noopener"
                >
                  Resources
                </a>{" "}
                |{" "}
                <Link href="/webinars/" target="_blank" rel="noopener">
                  Previous Webinars
                </Link>
              </p>
              <br />
              <div className="text-center">
                <div className="">
                  <Link href="/">
                    <a className="btn-get-started scrollto">
                      <span>Back to Home</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterHide />
    </>
  );
};

export default MarketingImplementation;
