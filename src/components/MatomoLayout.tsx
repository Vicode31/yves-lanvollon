"use client";

import { trackAppRouter } from "@socialgouv/matomo-next";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MATOMO_URL = "https://matomo.osteopathe-champigny-sur-marne.com/";
const MATOMO_SITE_ID = "8";

const MatomoLayout = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    trackAppRouter({
      url: MATOMO_URL,
      siteId: MATOMO_SITE_ID,
      pathname,
      searchParams,
    });
  }, [pathname, searchParams, isMounted]);

  return null;
};

export default MatomoLayout;
