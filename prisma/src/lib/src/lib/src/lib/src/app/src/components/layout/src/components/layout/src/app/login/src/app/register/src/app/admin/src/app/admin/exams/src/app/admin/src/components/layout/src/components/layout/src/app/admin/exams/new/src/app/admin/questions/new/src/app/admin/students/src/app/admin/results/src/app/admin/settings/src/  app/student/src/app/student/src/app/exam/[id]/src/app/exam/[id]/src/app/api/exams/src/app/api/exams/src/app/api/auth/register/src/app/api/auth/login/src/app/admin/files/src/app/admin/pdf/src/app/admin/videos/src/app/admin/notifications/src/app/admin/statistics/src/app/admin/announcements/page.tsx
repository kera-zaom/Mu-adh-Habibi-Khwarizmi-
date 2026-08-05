export default function AnnouncementsPage() {
  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">الإعلانات</h1>

        <button className="rounded-xl bg-blue-700 px-5 py-3 text-white">
          + إعلان جديد
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <div className="mb-5">
          <label className="mb-2 block font-bold">عنوان الإعلان</label>
          <input
            type="text"
            placeholder="اكتب عنوان الإعلان"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div className="mb-5">
          <label className="mb-2 block font-bold">محتوى الإعلان</label>
          <textarea
            rows={6}
            placeholder="اكتب الإعلان..."
            className="w-full rounded-xl border p-3"
          />
        </div>

        <button className="rounded-xl bg-green-600 px-6 py-3 text-white">
          نشر الإعلان
        </button>
      </div>
    </main>
  );
}
