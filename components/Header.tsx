import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="bg-amber-600 p-3">
      <Link href="/">
        <div className="text-white text-xl font-semibold text-center">
          <button>Rishabh&apos;s Food Blog 🍲</button>
        </div>
      </Link>
    </div>
  );
}
