export default function SettingsPage() {
  return (
    <main>
      <h1 className="mb-8 text-4xl font-bold text-blue-700">
        إعدادات منصة الخوارزمي
      </h1>

      <div className="space-y-6 rounded-2xl bg-white p-8 shadow">
        <div>
          <label className="mb-2 block font-bold">اسم المنصة</label>
          <input
            type="text"
            defaultValue="منصة الخوارزمي"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">اسم المستر</label>
          <input
            type="text"
            placeholder="اكتب اسم المستر"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">رقم واتساب</label>
          <input
            type="text"
            placeholder="01xxxxxxxxx"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">رابط جروب التليجرام</label>
          <input
            type="text"
            placeholder="https://t.me/..."
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">رفع اللوجو</label>
          <input
            type="file"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <button className="rounded-xl bg-blue-700 px-8 py-3 font-bold text-white">
          حفظ الإعدادات
        </button>
      </div>
    </main>
  );
}
