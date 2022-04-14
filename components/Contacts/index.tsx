import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./Contacts.module.scss"
import classNames from "classnames"

const Contacts: React.FC = () => {
	return (
		<Fade bottom>
			<div className={styles.contacts__container}>
				<p className={styles.contacts__text}>
					Свяжитесь с нами и узнайте, что мы можем сделать для вас.
					Если у вас есть вопросы, пожалуйста, не стесняйтесь обращаться к нам.
				</p>
				<ul className={styles.contacts__links}>
					<li>
						<div className={styles.contacts__cardText}>
							<span>
								<Image
									src='/images/map-icon.webp'
									alt='map-icon'
									width={50}
									height={50}
									objectFit='contain'
								/>
							</span>
							<ul className={styles.contacts__info}>
								<li>
									<a
										href='https://yandex.ru/maps/org/terminal_m/216680259541/?from=mapframe&ll=36.587366%2C50.451623&source=mapframe&utm_source=mapframe&z=11'
										target='_blank'
										rel='noopener noreferrer'>
										<span className={styles.contacts__infoTitle}>
											Офис
										</span>
										<p className={styles.contacts__infoText}>
											Белгородский район
										</p>
										<p className={styles.contacts__infoText}>
											село Никольское, ул. Дорожная, д. 10
										</p>
									</a>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<a
							className={styles.contacts__link}
							href='mailto:bel.terminalm@yandex.ru'>
							<span>
								<Image
									src='/images/email-icon.webp'
									alt='email-icon'
									width={50}
									height={50}
									objectFit='contain'
								/>
							</span>
							<article className={styles.contacts__info}>
								<span
									className={classNames(
										styles.contacts__infoTitle,
										styles.contacts__infoTitle_color,
									)}>
									Email
								</span>
								<p className={styles.contacts__infoText}>
									bel.terminalm@yandex.ru
								</p>
							</article>
						</a>
					</li>
					<li className={styles.contacts__link}>
						<span>
								<Image
									src='/images/mobile-icon.webp'
									alt='mobile-icon'
									width={50}
									height={50}
									objectFit='contain'
								/>
							</span>
						<a href='tel:+79087873444'>
							<article className={styles.contacts__info}>
								<span
									className={classNames(
										styles.contacts__infoTitle,
										styles.contacts__infoTitle_color,
									)}>
									Телефон
								</span>
								<p className={styles.contacts__infoText}>
									+7 908 787 3 444
								</p>
							</article>
						</a>
						<a className={styles.contacts__link} href='tel:+79107370013'>
							<p className={classNames(
								styles.contacts__infoText,
								styles.contacts__infoText_padding,
								)}>
								+7 910 737 0 013
							</p>
						</a>
					</li>
				</ul>
			</div>
		</Fade>
	)
}

export default Contacts
