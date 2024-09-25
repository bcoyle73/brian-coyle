"use client";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header bg-gray-800 text-white py-4">
      <nav className="container flex justify-center items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;