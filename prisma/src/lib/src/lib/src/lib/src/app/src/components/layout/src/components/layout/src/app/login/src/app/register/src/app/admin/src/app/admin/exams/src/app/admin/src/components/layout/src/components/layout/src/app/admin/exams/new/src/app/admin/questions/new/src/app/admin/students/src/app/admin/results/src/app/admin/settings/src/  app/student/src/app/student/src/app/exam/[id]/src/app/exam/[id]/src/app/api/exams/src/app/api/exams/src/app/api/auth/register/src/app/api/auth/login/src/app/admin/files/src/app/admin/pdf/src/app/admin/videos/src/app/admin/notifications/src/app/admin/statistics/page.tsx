export default function StatisticsPage() {
  return (
    <main>
      <h1 className="mb-8 text-4xl font-bold text-blue-700">
        الإحصائيات
      </h1>

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">👨‍🎓 الطلاب</h2>
          <p className="mt-3 text-4xl font-bold text-blue-700">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">📝 الامتحانات</h2>
          <p className="mt-3 text-4xl font-bold text-green-600">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">📄 ملفات PDF</h2>
          <p className="mt-3 text-4xl font-bold text-orange-500">0</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h2 className="text-lg font-bold">🎥 الفيديوهات</h2>
          <p className="mt-3 text-4xl font-bold text-red-600">0</p>
        </div>

      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold">
          ملخص المنصة
        </h2>

        <ul className="space-y-3">
          <li>✅ متوسط درجات الطلاب: 0%</li>
          <li>✅ أعلى طالب: ---</li>
          <li>✅ عدد النتائج: 0</li>
          <li>✅ آخر امتحان: ---</li>
        </ul>
      </div>
    </main>
  );
}
