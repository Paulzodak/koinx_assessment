import * as React from "react";
import { Tabs } from "../molecules/Tabs";

export interface IMetricsProps {}

export function Metrics(props: IMetricsProps) {
  return (
    <>
      <div className="relative">
        <Tabs className="absolute" />
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 smx-4 sms:mx-6 mt-20"></div>
    </>
  );
}
