import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { TracingBeam } from "./ui/tracing-beam";
import { gridItems } from "@/data";

const Grid = () => {
	return (
		<section id="about">
			<TracingBeam className="w-full col-span-full">
				<BentoGrid>
					{gridItems.map(
						({
							id,
							description,
							className,
							title,
							titleClassName,
							img,
							imgClassName,
							spareImg,
						}) => (
							<BentoGridItem
								id={id}
								key={id}
								title={title}
								description={description}
								className={className}
								img={img}
								titleClassName={titleClassName}
								imgClassName={imgClassName}
								spareImage={spareImg}
							/>
						)
					)}
				</BentoGrid>
			</TracingBeam>
		</section>
	);
};

export default Grid;
