import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => (
  <a
    href="https://wa.me/919176111302?text=Hi!%20I'd%20like%20to%20learn%20more%20about%20Kidz%20playschool."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group font-bold"
  >
    <MessageCircle className="w-6 h-6 fill-white" />
    <span className="text-base">Chat with us</span>
  </a>
);
