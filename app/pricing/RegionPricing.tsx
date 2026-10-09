"use client";

import { useEffect, useState } from "react";

export default function RegionPricing({
  us,
  cn,
}: {
  us: React.ReactNode;
  cn: React.ReactNode;
}) {
  const [isCN, setIsCN] = useState(false);
  useEffect(() => {
    const lang = (navigator.language || "").toLowerCase();
    setIsCN(lang.startsWith("zh"));
  }, []);
  return <>{isCN ? cn : us}</>;
}
