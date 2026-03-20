"use client";

import ColorPicker from "@/components/color-picker";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="absolute top-20 left-4 z-20">
        <ColorPicker />
      </div>
      <Experience />
    </div>
  );
}
