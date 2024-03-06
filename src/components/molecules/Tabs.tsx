import * as React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export interface ITabsProps {
  className: string;
}

export function Tabs({ className }: ITabsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = searchParams.get("tab");
  const pathname = usePathname();
  const tabs = [
    "Overview",
    "Fundamentals",
    "News insight",
    "Sentiments",
    "Team",
    "Technical",
    "Tokenomics",
  ];
  return (
    <div className={`${className} my-3`}>
      <div className="flex flex-row flex-nowrap gap-6 text-nowrap overflow-scroll max-w-[100vw] border-b-[1px] border-gray-300 ">
        {tabs.map((item: string, i: number) => {
          return (
            <div
              onClick={() => router.push(`${pathname}?tab=${item}`)}
              className={`${
                params?.toLowerCase() == item.toLowerCase()
                  ? "border-mainBlue border-b-[2px] text-mainBlue "
                  : !params &&
                    item == "Overview" &&
                    "border-b-[2px] border-mainBlue text-mainBlue"
              }   py-2 cursor-pointer`}
              key={i}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
