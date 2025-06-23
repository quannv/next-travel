"use client";
import * as Tabs from "@radix-ui/react-tabs";
import React, { useState } from "react";
import SwiperSlider from "../Mainslider/swiper-slider";
import TabContents from "./tab-contents";
import { Button } from "../ui/button";
import { DollarSign, ListIcon } from "lucide-react";
import { Switch } from "@radix-ui/themes";

const TabHomePage = () => {
  const [activeTab, setActiveTab] = useState("list");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={handleTabChange}
      className="w-full"
    >
      <div className="sticky top-[80px] z-50 border-b border-gray-50 bg-gray-100 shadow-md">
        <div className="z-50 container mx-auto flex w-full items-center justify-between">
          <Tabs.List className="container mx-auto flex px-4 py-6">
            <Tabs.Trigger
              value="list"
              className={`cursor-pointer px-4 py-2 ${
                activeTab === "list" ? "border-b-2" : "text-gray-500"
              }`}
            >
              Service
            </Tabs.Trigger>
            <Tabs.Trigger
              value="expert"
              className={`cursor-pointer px-4 py-2 ${
                activeTab === "expert" ? "border-b-2" : "text-gray-500"
              }`}
            >
              Expert
            </Tabs.Trigger>
            <Tabs.Trigger
              value="blogs"
              className={`cursor-pointer px-4 py-2 ${
                activeTab === "blogs" ? "border-b-2" : "text-gray-500"
              }`}
            >
              Blogs
            </Tabs.Trigger>
            <Tabs.Trigger
              value="download"
              className={`cursor-pointer px-4 py-2 ${
                activeTab === "download" ? "border-b-2" : "text-gray-500"
              }`}
            >
              Download Strongbody App
            </Tabs.Trigger>
          </Tabs.List>
          <div className="flex items-center gap-4">
            <Button
              className="flex cursor-pointer items-center gap-1"
              variant={"outline"}
            >
              <ListIcon size={16} />
              <span>Category</span>
            </Button>{" "}
            <Button
              className="flex cursor-pointer items-center gap-1 min-w-[200px]"
              variant={"outline"}
            >
              <span>Show nearest me</span>
              <Switch />
            </Button>{" "}
            <Button
              className="flex cursor-pointer items-center gap-1"
              variant={"outline"}
            >
              <DollarSign size={16} />
              <span>USD</span>
            </Button>
          </div>
        </div>
      </div>

      <TabContents />
    </Tabs.Root>
  );
};

export default TabHomePage;
