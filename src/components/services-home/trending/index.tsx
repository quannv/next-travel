import React from "react";
import { trendingServiceData } from "@/data/trendingServiceData";
import ServiceCard from "../service-card";

const TrendingServices = () => {
  return (
    <div className="container">
      <h2 className="z-10 order-1 m-0 h-max min-h-0 w-max min-w-0 flex-grow-0 self-start overflow-visible rounded-none text-[32px] leading-[1.4] font-bold whitespace-pre-wrap text-gray-900 opacity-100">
        Trending Services
      </h2>{" "}
      <div className="mt-4 grid gap-x-20 md:grid-cols-4">
        {trendingServiceData.map((service, index) => (
          <ServiceCard
            key={index}
            data={{
              ...service,
              userCreatedAt: new Date(service?.userCreatedAt ?? ""),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingServices;
