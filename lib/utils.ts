import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteValueWithTwoDecimalPoints(number: Number) {
  return Math.abs(parseFloat(number?.toFixed(2)));
}

export function numberWithCommasUSD(x: Number) {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function numberWithCommasINR(number: Number) {
  return number?.toLocaleString("en-IN");
}

export function formatToTwoDecimalPoints(number: Number) {
  return parseFloat(number?.toFixed(2));
}

export const BITCOIN_API = "https://api.coingecko.com/api/v3/coins/bitcoin";

export const SIMPLE_PRICE_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true";

export const TRENDING_COINS_API = "https://api.coingecko.com/api/v3/search/trending";
