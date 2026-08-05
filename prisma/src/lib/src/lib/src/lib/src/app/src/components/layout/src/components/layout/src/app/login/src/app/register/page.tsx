import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-blue-700 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-700">منصة الخوارزمي</h1>
          <p className="mt-2 text-gray-500">اعمل حساب جديد وابدأ حل الامتحانات</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold">الاسم</label>
            <input
              type="text"
              placeholder="اكتب اسمك"
              className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">كلمة المرور</label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-700 py-3 font-bold text-white hover:bg-blue-800"
          >
            إنشاء الحساب
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          عندك حساب؟{" "}
          <Link href="/login" className="font-bold text-blue-700">
            سجل دخول
          </Link>
        </p>
      </div>
    </main>
  );
}
