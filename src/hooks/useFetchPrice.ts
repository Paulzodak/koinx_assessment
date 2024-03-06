import axios from "axios";

import * as React from "react";

export function useFetchPrice(coinId: string, currency: string) {
  const [price, setPrice] = React.useState<any | undefined>(undefined);
  React.useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${currency}&include_24hr_change=true`
      )
      .then((res) => setPrice(res.data[coinId]))
      .catch((err) => console.log(err));
  }, []);

  return price;
}
