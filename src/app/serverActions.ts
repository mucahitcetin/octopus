"use server";

import { cookies } from "next/headers";

export async function setToken(token: string) {
  (await cookies()).set("token", token);
}

export async function getToken() {
  const token = (await cookies()).get("token");
  return token?.value;
}
