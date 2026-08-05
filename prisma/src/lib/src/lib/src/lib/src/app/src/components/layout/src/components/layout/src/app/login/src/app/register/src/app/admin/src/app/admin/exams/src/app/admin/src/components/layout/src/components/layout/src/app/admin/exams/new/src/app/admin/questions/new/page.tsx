export default function NewQuestionPage() {
  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-blue-700">
        إضافة سؤال جديد
      </h1>

      <form className="space-y-6 rounded-2xl bg-white p-8 shadow">

        <div>
          <label className="mb-2 block font-bold">السؤال</label>
          <textarea
            rows={4}
            placeholder="اكتب السؤال هنا..."
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">الاختيار الأول</label>
          <input
            type="text"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">الاختيار الثاني</label>
          <input
            type="text"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">الاختيار الثالث</label>
          <input
            type="text"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">الاختيار الرابع</label>
          <input
            type="text"
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">الإجابة الصحيحة</label>
          <select className="w-full rounded-xl border p-3">
            <option>الاختيار الأول</option>
            <option>الاختيار الثاني</option>
            <option>الاختيار الثالث</option>
            <option>الاختيار الرابع</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-bold">درجة السؤال</label>
          <input
            type="number"
            defaultValue={1}
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white"
          >
            + إضافة سؤال آخر
          </button>

          <button
            type="submit"
            className="rounded-xl bg-blue-700 px-6 py-3 font-bold text-white"
          >
            حفظ السؤال
          </button>
        </div>

      </form>
    </main>
  );
}
