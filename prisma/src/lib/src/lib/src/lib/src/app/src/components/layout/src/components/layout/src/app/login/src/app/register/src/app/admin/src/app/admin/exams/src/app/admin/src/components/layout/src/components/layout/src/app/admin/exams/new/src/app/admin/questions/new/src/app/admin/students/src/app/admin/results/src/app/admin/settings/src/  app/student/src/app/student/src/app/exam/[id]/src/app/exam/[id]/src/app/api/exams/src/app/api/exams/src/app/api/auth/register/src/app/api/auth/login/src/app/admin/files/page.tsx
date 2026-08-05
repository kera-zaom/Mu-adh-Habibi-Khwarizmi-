export default function FilesPage() {
  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">الملفات</h1>

        <button className="rounded-xl bg-blue-700 px-5 py-3 text-white">
          + رفع ملف
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <input
          type="text"
          placeholder="ابحث عن ملف..."
          className="mb-6 w-full rounded-xl border p-3"
        />

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-right">اسم الملف</th>
              <th className="p-3 text-right">النوع</th>
              <th className="p-3 text-right">التاريخ</th>
              <th className="p-3 text-right">الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-3">لا توجد ملفات</td>
              <td className="p-3">-</td>
              <td className="p-3">-</td>
              <td className="p-3">
                <button className="rounded bg-red-600 px-3 py-1 text-white">
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
