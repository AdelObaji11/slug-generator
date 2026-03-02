export const slug = (url: string): string => {
  let newurl = url
    .toLowerCase()
    .trim()
    .replace(/[" "_-]+/g, "-")
    .replace(/[!@#$%^&/.*+]+/g, "");
  return cleanSlug(newurl);
};
const cleanSlug = (helpUrl: string): string => {
  helpUrl =
    helpUrl.charAt(0) === "-" ? (helpUrl = helpUrl.substring(1)) : helpUrl;
  helpUrl =
    helpUrl.charAt(helpUrl.length - 1) === "-"
      ? (helpUrl = helpUrl.substring(0, helpUrl.length - 1))
      : helpUrl;
  return helpUrl;
};
