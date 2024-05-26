import React from "react";
import BannerButtons from "../UIComponents/BannerButtons";
import SocialMediaIcons from "../UIComponents/SocialMediaIcons";
import { BannerProps } from "../model";

export default function Banner({
  myintro,
  socialMediaIcons,
  bannerButtons,
}: BannerProps) {
  return (
    <section className="banner">
      <div className="hello">
        <p>hello!</p>
      </div>
      <div className="my-intro">
        <p>{myintro?.introText1}</p>
        <p>{myintro?.introText2}</p>
      </div>
      <div className="container1">
        <div className="social-media-icons">
          {socialMediaIcons?.map((iconData, index) => (
            <SocialMediaIcons key={index?.toString()} {...iconData} />
          ))}
        </div>
        <div className="buttons">
          {bannerButtons?.map((button, index) => (
            <BannerButtons key={index?.toString()} {...button} />
          ))}
        </div>
      </div>
    </section>
  );
}
