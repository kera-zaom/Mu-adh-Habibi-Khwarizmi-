export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-8 text-4xl font-bold text-blue-700">
        لوحة تحكم منصة الخوارزمي
      </h1>

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">👨‍🎓 الطلاب</h2>
          <p className="mt-3 text-3xl font-bold text-blue-700">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">📝 الامتحانات</h2>
          <p className="mt-3 text-3xl font-bold text-green-600">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">📚 المواد</h2>
          <p className="mt-3 text-3xl font-bold text-orange-500">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">🏆 النتائج</h2>
          <p className="mt-3 text-3xl font-bold text-red-500">0</p>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold">إدارة المنصة</h2>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-xl bg-blue-700 px-5 py-3 text-white">
            إضافة امتحان
          </button>

          <button className="rounded-xl bg-green-600 px-5 py-3 text-white">
            إضافة مادة
          </button>

          <button className="rounded-xl bg-orange-500 px-5 py-3 text-white">
            إضافة طالب
          </button>
        </div>
      </div>
    </main>
  );
}
