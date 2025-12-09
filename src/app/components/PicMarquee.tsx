"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
export default function LeftMarquee() {
  // 3-up carousel: show three images (left, center, right).
  // The center image is large (max 460px) and animates: appears from right,
  // stays centered for ~5s, then exits to the left. Side images are smaller.
  const images = ["/marque_pic_1.jpg", "/marque_pic_2.jpg", "/marque_pic_3.jpg", "/marque_pic_4.jpg", "/marque_pic_5.jpg"];
  const [index, setIndex] = useState(0);
  const cycleMs = 2000; // 1s entry + 5s display + 1s exit = 7s

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, cycleMs);
    return () => clearInterval(id);
  }, [images.length]);

  const prev = (index - 1 + images.length) % images.length;
  const prev2 = (index - 2 + images.length) % images.length;
  const next = (index + 1) % images.length;
  const next2 = (index + 2) % images.length;
  // Render each image as a persistent node and compute its slot
  return (
    <div className="carousel-root w-full flex justify-center py-8" aria-hidden>
      <div className="carousel-wrapper w-full max-w-7xl px-4">
        <div className="carousel-inner relative w-full h-[280px] sm:h-[500px] flex items-center justify-center">
          {images.map((src, i) => {
            // compute diff in range [-2..2] for length 5 so we can place slots
            let diff = i - index;
            const half = Math.floor(images.length / 2);
            while (diff > half) diff -= images.length;
            while (diff < -half) diff += images.length;

            const slot =
              diff === -2
                ? "slot-prev2"
                : diff === -1
                ? "slot-prev1"
                : diff === 0
                ? "slot-center"
                : diff === 1
                ? "slot-next1"
                : diff === 2
                ? "slot-next2"
                : "slot-off";

            return (
              <div key={src} className={`slot ${slot}`}>
                <div className="slot-inner relative w-[240px] h-[160px] sm:w-[380px] sm:h-[420px] rounded-lg overflow-hidden shadow-2xl">
                  <Image src={src} alt={`${src}-${i}`} fill className="object-cover" sizes="(max-width: 640px) 160px, 380px" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
