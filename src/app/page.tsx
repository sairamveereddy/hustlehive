"use client";

import { SplineScene } from "./SplineScene";

const SCENE_URL =
  process.env.NEXT_PUBLIC_SPLINE_SCENE ||
  "https://prod.spline.design/your-scene-id/scene.splinecode";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <SplineScene scene={SCENE_URL} className="h-screen w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-black" />
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="max-w-2xl rounded-3xl border border-teal-200/25 bg-black/60 px-8 py-10 text-center shadow-[0_0_50px_rgba(5,20,18,0.65)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.35em] text-teal-100/70">
              Hustle Hive
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-teal-50 sm:text-5xl">
              “Hello from HUSTLEHIVE.in  How are you guys?”
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-teal-100/85">
              “We are building a free AI auto-apply bot here. And it&apos;s coming soon.”
              Completely free.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
