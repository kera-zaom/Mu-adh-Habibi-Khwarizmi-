import Link from "next/link";

export default function StudentPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8 rounded-2xl bg-blue-700 p-8 text-white">
        <h1 className="text-4xl font-bold">أهلاً بيك 👋</h1>
        <p className="mt-2">مرحبًا بيك في منصة الخوارزمي</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">📝 الامتحانات</h2>
          <p className="mt-3 text-3xl font-bold text-blue-700">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">📊 النتائج</h2>
          <p className="mt-3 text-3xl font-bold text-green-600">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">🏆 متوسط الدرجات</h2>
          <p className="mt-3 text-3xl font-bold text-orange-500">0%</p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-5 text-2xl font-bold">الامتحانات المتاحة</h2>

        <div className="rounded-xl border p-5">
          <h3 className="text-xl font-bold">
            لا توجد امتحانات متاحة
          </h3>

          <p className="mt-2 text-gray-500">
            هتظهر الامتحانات هنا أول ما المستر ينزلها.
          </p>

          <Link
            href="/"
            className="mt-4 inline-block rounded-lg bg-blue-700 px-5 py-3 text-white"
          >
            الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
