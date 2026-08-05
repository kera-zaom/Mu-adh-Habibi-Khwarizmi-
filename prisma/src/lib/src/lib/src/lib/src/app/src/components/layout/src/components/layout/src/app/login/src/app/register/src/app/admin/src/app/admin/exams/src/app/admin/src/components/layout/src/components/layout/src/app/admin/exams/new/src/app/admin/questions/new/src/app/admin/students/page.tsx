export default function StudentsPage() {
  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">الطلاب</h1>

        <button className="rounded-xl bg-blue-700 px-5 py-3 text-white">
          + إضافة طالب
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <div className="mb-5">
          <input
            type="text"
            placeholder="ابحث عن طالب..."
            className="w-full rounded-xl border p-3"
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-right">الاسم</th>
              <th className="p-3 text-right">البريد الإلكتروني</th>
              <th className="p-3 text-right">الصف</th>
              <th className="p-3 text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">لا يوجد طلاب</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
              <td className="p-3">
                <button className="rounded bg-blue-600 px-3 py-1 text-white">
                  تعديل
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
