export const slug = (url: string): string => {
  let newurl = url
    .toLowerCase()
    .trim()
    .replace(/[" "_-]+/g, "-")
    .replace(/[!@#$%^&/.*+]+/g, "");
  return checkStartAndEnd(newurl);
};
const checkStartAndEnd = (url: string): string => {
  url = url.startsWith("-") ? (url = url.substring(1)) : url;
  url = url.endsWith("-") ? (url = url.substring(0, url.length - 1)) : url;
  return url;
};
