"use client";
import { BtcIcon } from "@/assets/svgs/btcIcon";
import { UseCapitalizeFirstWord } from "@/hooks/useCapitalizeFirstWord";
import { useFetchCoin } from "@/hooks/useFetchCoin";
import { useFetchPrice } from "@/hooks/useFetchPrice";
import { PiCaretUpFill } from "react-icons/pi";
import * as React from "react";
import TradingViewWidget from "@/components/widgets/tradingViewWidget";
import { useSeperateNumbers } from "@/hooks/useSeperateNumbers";
import { Tabs } from "@/components/molecules/Tabs";
import { Metrics } from "@/components/organisms/metrics";

export interface IPageProps {
  params: any;
}

export default function Page({ params }: IPageProps) {
  const [timeFrame, setTimeFrame] = React.useState("24H");
  console.log(params);
  const name = UseCapitalizeFirstWord(params.name);

  console.log("i ran");
  const coin = useFetchCoin(params.name);
  const usdPrice = useFetchPrice(params.name, "usd");
  const inrPrice = useFetchPrice(params.name, "inr");
  console.log(usdPrice);
  const final_usdPrice = usdPrice?.usd && useSeperateNumbers(usdPrice?.usd);
  const final_inrPrice = inrPrice?.inr && useSeperateNumbers(inrPrice?.inr);

  console.log(inrPrice);
  const percentageChange = usdPrice
    ? (usdPrice["usd_24h_change"] / usdPrice["usd"]) * 100
    : "";
  console.log(percentageChange);
  // p-4 sm:px-6
  return (
    <div className="grid md:grid-cols-[auto_20rem] gap-x-4 mt-4 max-w-[100vw] overflow-x-hidden">
      <div className="flex sm:hidden items-center gap-x-2 mb-6 px-4 sm:px-6">
        <BtcIcon />
        <h2 className="text-lg">{coin?.name}</h2>
        <h4 className="text-sm text-textGray font-semibold">
          {coin?.symbol.toUpperCase()}
        </h4>
        <button className="bg-[#808A9D] ml-4 px-3 rounded-md py-2 text-white text-xs">
          Rank #1
        </button>
      </div>
      <div className="mx-4 sm:mx-6">
        <div className="bg-white rounded-lg p-4 border border-gray-300 smx-4 sms:mx-6">
          <div className="md:flex items-center gap-x-2 hidden ">
            <BtcIcon />
            <h2 className="text-lg">{coin?.name}</h2>
            <h4 className="text-sm text-textGray font-semibold">
              {coin?.symbol.toUpperCase()}
            </h4>
            <button className="bg-[#808A9D] ml-4 px-3 rounded-md py-2 text-white text-xs">
              Rank #1
            </button>
          </div>
          <div>
            {final_usdPrice ? (
              <div className="flex gap-x-4 sm:justify-normal">
                {usdPrice && (
                  <h1 className="text-3xl font-semibold">${final_usdPrice}</h1>
                )}
                <span className="flex rounded-lg bg-[#EBF9F4] items-center gap-2 px-4 justify-evenly text-[#14B079]">
                  <PiCaretUpFill color="#14B079" />
                  <p>2.02</p>
                </span>
                <p className="my-auto text-textGray">({timeFrame})</p>
              </div>
            ) : (
              <div className="h-6 bg-slate-200 rounded w-52 animate-pulse"></div>
            )}
            {final_inrPrice ? (
              <h1>₹{final_inrPrice}</h1>
            ) : (
              <div className="h-4 mt-2 bg-slate-200 rounded w-40 animate-pulse"></div>
            )}
          </div>

          <hr className="mt-6 mb-3" />
          {coin?.symbol ? (
            <TradingViewWidget
              className="relative !border-none h-80 my-6"
              pair={`${coin?.symbol.toUpperCase()}USD`}
            />
          ) : (
            <div className="borsder border-gray-300 shadosw rounded-md p-4 w-full mx-auto">
              <div className="animate-pulse flex space-x-2">
                <div className="h-52 bg-slate-200 rounded w-full"></div>
              </div>
            </div>
          )}
        </div>
        <Metrics />
      </div>
      <div className="mx-4 sm:mx-6">
        <div className="bg-[#0052FE] rounded-lg hidden sm:block w-full h-40" />
      </div>
    </div>
  );
}
