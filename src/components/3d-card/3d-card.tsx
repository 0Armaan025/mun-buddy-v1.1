"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card-component";
import Link from "next/link";

type Props = {
  planName: any;
  price: any;
  features: any;
};

export function ThreeDCardDemo({ planName, price, features }: Props) {
  return (
    <CardContainer className="inter-var mt-0 ">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto  h-auto rounded-xl p-6 border  ">
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-2xl max-w-sm dark:text-white"
        >
          ${price}
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-lg font-bold text-neutral-600 dark:text-neutral-300"
        >
          {planName}
        </CardItem>

        <div className="mt-6">
          <ul className="list-disc list-inside">
            {features.map(
              (
                feature:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined,
                index: React.Key | null | undefined
              ) => (
                <li
                  key={index}
                  className="text-neutral-500 dark:text-neutral-300 list-none"
                  style={{ fontFamily: "Poppins" }}
                >
                  ✅ {feature}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex justify-center items-center mt-6">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-sm font-normal dark:text-white bg-[#0f191c]"
          >
            Pay
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
