"use client";

import { useEffect } from "react";

export default function GoogleTag() {
  useEffect(() => {
    // Add the Google Tag script
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=AW-16920894393";
    script1.async = true;
    document.head.appendChild(script1);

    // Configure the Google Tag
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-16920894393');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
}
