import HomePage from "@/components/home/Index";
import Layout from "@/components/layout/Index";
import { redirect } from "next/navigation";
export default async function page({ params: { locale } }) {
  const isAr = locale == "ar";
  if (isAr) {
    redirect(`/en`);
  }
  return (
    <Layout arabic={isAr}>
      <HomePage arabic={isAr} className={"variation-1"} />
    </Layout>
  );
}
