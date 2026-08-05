export default function NotificationsPage() {
  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">الإشعارات</h1>

        <button className="rounded-xl bg-blue-700 px-5 py-3 text-white">
          + إشعار جديد
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <textarea
          placeholder="اكتب الإشعار الذي سيظهر للطلاب..."
          className="mb-4 h-40 w-full rounded-xl border p-3"
        />

        <button className="rounded-xl bg-green-600 px-6 py-3 text-white">
          إرسال الإشعار
        </button>
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow">
        <h2 className="mb-4 text-2xl font-bold">آخر الإشعارات</h2>

        <p className="text-gray-500">
          لا توجد إشعارات حتى الآن.
        </p>
      </div>
    </main>
  );
}
