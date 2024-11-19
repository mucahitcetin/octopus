import { getToken } from "@/app/serverActions";
import Header from "../../components/Header";
import { ReactNode } from "react";
import { getUser } from "@/app/api";
import { redirect } from "next/navigation";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const token = await getToken();
  const user = await getUser(token as string);

  if (!user) {
    redirect("/");
  }

  return (
    <div>
      <Header user={user} />

      {children}
    </div>
  );
}
