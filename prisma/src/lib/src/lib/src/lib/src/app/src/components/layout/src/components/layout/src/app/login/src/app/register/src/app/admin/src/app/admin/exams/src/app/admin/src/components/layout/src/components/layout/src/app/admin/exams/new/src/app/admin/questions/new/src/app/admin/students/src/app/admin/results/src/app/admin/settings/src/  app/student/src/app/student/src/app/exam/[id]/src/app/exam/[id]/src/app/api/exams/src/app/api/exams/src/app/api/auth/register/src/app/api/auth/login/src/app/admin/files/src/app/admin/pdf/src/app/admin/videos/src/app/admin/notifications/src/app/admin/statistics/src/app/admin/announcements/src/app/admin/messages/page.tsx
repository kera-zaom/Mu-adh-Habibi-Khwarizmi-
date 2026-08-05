export default function MessagesPage() {
  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">الرسائل</h1>

        <button className="rounded-xl bg-blue-700 px-5 py-3 text-white">
          + رسالة جديدة
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <input
          type="text"
          placeholder="اسم الطالب"
          className="mb-4 w-full rounded-xl border p-3"
        />

        <textarea
          rows={6}
          placeholder="اكتب الرسالة..."
          className="mb-4 w-full rounded-xl border p-3"
        />

        <button className="rounded-xl bg-green-600 px-6 py-3 text-white">
          إرسال الرسالة
        </button>
      </div>
    </main>
  );
}
