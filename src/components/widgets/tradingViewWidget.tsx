// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({
  className,
  pair,
}: {
  className?: string;
  pair?: string;
}) {
  // console.log
  const container: any = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    // container_id: "basic-area-chart-demo",
    // width: "100%",
    // height: "100%",
    // autosize: true,
    // symbol: "AAPL",
    // interval: "D",
    // timezone: "exchange",
    // theme: "light",
    // style: "3",
    // hide_top_toolbar: true,
    // save_image: false,
    // locale: "en",
    script.innerHTML = `
        {
            "autosize": true,
            "symbol": "BITSTAMP:${pair ? pair : "BTCUSD"}",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "3",
            "locale": "en",
            "enable_publishing": false,
            "hide_top_toolbar": true,
            "range": "1D",
            "save_image": false,
            "calendar": false,
            "hide_volume": true,
            "support_host": "https://www.tradingview.com"
         
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div
      className={className}
      //   className="tradingview-widget-container"
      ref={container}
      //   style={{ height: "100%", width: "100%" }}
    >
      {/* <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div> */}
    </div>
  );
}

export default memo(TradingViewWidget);

// let tvScriptLoadingPromise: any;

// function TradingViewWidget2() {
//   const onLoadScriptRef: any = useRef();

//   useEffect(() => {
//     onLoadScriptRef.current = createWidget;

//     if (!tvScriptLoadingPromise) {
//       tvScriptLoadingPromise = new Promise((resolve) => {
//         const script = document.createElement("script");
//         script.id = "tradingview-widget-loading-script";
//         script.src =
//           "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//         script.type = "text/javascript";
//         script.onload = resolve;

//         document.head.appendChild(script);
//       });
//     }

//     tvScriptLoadingPromise.then(
//       () => onLoadScriptRef.current && onLoadScriptRef.current()
//     );

//     return () => (onLoadScriptRef.current = null);

//     function createWidget() {
//       if (
//         document.getElementById("basic-area-chart-demo") &&
//         "TradingView" in window && window?.TradingView?.widget
//       ) {
//         new window.TradingView.widget({
//           container_id: "basic-area-chart-demo",
//           width: "100%",
//           height: "100%",
//           autosize: true,
//           symbol: "AAPL",
//           interval: "D",
//           timezone: "exchange",
//           theme: "light",
//           style: "3",
//           hide_top_toolbar: true,
//           save_image: false,
//           locale: "en",
//         });
//       }
//     }
//   }, []);

//   return (
//     <div
//       className="tradingview-widget-container"
//       style={{ height: "100%", width: "100%" }}
//     >
//       <div
//         id="basic-area-chart-demo"
//         style={{ height: "calc(100% - 32px)", width: "100%" }}
//       />
//       <div className="tradingview-widget-copyright">
//         <a
//           href="https://www.tradingview.com/"
//           rel="noopener nofollow"
//           target="_blank"
//         >
//           <span className="blue-text">Track all markets on TradingView</span>
//         </a>
//       </div>
//     </div>
//   );
// }
