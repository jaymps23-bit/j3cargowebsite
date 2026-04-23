/*
 * WhatsApp Floating Button — visible on all pages
 * Forest green with gold hover, bottom-right corner
 */
import { BUSINESS } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={BUSINESS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-lg shadow-black/20 hover:scale-110 transition-all duration-200"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
