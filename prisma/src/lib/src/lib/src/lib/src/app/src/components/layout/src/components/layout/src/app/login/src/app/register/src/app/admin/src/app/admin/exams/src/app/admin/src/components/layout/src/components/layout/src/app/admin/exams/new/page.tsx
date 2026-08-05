export default function NewExamPage() {
  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-blue-700">
        إنشاء امتحان جديد
      </h1>

      <form className="space-y-6 rounded-2xl bg-white p-8 shadow">

        <div>
          <label className="mb-2 block font-bold">اسم الامتحان</label>
          <input
            type="text"
            placeholder="مثال: امتحان الوحدة الأولى"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">الصف الدراسي</label>

          <select className="w-full rounded-xl border p-3">
            <option>اختر الصف</option>
            <option>الصف الأول الإعدادي</option>
            <option>الصف الثاني الإعدادي</option>
            <option>الصف الثالث الإعدادي</option>
            <option>الصف الأول الثانوي</option>
            <option>الصف الثاني الثانوي</option>
            <option>الصف الثالث الثانوي</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-bold">المادة</label>

          <input
            type="text"
            placeholder="رياضيات"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-bold">
              مدة الامتحان (بالدقائق)
            </label>

            <input
              type="number"
              className="w-full rounded-xl border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block font-bold">
              الدرجة النهائية
            </label>

            <input
              type="number"
              className="w-full rounded-xl border p-3"
            />
          </div>

        </div>

        <button className="rounded-xl bg-blue-700 px-8 py-3 font-bold text-white">
          حفظ الامتحان
        </button>

      </form>
    </main>
  );
}
