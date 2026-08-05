import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword, createToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "البريد الإلكتروني أو كلمة المرور غير صحيحة" },
        { status: 401 }
      );
    }

    const validPassword = await verifyPassword(
      body.password,
      user.password
    );

    if (!validPassword) {
      return NextResponse.json(
        { message: "البريد الإلكتروني أو كلمة المرور غير صحيحة" },
        { status: 401 }
      );
    }

    const token = createToken({
      id: user.id,
      email: user.email,
      role: user.role,
    });

    return NextResponse.json({
      message: "تم تسجيل الدخول بنجاح",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch {
    return NextResponse.json(
      { message: "حدث خطأ في تسجيل الدخول" },
      { status: 500 }
    );
  }
}
