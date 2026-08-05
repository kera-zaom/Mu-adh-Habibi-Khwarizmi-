import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-blue-800 text-white">
      <div className="p-6 text-center border-b border-blue-700">
        <h1 className="text-3xl font-bold">الخوارزمي</h1>
        <p className="text-sm text-blue-200 mt-2">لوحة تحكم المستر</p>
      </div>

      <nav className="p-4 space-y-2">
        <Link href="/admin" className="block rounded-lg p-3 hover:bg-blue-700">🏠 الرئيسية</Link>
        <Link href="/admin/students" className="block rounded-lg p-3 hover:bg-blue-700">👨‍🎓 الطلاب</Link>
        <Link href="/admin/subjects" className="block rounded-lg p-3 hover:bg-blue-700">📚 المواد</Link>
        <Link href="/admin/exams" className="block rounded-lg p-3 hover:bg-blue-700">📝 الامتحانات</Link>
        <Link href="/admin/questions" className="block rounded-lg p-3 hover:bg-blue-700">❓ الأسئلة</Link>
        <Link href="/admin/results" className="block rounded-lg p-3 hover:bg-blue-700">📊 النتائج</Link>
        <Link href="/admin/settings" className="block rounded-lg p-3 hover:bg-blue-700">⚙️ الإعدادات</Link>
      </nav>
    </aside>
  );
}
