"use client";

import { useEffect, useState } from "react";

export default function RegionPricing({
  us,
  cn,
  forceCN,
}: {
  us: React.ReactNode;
  cn: React.ReactNode;
  forceCN?: boolean;
}) {
  const [isCN, setIsCN] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const region = params.get("region");
    if (region === "us" || region === "cn") {
      setIsCN(region === "cn");
      return;
    }
    if (forceCN !== undefined) {
      setIsCN(forceCN);
      return;
    }
    const lang = (navigator.language || "").toLowerCase();
    setIsCN(lang.startsWith("zh"));
  }, [forceCN]);
  return <>{isCN ? cn : us}</>;
}
