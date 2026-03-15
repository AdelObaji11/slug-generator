export const slug = (url: string): string => {
  const newurl = url
    .toLowerCase()
    .trim()
    .replace(/[" "_-]+/g, "-")
    .replace(/[!@#$%^&/.*+]+/g, "");
  return trimLeadingAndTrillingDashes(newurl);
};
const trimLeadingAndTrillingDashes = (url: string): string => {
  url = url.startsWith("-") ? url.substring(1) : url;
  url = url.endsWith("-") ? url.substring(0, url.length - 1) : url;
  return url;
};
