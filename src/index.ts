export const slug = (url: string): string => {
  const newUrl = url
    .toLowerCase()
    .trim()
    .replace(/[" "_-]+/g, "-")
    .replace(/[!@#$%^&/.*+]+/g, "");
  return trimLeadingAndTrillingDashes(newUrl);
};
const trimLeadingAndTrillingDashes = (url: string): string => {
const startUrl = url.startsWith("-") ? url.substring(1) : url;
const endUrl = startUrl.endsWith("-") ? startUrl.substring(0, startUrl.length - 1) : startUrl;
  return endUrl;
};
