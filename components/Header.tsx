import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <h2>Rishabh&apos;s Food Blog</h2>
        </Link>
      </div>
    </header>
  );
}
