export default function ExamPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow">

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">امتحان الجبر</h1>
            <p className="text-gray-500">الصف الثالث الإعدادي</p>
          </div>

          <div className="rounded-xl bg-red-600 px-5 py-3 text-white font-bold">
            ⏳ 60:00
          </div>
        </div>

        <div className="mb-6 rounded-xl bg-blue-50 p-5">
          <h2 className="text-2xl font-bold">
            السؤال 1 من 20
          </h2>

          <p className="mt-4 text-lg">
            إذا كان 2 + 2 = ؟
          </p>
        </div>

        <div className="space-y-4">
          <label className="flex cursor-pointer rounded-xl border p-4 hover:bg-gray-100">
            <input type="radio" name="answer" className="ml-3" />
            3
          </label>

          <label className="flex cursor-pointer rounded-xl border p-4 hover:bg-gray-100">
            <input type="radio" name="answer" className="ml-3" />
            4
          </label>

          <label className="flex cursor-pointer rounded-xl border p-4 hover:bg-gray-100">
            <input type="radio" name="answer" className="ml-3" />
            5
          </label>

          <label className="flex cursor-pointer rounded-xl border p-4 hover:bg-gray-100">
            <input type="radio" name="answer" className="ml-3" />
            6
          </label>
        </div>

        <div className="mt-10 flex justify-between">
          <button className="rounded-xl bg-gray-300 px-6 py-3">
            السابق
          </button>

          <button className="rounded-xl bg-blue-700 px-6 py-3 text-white">
            التالي
          </button>
        </div>

        <div className="mt-8 text-center">
          <button className="rounded-xl bg-green-600 px-8 py-3 font-bold text-white">
            إنهاء الامتحان
          </button>
        </div>

      </div>
    </main>
  );
}
