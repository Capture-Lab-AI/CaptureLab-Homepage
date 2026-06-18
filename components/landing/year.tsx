"use client";

import { useEffect, useState } from "react";

/* Renders the current year at runtime. The page is statically generated, so a
   plain `new Date()` in a Server Component would freeze the year at build time;
   resolving it after mount keeps the copyright correct without a redeploy.
   Starts null to avoid a hydration mismatch across a year boundary. */
export function Year() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <>{year}</>;
}
