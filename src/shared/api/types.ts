import type { NextResponse } from "next/server";

type SuccessResponse<T> = {
  data: T;
  status: number;
};

type ErrorResponse = {
  message: string;
  status: number;
};

type ApiResponse<T> = Promise<NextResponse<SuccessResponse<T> | ErrorResponse>>;

export type { SuccessResponse, ErrorResponse, ApiResponse };
