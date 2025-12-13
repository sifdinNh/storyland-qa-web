import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: "summary" | "summary_large_image";
  noIndex?: boolean;
}

export function SEOHead({
  title = "Storyland - Be Part of Their Story",
  description = "Create magical personalized stories with your own voice. Storyland brings families closer through AI-powered storytelling.",
  canonicalUrl,
  ogImage = "https://storylandapp.ai/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (selector: string, content: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.setAttribute("content", content);
      }
    };

    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[property="og:title"]', title);
    updateMetaTag('meta[property="og:description"]', description);
    updateMetaTag('meta[property="og:image"]', ogImage);
    updateMetaTag('meta[property="og:type"]', ogType);
    updateMetaTag('meta[name="twitter:title"]', title);
    updateMetaTag('meta[name="twitter:description"]', description);
    updateMetaTag('meta[name="twitter:image"]', ogImage);
    updateMetaTag('meta[name="twitter:card"]', twitterCard);

    if (noIndex) {
      updateMetaTag('meta[name="robots"]', "noindex, nofollow");
    }

    // Update canonical URL if provided
    if (canonicalUrl) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute("href", canonicalUrl);
      }
    }
  }, [title, description, canonicalUrl, ogImage, ogType, twitterCard, noIndex]);

  return null;
}
