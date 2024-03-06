import axios from "axios";

import * as React from "react";

export function useFetchCoin(coinId: string) {
  const [coin, setCoin] = React.useState<
    { name: string; symbol: string } | undefined
  >(undefined);
  React.useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then((res) => setCoin(res.data))
      .catch((err) => console.log(err));
  }, []);

  return coin;
}
