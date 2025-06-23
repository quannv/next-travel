"use client";
import React, { useState } from "react";
import { Card, Box, Inset } from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import { HeartIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { convertSlugTitle } from "@/lib/utils";

type CardData = {
  title: string;
  price: number;
  image: StaticImageData;
  author?: string;
  description?: string;
  country?: string;
  userCreatedAt?: Date | string;
  views?: number;
};

const ServiceCard = (props: { data: CardData }) => {
  console.log("ServiceCard props:", props.data);
  const { title, price, image, author } = props.data;
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked((prev) => !prev);
  };
  return (
    <Link href={`/listing/${convertSlugTitle(title)}`}>
      <Card
        size="3"
        className="relative w-[282px] cursor-pointer rounded-md border border-gray-200 pb-8"
      >
        <Inset clip="padding-box" side="top" pb="current">
          <Image
            src={image}
            alt={title}
            width={384}
            height={237}
            className="block h-[180px] w-full rounded-md object-cover"
          />
          <HeartIcon
            onClick={toggleLike}
            className={`absolute top-5 right-5 cursor-pointer border-none transition-colors duration-300 outline-none ${
              liked
                ? "fill-red-500 stroke-red-500"
                : "fill-black stroke-gray-50"
            }`}
          />{" "}
        </Inset>

        <div className="px-2">
          <p>
            <span className="text-gray-500">by</span> {author}
          </p>
          <p
            className="mt-2 line-clamp-2 min-h-[80px] overflow-hidden leading-[1.5] font-medium text-ellipsis"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </p>{" "}
          <div className="flex items-center justify-between text-gray-500">
            <p className="">From US ${price}</p>
            <div className="flex items-center gap-1">
              <StarIcon width={16} height={16} />
              <p>5</p>
            </div>
          </div>
          <p className="text-gray-500">Online working format</p>
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
