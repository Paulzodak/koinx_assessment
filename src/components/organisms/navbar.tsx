"use client";
import { KoinxLogo } from "@/assets/svgs/koinxLogo";
import { IoIosMenu } from "react-icons/io";
import * as React from "react";
import { useFetchPrice } from "@/hooks/useFetchPrice";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const price = useFetchPrice("litecoin", "inr");

  return (
    <div>
      <nav className="bg-[#FFFFFF] h-[60px] sm:h-[80px] border flex px-4 items-center justify-between">
        <KoinxLogo />
        <IoIosMenu size="1.8rem" className="sm:hidden" />
        <div className="hidden sm:flex gap-x-4 md:gap-x-6 font-semibold text-[#0F1629] items-center">
          <h3>Crypto Taxes</h3>
          <h3>Free Tools</h3>
          <h3>Resource Center</h3>
          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-4 py-2 rounded-lg text-white">
            Get Started
          </button>
        </div>
      </nav>
    </div>
  );
}
