import { cn } from "@/utils/cn";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./BackgroundGradient";

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
				"row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border-transparent justify-between flex flex-col space-y-4 border border-red-500",
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
				{id === 6 && (
					<BackgroundGradientAnimation className="">
						<div className="absolute z-50 flex items-center justify-center text-white font-bold" />
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
					<div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
						{title}
					</div>
				</div>
			</div>
		</div>
	);
};
