import React from "react";

export default function EnvironmentBanner() {
  const env = process.env.NEXT_PUBLIC_NODE_ENV;

  let bgColor = "";
  let text = "";

  if (env === "production") {
    bgColor = "bg-green-600";
    text = "Production Environment";
  } else {
    bgColor = "bg-yellow-500";
    text = "Development Environment";
  }

  return (
    <div className={`${bgColor} text-white text-center text-sm py-1`}>
      {text}
    </div>
  );
}