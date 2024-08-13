import "swiper/css";
import "../globals.css";
import "swiper/css/navigation";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";
import { Suspense } from "react";
import Loading from "./loading";
import GoogleAnalytics from "./GoogleAnalytics";
export const metadata = getStaticMetaData({
  title: "Home Page - SAND & FUN  ",
  description: "19-23 Novembar 2024 ,Al Thumamah airport Saudi Arabia",
  isRobotFollow: true
});

export default async function LocaleLayout({ children, params: { locale } }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale == "ar" ? "rtl" : "ltr"}>
      <body>
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
