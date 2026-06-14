import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "default" | "footer";
  size?: "sm" | "md";
  className?: string;
};

export default function CtaButton({
  children,
  href,
  variant = "default",
  size = "sm",
  className = "",
}: CtaButtonProps) {
  const offsetColor = variant === "footer" ? "bg-[#ff6a45]" : "bg-brand-yellow";
  const sizeClass = size === "md" ? "px-9 py-4 text-sm" : "px-6 py-3 text-[10px]";
  const baseClass = [
    "relative inline-flex items-center justify-center rounded-full",
    "transition-transform duration-300 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1",
    className,
  ].join(" ");
  const offsetClass = [
    "absolute inset-0 translate-x-2 translate-y-2 rounded-full transition-transform duration-300",
    "group-hover:translate-x-2.5 group-hover:translate-y-2.5 group-active:translate-x-0 group-active:translate-y-0",
    offsetColor,
  ].join(" ");
  const faceClass = [
    "relative z-10 rounded-full bg-brand-red text-white font-overpass font-black uppercase leading-none",
    "shadow-sm",
    sizeClass,
  ].join(" ");

  const content = (
    <>
      <span aria-hidden="true" className={offsetClass} />
      <span className={faceClass}>{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`group ${baseClass}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={`group ${baseClass}`}>
      {content}
    </button>
  );
}
