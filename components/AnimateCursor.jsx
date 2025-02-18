"use client";
import AnimatedCursor from "react-animated-cursor";

export default function AnimateCursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={30}
        innerScale={1.15}
        outerScale={1.35}
        outerAlpha={15}
        hasBlendMode={true}
        showSystemCursor={false}
        outerStyle={{
          mixBlendMode: "plus-lighter",
          zIndex: "9999",
        }}
        innerStyle={{
          borderRadius: "1rem",
          zIndex: "9999",
          backgroundColor: "#fcd535",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
}
