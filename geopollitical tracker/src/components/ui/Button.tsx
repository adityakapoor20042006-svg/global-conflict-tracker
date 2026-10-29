"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  icon?: React.ReactNode;
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  icon,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-offset-4";

  const styles: Record<string, string> = {
    primary: "bg-sandstone text-basalt hover:bg-limestone",
    secondary: "glass text-limestone hover:bg-limestone/15",
    ghost: "text-limestone underline-offset-4 hover:underline",
  };

  const content = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(base, styles[variant], className)}
    >
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={typeof children === "string" ? children : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick}>
      {content}
    </button>
  );
}
