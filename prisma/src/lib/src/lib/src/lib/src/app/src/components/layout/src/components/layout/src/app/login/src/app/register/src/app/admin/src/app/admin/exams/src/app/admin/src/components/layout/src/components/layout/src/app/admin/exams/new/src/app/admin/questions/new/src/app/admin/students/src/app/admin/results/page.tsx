export default function ResultsPage() {
  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">
          نتائج الطلاب
        </h1>

        <button className="rounded-xl bg-green-600 px-5 py-3 text-white">
          تصدير Excel
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <div className="mb-5">
          <input
            type="text"
            placeholder="ابحث باسم الطالب..."
            className="w-full rounded-xl border p-3"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-right">الطالب</th>
              <th className="p-3 text-right">الامتحان</th>
              <th className="p-3 text-right">الدرجة</th>
              <th className="p-3 text-right">التاريخ</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">لا توجد نتائج</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
