export function formatRealUrl(e: Event) {
  let value = (e.target as HTMLInputElement).value;
  let realLink = "";
  if (value.match(/^http/) || value.match(/^https/)) {
    return value;
  } else {
    realLink = `https://${value}`;
    return realLink;
  }
}
