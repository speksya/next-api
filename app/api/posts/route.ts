import type { Post } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@lib/prisma";

import { postsErrors } from "@/shared/api/posts";
import type { ApiResponse } from "@/shared/api/types";

export async function GET(): ApiResponse<Post[]> {
  try {
    const posts = await prisma.post.findMany({ include: { tags: true } });
    return NextResponse.json({
      data: posts,
      status: 200,
    });
  } catch {
    return NextResponse.json({ message: postsErrors[500], status: 500 });
  }
}
