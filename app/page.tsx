import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import BackToTopButton from "@/components/ui/BackToTopButton";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
	return (
		<main className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
			<div id="top" className="max-w-7xl w-full">
				<FloatingNav navItems={navItems} />
				<BackToTopButton/>
				<Hero />
				<Grid />
				<RecentProjects />
				<Experience />
				<Footer/>
			</div>
		</main>
	);
}
