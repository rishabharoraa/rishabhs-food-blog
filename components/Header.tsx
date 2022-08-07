import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="py-14">
      <Link href="/">
        <div className="text-7xl font-black text-center mb-4">
          Rishabh&apos;s Food Blog
        </div>
      </Link>
    </div>
  );
}
