import React, { useMemo } from "react";
import Link from "next/link";

interface Props {
  link: string;
  text: string;
  color: string;
  icon?: JSX.Element;
  fullWidth?: boolean;
}

const LinkButton: React.FC<Props> = ({
  link,
  text,
  color,
  icon,
  fullWidth = false,
}) => {
  const isLightColor = useMemo(() => {
    const hex = color.replace(/^#/, "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    return luminance > 0.5;
  }, [color]);

  return (
    <Link href={link} className={`z-10 ${fullWidth ? "w-full" : ""}`}>
      <span
        className={`inline-flex items-center rounded-md hover:bg-opacity-80  px-4 py-2 transition-colors duration-300 font-semibold text-[15px] tracking-wide ${
          fullWidth ? "justify-center" : ""
        }   ${fullWidth ? "w-full" : ""} ${
          isLightColor ? "text-black" : "text-white"
        }`}
        style={{ backgroundColor: color }}
      >
        {text}
        {icon && <span className="ml-2">{icon}</span>}
      </span>
    </Link>
  );
};

export default LinkButton;
