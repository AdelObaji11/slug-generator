export const slug = (url: string): string => {
  let newurl = url.toLowerCase().trim();
  newurl = url.replace(/[" "_-]+/g, "-");
  newurl = url.replace(/[!@#$%^&/.*-+]+/g, "");
  newurl = newurl.charAt(0) === "-" ? (newurl = newurl.substring(1)) : newurl;
  newurl =
    newurl.charAt(newurl.length - 1) === "-"
      ? (newurl = newurl.substring(0, newurl.length - 1))
      : newurl;
  return newurl;
};
