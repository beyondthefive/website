import fetch from "isomorphic-unfetch";

export default async () => {
  const res = await fetch("/.netlify/functions/stats");
  return await res.json();
};
