export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white p-5 shadow">
      <div>
        <h2 className="text-2xl font-bold"> أهلاً ي قلبوشي 👋</h2>
        <p className="text-gray-500">منصة الخوارزمي</p>
      </div>

      <button className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
        تسجيل الخروج
      </button>
    </header>
  );
}
