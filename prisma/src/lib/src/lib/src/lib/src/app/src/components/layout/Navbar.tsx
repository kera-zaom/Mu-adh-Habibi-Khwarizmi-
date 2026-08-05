import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          منصة المستر
        </Link>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            تسجيل الدخول
          </Link>

          <Link
            href="/register"
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            إنشاء حساب
          </Link>
        </div>
      </div>
    </nav>
  );
}
