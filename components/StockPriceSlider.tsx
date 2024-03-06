import React from "react";

interface StockPriceSliderProps {
  low: number;
  high: number;
  height?: number;
}

const StockPriceSlider: React.FC<StockPriceSliderProps> = ({ low, high, height = 8 }) => {
  // Calculate the range and position of the slider
  const range = high - low;
  const position = (low / range) * 100;

  return (
    <div className="relative flex items-center">
      <p className="mr-2 text-gray-600">{low}</p>
      <div className="flex-1 relative">
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 to-green-500"
          style={{ width: "100%", right: `${100 - position}%`, height: `${height}px` }}
        />
        <div
          className="absolute h-full w-2 bg-white border border-gray-400 rounded-full"
          style={{ left: `${position}%`, width: "2px" }}
        />
      </div>
      <p className="ml-2 text-gray-600">{high}</p>
    </div>
  );
};

export default StockPriceSlider;
