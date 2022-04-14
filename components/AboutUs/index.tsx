import React from "react"
import Fade from "react-reveal/Fade"
import Link from "next/link"
import Image from "next/image"
import styles from "./AboutUs.module.scss"

const AboutUs: React.FC = () => {
	return (
		<section className={styles.aboutUs}>
			<div className={styles.aboutUs__container}>
				<Fade bottom>
					<div className={styles.aboutUs__content}>
						<h2 className={styles.aboutUs__title}>О нас</h2>
						<p className={styles.aboutUs__paragraph}>
							Терминал-М — это одна из ведущих строительно-отделочных компаний 
							на территории Белгородской области. На протяжении 10 лет нами было 
							построено более 50 коммерческих и некоммерческих зданий, 
							отремонтировано “под ключ” более 70 квартир, домов, офисных и нежилых помещений. 
							Наша команда высококвалифицированных специалистов берется как за 
							сложные крупномасштабные, так и простые работы.
						</p>
						<p className={styles.aboutUs__paragraph}>
							Мы стремимся к совершенству и делаем все возможное, 
							чтобы клиенты были полностью удовлетворены нашей 
							работой. Напишите или позвоните нам и запишитесь на 
							консультацию.
						</p>
						<Link href='/o-nas'>
							<a className={styles.aboutUs__cardLink}>Узнать больше</a>
						</Link>
					</div>
				</Fade>
				<Fade top>
					<span className={styles.aboutUs__img}>
						<Image
							src='/images/img-about-us.webp'
							alt='about-us'
							width={680}
							height={453}
							objectFit='contain'
						/>
					</span>
				</Fade>
			</div>
		</section>
	)
}

export default AboutUs
