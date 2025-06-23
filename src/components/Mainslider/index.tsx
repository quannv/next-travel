import * as React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import banner from "../../assets/images/resources/banner.png";
import subTitle from "../../assets/images/resources/sub_tittle.svg";
import { Button } from "../ui/button";

export interface IMainsliderProps {}

export default async function Mainslider(props: IMainsliderProps) {
  const t = await getTranslations("home");

  return (
    <div className="relative h-[100vh] w-full">
      <div className="block h-full w-full">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${banner.src})`,
          }}
        />
        <div className="bg-gradient-custom absolute inset-0 z-10" />
      </div>

      <div className="absolute bottom-1/2 left-1/2 z-30 container flex h-auto -translate-x-1/2 translate-y-1/2 flex-col text-white">
        <Image src={subTitle} alt="sub title" className="" />
        <h1 className="text-primary mt-4 text-[40px] leading-[1.4] font-bold whitespace-pre-wrap md:text-[64px]">
          {t("banner_title")}
        </h1>
        <h2 className="mt-4 text-[14px] leading-[1.4] font-medium whitespace-pre-wrap text-[#687588] uppercase md:mt-8 md:text-[16px]">
          {t("subtitle_1")} • {t("subtitle_2")} • {t("subtitle_3")}
        </h2>
        <h2 className="mt-2 text-[16px] leading-[1.3] font-bold whitespace-pre-wrap text-gray-900 md:mt-8 md:text-[32px]">
          {t("subtitle_main")}
        </h2>

        <div className="mt-8 flex items-center gap-2 text-[#111827] md:gap-8">
          <div>
            <p className="relative pb-1 text-[16px] font-bold after:absolute after:right-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-[#111827] after:content-[''] md:text-[24px]">
              12.794
            </p>
            <p className="mg:text-[18px] mt-3 rounded-[10px] text-[16px] font-normal">
              {t("num_expert")}
            </p>
          </div>
          <div>
            <p className="border-b-2 border-[#111827] pb-1 text-[16px] font-bold md:text-[24px]">
              100.000+
            </p>
            <p className="mg:text-[18px] mt-3 rounded-[10px] text-[16px] font-normal">
              {t("num_user")}
            </p>
          </div>
          <div>
            <p className="after:content-['']] relative pb-1 text-[16px] font-bold after:absolute after:right-1/2 after:bottom-0 after:w-1/2 after:border-b-2 after:border-[#111827] md:text-[24px]">
              170+
            </p>
            <p className="mg:text-[18px] mt-3 rounded-[10px] text-[16px] font-normal">
              {t("num_countries")}
            </p>
          </div>
        </div>

        <Button className="mt-8 max-w-[198px] rounded-[10px] px-6 py-3 text-[16px] font-medium text-white md:max-w-[383px]">
          {t("post_request")}
        </Button>
      </div>

      <div className="bg-transparent_dark absolute inset-0 z-20 md:z-10" />
    </div>
  );
}
