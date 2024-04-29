"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Gsap() {
  const containerRef = useRef(null);
  const circleRef = useRef(null);

  const hoverRef = useRef(null);
  const hoverTween = useRef<gsap.core.Tween | null>(null);

  const animateTimelineRef = useRef(null);
  const animateTimeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      gsap.to(circleRef.current, {
        rotation: "-=360",
        duration: 10,
        repeat: -1,
        ease: "linear",
      });

      hoverTween.current = gsap.to(hoverRef.current, {
        scale: 1.5,
        duration: 0.5,
        paused: true,
      });

      animateTimeline.current = gsap.timeline({ repeat: -1 });
      animateTimeline.current.to(animateTimelineRef.current, {
        x: 100,
        rotate: 90,
        duration: 2,
        ease: "power3.out",
      });
      animateTimeline.current.to(animateTimelineRef.current, {
        y: 100,
        rotate: 180,
        duration: 2,
        ease: "power3.out",
      });
      animateTimeline.current.to(animateTimelineRef.current, {
        x: 0,
        rotate: 270,
        duration: 2,
        ease: "power3.out",
      });
      animateTimeline.current.to(animateTimelineRef.current, {
        y: 0,
        rotate: 360,
        duration: 2,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="w-full">
      <div
        ref={containerRef}
        className="w-full h-[80dvh] border p-8 flex justify-center items-center gap-20"
      >
        <div
          ref={circleRef}
          className="w-52 h-52 bg-red-600 rounded-2xl flex justify-center items-center"
        >
          <p>animation</p>
        </div>
        <div
          className="w-52 h-52 bg-blue-600 rounded-2xl flex justify-center items-center"
          onMouseEnter={() => {
            hoverTween.current?.play();
          }}
          onMouseLeave={() => {
            hoverTween.current?.reverse();
          }}
        >
          <p ref={hoverRef}>hover</p>
        </div>
        <div
          ref={animateTimelineRef}
          className="w-52 h-52 bg-green-600 rounded-2xl flex flex-col gap-1 justify-center items-center"
          onMouseEnter={() => {
            animateTimeline.current?.pause();
          }}
          onMouseLeave={() => {
            animateTimeline.current?.play();
          }}
        >
          <p>timeline</p>
          <span className="text-xs">and</span>
          <p>hover</p>
        </div>
      </div>
    </section>
  );
}
