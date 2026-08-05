import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-100">
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold">
              منصة المستر امير طلعت التعليمية
            </h1>

            <p className="mt-6 text-lg max-w-2xl mx-auto">
              منصة متكاملة لإجراء الامتحانات الإلكترونية، متابعة النتائج،
              والتعلم بطريقة سهلة وآمنة.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/login"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                تسجيل الدخول
              </Link>

              <Link
                href="/register"
                className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-300 transition"
              >
                إنشاء حساب
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto py-16 px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            مميزات المنصة
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3">
                امتح
