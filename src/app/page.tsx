"use client";

import { SplineSceneBasic } from "@/components/ui/demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full space-y-10 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-teal-50">
          “Hello from HUSTLEHIVE.in How are you guys?”
        </h1>

        <SplineSceneBasic />
      </div>
    </main>
  );
}
