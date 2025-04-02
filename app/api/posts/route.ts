import type { Post } from "@prisma/client";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { prisma } from "@lib/prisma";

import { postsErrors } from "@/shared/api/posts";
import type { ApiResponse } from "@/shared/api/types";
import { searchParamsKeys } from "@/shared/constants";

export async function GET(request: NextRequest): ApiResponse<Post[]> {
  try {
    const { searchParams } = new URL(request.url);
    const tags = searchParams.getAll(searchParamsKeys.tag);

    const posts = await prisma.post.findMany({
      where: {
        AND: tags.map((tag) => ({
          tags: {
            some: {
              slug: tag,
            },
          },
        })),
      },
      include: {
        tags: true,
      },
    });
    return NextResponse.json({
      data: posts,
      status: 200,
    });
  } catch {
    return NextResponse.json({ message: postsErrors[500], status: 500 });
  }
}
