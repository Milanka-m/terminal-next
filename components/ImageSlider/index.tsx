import classNames from "classnames"
import React from "react"
import Slider from "react-slick"
import Image from "next/image"

interface ISliderProps {
	className?: any
	images: string[]
}

const ImageSlider: React.FC<ISliderProps> = ({ className, images }) => {
	const settings = {
		centerMode: true,
		centerPadding: "3px",
		dots: true,
		autoplay: false,
	}

	return (
		<div>
			<Slider {...settings} className={classNames(className, "imageSlider")}>
				{images.map((items) => (
					<div key={items}>
						<Image
							src={items}
							alt='image'
							width={800}
							height={543}
							objectFit='cover'
							// loading='lazy'
						/>
					</div>
				))}
			</Slider>
		</div>
	)
}

export default ImageSlider
