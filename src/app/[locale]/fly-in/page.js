import FlyInPage from "@/components/fly-in/Index";
import Layout from "@/components/layout/Index";
import getStaticMetaData from "@/utils/seo/getStaticMetaData";
import { redirect } from "next/navigation";
export const metadata = getStaticMetaData({
  title: "Exhibit & Sponsor Page - SAND & FUN  ",
  description: "19-23 Novembar 2024 ,Al Thumamah airport Saudi Arabia",
  isRobotFollow: true
});
export default async function page({ params: { locale } }) {
  const isAr = locale == "ar";
  if (isAr) {
    redirect(`/en`);
  }
  return (
    <Layout arabic={isAr} header2={true}>
      <FlyInPage arabic={isAr} className={"variation-1"} />
    </Layout>
  );
}
