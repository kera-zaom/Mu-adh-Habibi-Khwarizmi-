import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const exams = await prisma.exam.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(exams);
}

export async function POST(req: Request) {
  const body = await req.json();

  const exam = await prisma.exam.create({
    data: {
      title: body.title,
      description: body.description,
      duration: body.duration,
      totalMarks: body.totalMarks,
      subjectId: body.subjectId,
    },
  });

  return NextResponse.json(exam, { status: 201 });
}
