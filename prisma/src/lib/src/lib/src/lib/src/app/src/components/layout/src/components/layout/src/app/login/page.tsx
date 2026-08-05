import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 to-indigo-900 p-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-700">منصة الخوارزمي</h1>
          <p className="mt-2 text-gray-500">
            سجل دخولك وكمل رحلتك التعليمية
          </p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block font-semibold">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="mb-2 block font-semibold">
              كلمة المرور
            </label>
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
            تسجيل الدخول
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          معندكش حساب؟{" "}
          <Link href="/register" className="font-bold text-blue-700">
            اعمل حساب
          </Link>
        </p>
      </div>
    </main>
  );
}
