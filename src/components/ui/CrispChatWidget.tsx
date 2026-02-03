import { useState, useEffect } from "react";

declare global {
  interface Window {
    $crisp: any;
    CRISP_WEBSITE_ID: string;
  }
}

export function CrispChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Check chat state
    const checkStatus = () => {
      if (window.$crisp) {
        try {
          const chatOpen = window.$crisp.is("chat:opened");
          setIsChatOpen(chatOpen === true);
        } catch {
          // ignore
        }
      }
    };

    // Listen for Crisp events
    if (window.$crisp) {
      window.$crisp.push(["on", "chat:opened", () => setIsChatOpen(true)]);
      window.$crisp.push(["on", "chat:closed", () => setIsChatOpen(false)]);
    }

    const interval = setInterval(checkStatus, 500);
    checkStatus();

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Hide card when chat is open
  if (isChatOpen) return null;

  return (
    <div className="fixed bottom-4 right-20 z-[9998]">
      <div className="bg-white rounded-2xl shadow-2xl px-4 py-3 border border-gray-100">
        <h3 className="font-semibold text-gray-900 text-base whitespace-nowrap">
          Questions? Chat with us.
        </h3>
      </div>
    </div>
  );
}
