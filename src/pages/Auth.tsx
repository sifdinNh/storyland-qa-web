import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MoreHorizontal, Copy, Check, ExternalLink } from "lucide-react";
import storylandLogo from "@/assets/storyland-star-logo.png";

// Detect if the user is in an in-app browser
function isInAppBrowser(): boolean {
  const ua = navigator.userAgent || navigator.vendor || "";

  // Common in-app browser identifiers
  const inAppBrowserPatterns = [
    /QQ\//i,              // QQ browser
    /MicroMessenger/i,    // WeChat
    /Line\//i,            // LINE app
    /FBAN|FBAV/i,         // Facebook app
    /Instagram/i,         // Instagram app
    /Twitter/i,           // Twitter/X app
    /Snapchat/i,          // Snapchat
    /Pinterest/i,         // Pinterest
    /LinkedIn/i,          // LinkedIn app
    /KAKAOTALK/i,         // KakaoTalk
    /Slack/i,             // Slack
    /WhatsApp/i,          // WhatsApp
  ];

  return inAppBrowserPatterns.some(pattern => pattern.test(ua));
}

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [copied, setCopied] = useState(false);
  const [isInApp, setIsInApp] = useState(false);
  const [deepLinkAttempted, setDeepLinkAttempted] = useState(false);

  const token = searchParams.get("token");
  const currentUrl = window.location.href;

  useEffect(() => {
    setIsInApp(isInAppBrowser());
  }, []);

  useEffect(() => {
    // If not in an in-app browser, attempt to deep link
    if (!isInApp && token && !deepLinkAttempted) {
      setDeepLinkAttempted(true);

      // Construct the deep link URL
      const deepLinkUrl = `storyland://auth?token=${token}`;

      // Try to open the app
      window.location.href = deepLinkUrl;
    }
  }, [isInApp, token, deepLinkAttempted]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Show instructions for in-app browser users
  if (isInApp) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-4">
        <div className="max-w-md w-full bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src={storylandLogo}
              alt="Storyland"
              className="w-16 h-16 rounded-xl shadow-md"
            />
          </div>

          {/* Title */}
          <h1 className="text-xl md:text-2xl font-bold text-foreground text-center mb-2">
            Open in Browser
          </h1>
          <p className="text-muted-foreground text-center mb-6 text-sm md:text-base">
            To continue, please open this link in your browser
          </p>

          {/* Instructions */}
          <div className="space-y-4 mb-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground mb-1">
                  Tap the menu button
                </p>
                <p className="text-sm text-muted-foreground">
                  Look for <MoreHorizontal className="inline w-5 h-5 mx-1 align-middle" /> or <span className="font-mono bg-muted px-1.5 py-0.5 rounded">...</span> in the top-right corner
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground mb-1">
                  Open in browser
                </p>
                <p className="text-sm text-muted-foreground">
                  Select <span className="font-medium">"Open in Browser"</span>, <span className="font-medium">"Open with Browser"</span>, or <span className="font-medium">"Open in Safari/Chrome"</span>
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">or</span>
            </div>
          </div>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-xl transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-5 h-5 text-green-500" />
                Link Copied!
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" />
                Copy Link
              </>
            )}
          </button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Paste this link in Safari, Chrome, or your preferred browser
          </p>
        </div>
      </div>
    );
  }

  // Regular browser - show a message while attempting to open the app
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 p-4">
      <div className="max-w-md w-full bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src={storylandLogo}
            alt="Storyland"
            className="w-16 h-16 rounded-xl shadow-md"
          />
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Opening Storyland...
        </h1>
        <p className="text-muted-foreground mb-6 text-sm md:text-base">
          If the app doesn't open automatically, tap the button below
        </p>

        {/* Open App Button */}
        <a
          href={`storyland://auth?token=${token || ""}`}
          className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-colors mb-4"
        >
          <ExternalLink className="w-5 h-5" />
          Open Storyland App
        </a>

        {/* Download Links */}
        <p className="text-sm text-muted-foreground mb-4">
          Don't have the app yet?
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://apps.apple.com/lb/app/storyland-family-stories/id6749536560"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-xl transition-colors text-sm"
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.storylandapp.storyland1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground font-medium rounded-xl transition-colors text-sm"
          >
            Google Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
