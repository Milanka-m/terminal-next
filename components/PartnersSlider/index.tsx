import classNames from "classnames"
import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import styles from "./PartnersSlider.module.scss"

interface IButtonProps {
	className?: any
	style?: any
	onClick?: any
}

interface ISliderProps {
	className?: any
}

const NextArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "nextarr")}
			style={{ ...style }}
			onClick={onClick}>
			<div className={styles.nextarr__btn}>
				<span className={styles.nextarr__btnLeft}></span>
				<span className={styles.nextarr__btnRight}></span>
			</div>
		</button>
	)
}
const PrevArrow: React.FC<IButtonProps> = ({ className, style, onClick }) => {
	return (
		<button
			className={classNames(className, "prevarr")}
			style={{ ...style }}
			onClick={onClick}>
			<div className={styles.prevarr__btn}>
				<span className={styles.prevarr__btnLeft}></span>
				<span className={styles.prevarr__btnRight}></span>
			</div>
		</button>
	)
}

const PartnersSlider: React.FC<ISliderProps> = ({ className }) => {
	const settings = {
		dots: false,
		adaptiveHeight: true,
		accessibility: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 6,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<div>
			<Slider {...settings} className={classNames(className, "partnersSlider")}>
				<div className={classNames(className, "partnersSlider__slide")}>
					<Image
						src='/images/partners-img-1.webp'
						alt='partners'
						width={170}
						height={170}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-img-2.webp'
						alt='partners'
						width={170}
						height={170}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-img-3.webp'
						alt='partners'
						width={170}
						height={170}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-img-4.webp'
						alt='partners'
						width={170}
						height={170}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-img-1.webp'
						alt='partners'
						width={170}
						height={170}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-img-2.webp'
						alt='partners'
						width={170}
						height={170}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-img-3.webp'
						alt='partners'
						width={170}
						height={170}
						objectFit='contain'
					/>
				</div>
				<div>
					<Image
						src='/images/partners-img-4.webp'
						alt='partners'
						width={170}
						height={170}
						objectFit='contain'
					/>
				</div>
			</Slider>
		</div>
	)
}

export default PartnersSlider