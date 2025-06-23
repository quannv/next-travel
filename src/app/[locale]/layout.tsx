import Header from "@/components/Header";
import "./globals.css";
import { Outfit } from "next/font/google";
import Footer from "@/components/Footer";
import "../../styles/index.css";
import { SiteParams } from "@/types";
import { headers } from "next/headers";
import { Suspense } from "react";
import { Viewport } from "next";
import CookieConsentBanner from "@/components/common/cookie";
import siteData from "@/data/siteData";
export const dynamic = "force-dynamic";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

type MetadataProps = {
  params: { site_id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export async function generateMetadata({ params }: MetadataProps) {
  const site = siteData;
  const headersList = await headers();
  const referer = headersList.get("referer");

  let domain: string;

  if (referer) {
    domain = new URL(referer).origin;
  } else if (process.env.NODE_ENV === "development") {
    domain = "http://localhost:3000"; // Adjust if needed
  } else {
    // For production you might want to use an environment variable.
    // For example: process.env.NEXT_PUBLIC_PROD_DOMAIN || "https://nexttravel.demo"
    domain =
      process.env.NEXT_PUBLIC_PROD_DOMAIN ||
      "https://nexttravel.joombooking.com";
  }

  let siteParams: SiteParams = site.params && JSON.parse(site.params);

  //console.log('siteParams', siteParams);

  return {
    metadataBase: new URL(domain),
    title: siteParams && siteParams.meta_title ? siteParams.meta_title : "",
    applicationName: site.name,

    description: siteParams && siteParams.meta_description,
    keywords: [
      siteParams && siteParams.meta_keywords,
      siteParams && siteParams.meta_title,
    ],
    url: site.url,
    siteName: site.name,
    openGraph: {
      title: siteParams && siteParams.meta_title,
      description: siteParams && siteParams.meta_description,
      siteName: site.name,
      url: site.url,
      images: [
        {
          url: "https://res.cloudinary.com/drnf8u8vq/image/upload/v1738810622/nextravel/opengraph_ahonad.webp", // Must be an absolute URL
          width: 513,
          height: 371,
        },
      ],

      locale: "en_US",
      type: "website",
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    authors: [{ name: site.name }],
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
      },
    },
    type: "website",
  };
}
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={`bg-white text-base ${outfit.variable} font-sans`}>
        <link rel="icon" href="/favicon.png" />
        <Header locale={locale} />
        <main className="main pt-[55px] md:pt-[80px]">{children}</main>

        <Suspense fallback={<div>Loading...</div>}>
          <div className="border-t border-gray-200">
            <Footer />
          </div>
        </Suspense>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
