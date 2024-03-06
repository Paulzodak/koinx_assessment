import axios from "axios";
import { UseCapitalizeFirstWord } from "@/hooks/useCapitalizeFirstWord";
import { PiCaretDoubleRightLight } from "react-icons/pi";
import type { Metadata, ResolvingMetadata } from "next";

// type Props = {
//   params: { name: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// }

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.name;
  console.log(id);

  // fetch data
  const coin = await axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => res.data.name)
    .catch((err) => {});
  // console.log(coin);
  // optionally access and extend (rather than replace) parent metadata

  if (coin)
    return {
      title: coin,
      description: coin + coin,
      keywords: `${coin} , ${coin} ,${coin} , ${coin.category},`,
    };
  else {
    return { title: "Not found", description: "Page not found" };
  }
}
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: any;
}>) {
  const name = UseCapitalizeFirstWord(params.name);
  const coin = await axios
    .get(`https://api.coingecko.com/api/v3/coins/${params.name}`)
    .then((res) => res.data.name)
    .catch((err) => {});
  if (coin || !coin) {
    console.log("coin came");
    return (
      <div lang="en" className="py-4 sm:py-6 ">
        <div className="flex gap-x-2 items-center text-sm mt-2 px-4 sm:px-6">
          <h3 className="text-textGray">Cryptocurrencies</h3>
          <PiCaretDoubleRightLight className="mt-[2px]" size="1rem" />
          <h3>{name}</h3>
        </div>
        <div className="max-w-[100vw] overflow-y-hidden bg-redf-200">
          {children}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Not found
      </div>
    );
  }
}
