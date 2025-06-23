"use client";
import * as Tabs from "@radix-ui/react-tabs";
import React from "react";
import SwiperSlider from "../Mainslider/swiper-slider";
import TrendingServices from "../services-home/trending";
import BrowsingHistoryServices from "../services-home/browsing-history";
import MostPopularServices from "../services-home/most-popular";

const TabContents = () => {
  return (
    <>
      <Tabs.Content value="list" className="py-4">
        <SwiperSlider />
        <TrendingServices />
        <div className="my-16 bg-gray-100 py-4">
          {" "}
          <BrowsingHistoryServices />
        </div>
        <div className="my-16 py-4">
          {" "}
          <MostPopularServices />
        </div>
      </Tabs.Content>
      <Tabs.Content value="expert" className="p-4">
        Expert
      </Tabs.Content>
      <Tabs.Content value="blogs" className="p-4">
        Blogs
      </Tabs.Content>
      <Tabs.Content value="download" className="p-4">
        Download Strongbodyapp
      </Tabs.Content>
    </>
  );
};

export default TabContents;
