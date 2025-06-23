import MainSlider from "@/components/Mainslider";
import TabHomePage from "@/components/TabMain";

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <div className="flex flex-col items-center justify-between">
      <MainSlider />
      <TabHomePage />
    </div>
  );
}
