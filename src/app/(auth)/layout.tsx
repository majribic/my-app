import Link from "next/link";
import React from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            {link.name}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
}
