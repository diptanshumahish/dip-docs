import React from "react";

export default function WidthLimiter({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full flex items-center justify-center lg:px-[5%] xl:px-[5%] md:px-[2%] px-[24px]">
      <div className="max-w-[1440px] w-full">{children}</div>
    </div>
  );
}
