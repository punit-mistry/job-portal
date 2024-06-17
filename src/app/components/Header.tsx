import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between  bg-white px-6 py-4 mx-auto container">
      <Link href="/" className="font-bold text-xl">Job Board</Link>
      <nav className="flex items-center gap-2  *:py-2 *:px-4 *:rounded-md">
        <Link href="/login" className="bg-gray-200">Login</Link>
        <Link href="/new-list" className="bg-blue-600 text-white">Post a Job</Link> 
      </nav>
    </header>
  );
}