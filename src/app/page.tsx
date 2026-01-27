"use client";

import { SplineSceneBasic } from "@/components/ui/demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full">
        <SplineSceneBasic />
      </div>
    </main>
  );
}
