import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current?.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BITSTAMP:BTCUSD|1M"
            ],
            [
              "BITSTAMP:ETHUSD|1M"
            ],
            [
              "BINANCE:DOGEUSD|1M"
            ]
          ],
          "chartOnly": true,
          "width": 837,
          "height": 460,
          "locale": "en",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962ff",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|60",
            "1w|15",
            "1m|30",
            "3m|60",
            "12m|1D",
            "all|1M"
          ],
           "lineColor": "rgba(41, 98, 255, 1)",
          "topColor": "rgba(41, 98, 255, 0.1)",
          "bottomColor": "rgba(255, 255, 255 , 0.9)"
          
        }`;
      if (container.current) container.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
