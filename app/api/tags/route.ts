import type { Tag } from "@prisma/client";
import { NextResponse } from "next/server";

import { prisma } from "@lib/prisma";

import { tagsErrors } from "@/shared/api/tags";
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
    return NextResponse.json({
      message: error instanceof Error ? error.message : tagsErrors[500],
      status: 500,
    });
  }
}
