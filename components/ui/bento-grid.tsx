import { cn } from "@/utils/cn";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BackgroundGradient";
import { GlobeDemo } from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	id,
	img,
	imgClassName,
	titleClassName,
	spareImage,
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	id: number;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImage?: string;
}) => {
	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.2]",
				className
			)}
		>
			<div className={`${id === 6} && flex justify-center h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, "object-cover, object-center")}
						/>
					)}
				</div>
				<div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
					{spareImage && (
						<img
							src={spareImage}
							alt={spareImage}
							className={"object-cover, object-center, w-full, h-full"}
						/>
					)}
				</div>
				{/* Gradient BG */}
				{id === 6 && (
					<BackgroundGradientAnimation className="">
						<div className="absolute z-50 flex items-center justify-center text-white font-bold " />
					</BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					<div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
						{description}
					</div>
					<div className="font-sans font-bold text-lg lg:text-2xl max-w-96 z-10">
						{title}
					</div>

					{/* Globe */}
					{id === 2 && <GlobeDemo/>}

					{/* Tech Stack */}
					{id === 3 && (
						<div className="flex gap-1 lg:gap-5 w-fit absolute -right-20 lg:-right-10 opacity-85">
							<div className="flex flex-col gap-3 lg:gap-3">
								{['UnityVR', 'C#', 'React.js'].map((item) => (
									<span key={item} className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-55 rounded-lg text-center bg-[#5352536e]">
										{item}
									</span>
								))}
								<span className="py-4 px-3 rounded-lg text-center bg-[#68568c71]"/>
							</div>
							<div className="flex flex-col gap-3 lg:gap-3">
								<span className="py-4 px-3 rounded-lg text-center bg-[#68568c71]"/>
								{['Next.js', 'Three.js', 'Ui/Ux'].map((item) => (
									<span key={item} className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-60 lg:opacity-70 rounded-lg text-center bg-[#5352536e]">
										{item}
									</span>
								))}					
							</div>
						</div>
					)}

					{/* Copy Email */}
					{id === 6 && (
						<div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
