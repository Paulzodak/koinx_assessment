"use client";
import { KoinxLogo } from "@/assets/svgs/koinxLogo";
import { Layout } from "@/components/templates/layout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#DEDFE2] w-screen h-screen flex items-center justify-center">
      <KoinxLogo size="15rem" />
    </div>
  );
}
