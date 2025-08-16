"use client";
import { useState } from "react";
import { AlertTriangle, X } from 'lucide-react';
const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-4 sm:px-6 lg:px-8 text-center text-sm font-medium">
      <div className="flex items-center justify-center gap-2">
        <AlertTriangle size={18} className="flex-shrink-0" />
        <span>
          <strong>Under Construction:</strong> This portfolio is a work in
          progress until August 20th.
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss notification"
      >
        <X size={20} />
      </button>
    </div>
  );
};
export default function Notify() {
  <NotificationBar />;
}
