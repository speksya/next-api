import type { Tag } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@lib/prisma";

import { postsErrors } from "@/shared/api/posts";
import type { ApiResponse } from "@/shared/api/types";

export async function GET(): ApiResponse<Tag[]> {
  try {
    const tags = await prisma.tag.findMany();
    return NextResponse.json({
      data: tags,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: postsErrors[500], status: 500 });
  }
}
