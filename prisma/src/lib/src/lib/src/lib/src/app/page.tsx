export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            منصة المستر التعليمية
          </h1>

          <p className="mt-6 text-lg">
            حل الامتحانات الإلكترونية ومتابعة النتائج بسهولة.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/login"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold"
            >
              تسجيل الدخول
            </a>

            <a
              href="/register"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
            >
              إنشاء حساب
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          مميزات المنصة
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-bold">
              امتحانات إلكترونية
            </h3>

            <p className="mt-3 text-gray-600">
              حل الامتحانات مباشرة من الهاتف أو الكمبيوتر.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-bold">
              تصحيح تلقائي
            </h3>

            <p className="mt-3 text-gray-600">
              تظهر النتيجة فور الانتهاء من الامتحان.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-xl font-bold">
              متابعة النتائج
            </h3>

            <p className="mt-3 text-gray-600">
              يمكن للطالب مراجعة جميع نتائجه بسهولة.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
