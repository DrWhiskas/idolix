import Image from "next/image";
import Header from "@/components/Header";
import IdolixBackground from "@/components/Background";
import Hero from "@/components/Hero";
import  Footer  from "@/components/Footer";

export default function Home() {
  return (
		<div className="flex min-h-screen flex-col items-center justify-between">
			<IdolixBackground />
			<Header />
			<Hero />
      <Footer/>

		</div>
	);
}
