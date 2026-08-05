export default function PdfPage() {
  return (
    <main>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-blue-700">ملفات PDF</h1>

        <button className="rounded-xl bg-blue-700 px-5 py-3 text-white">
          + رفع PDF
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow">
        <p className="text-center text-gray-500">
          لا توجد ملفات PDF حتى الآن.
        </p>
      </div>
    </main>
  );
}
