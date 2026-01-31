"use client";

import dynamic from "next/dynamic";

export default dynamic(
  async () => {
    const { Oneko } = await import("lots-o-nekos");
    new Oneko();
    return () => null;
  },
  { ssr: false }
);
