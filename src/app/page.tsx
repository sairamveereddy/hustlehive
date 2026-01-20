"use client";

import { SplineSceneBasic } from "@/components/ui/demo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-5xl w-full space-y-8">
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-[0.35em] text-teal-100/70">
            Hustle Hive
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-teal-50">
            “Hello from HUSTLEHIVE.in  How are you guys?”
          </h1>
          <p className="text-lg text-teal-100/85">
            “We are building a free AI auto-apply bot here. And it&apos;s coming soon.”
            Completely free.
          </p>
        </div>

        <SplineSceneBasic />
      </div>
    </main>
  );
}
