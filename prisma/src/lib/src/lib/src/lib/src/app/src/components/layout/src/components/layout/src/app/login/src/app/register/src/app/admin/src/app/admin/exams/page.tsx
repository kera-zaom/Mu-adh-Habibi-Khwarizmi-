import Link from "next/link";

export default function ExamsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">
          إدارة الامتحانات
        </h1>

        <Link
          href="/admin/exams/new"
          className="rounded-xl bg-blue-700 px-5 py-3 text-white"
        >
          + امتحان جديد
        </Link>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-right">الامتحان</th>
              <th className="p-3 text-right">المرحلة</th>
              <th className="p-3 text-right">المدة</th>
              <th className="p-3 text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">لا توجد امتحانات حتى الآن</td>
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
