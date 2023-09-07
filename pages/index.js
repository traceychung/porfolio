import About from "../app/components/about";
import RootLayout from "@/app/layout";
import Tech from "@/app/components/tech";

export default function Home() {
  return (
    <RootLayout home>
      <div>
        <About />
        <Tech />
        <br />
      </div>
    </RootLayout>
  );
}
