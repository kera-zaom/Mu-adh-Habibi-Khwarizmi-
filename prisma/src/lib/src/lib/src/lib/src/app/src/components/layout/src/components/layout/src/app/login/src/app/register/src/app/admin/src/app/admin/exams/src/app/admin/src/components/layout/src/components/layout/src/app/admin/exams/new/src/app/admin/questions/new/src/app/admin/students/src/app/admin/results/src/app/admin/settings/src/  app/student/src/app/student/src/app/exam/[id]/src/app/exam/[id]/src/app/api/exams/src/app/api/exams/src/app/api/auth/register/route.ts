import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (user) {
      return NextResponse.json(
        { message: "البريد الإلكتروني مستخدم بالفعل" },
        { status: 400 }
      );
    }

    const password = await hashPassword(body.password);

    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password,
        role: "STUDENT",
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "حدث خطأ" },
      { status: 500 }
    );
  }
}
