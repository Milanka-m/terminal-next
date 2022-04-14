import React from "react"
import Fade from "react-reveal/Fade"
import Image from "next/image"
import styles from "./OurContacts.module.scss"
import classNames from "classnames"

const OurContacts: React.FC = () => {
	return (
		<section className={styles.ourContacts}>
			<Fade bottom>
				<div className={styles.ourContacts__container}>
					<div className={styles.ourContacts__infoContainer}>
						<h2 className={styles.ourContacts__title}>
							Наши контакты
						</h2>
						<p className={styles.ourContacts__text}>
						Желание заказчика — закон для компании «Терминал-М». 
						Свяжитесь с нами и узнайте, что мы можем сделать для вас.
						Если у вас есть вопросы, пожалуйста, не стесняйтесь обращаться к нам.
						</p>
						<ul className={styles.ourContacts__links}>
							<Fade bottom>
								<li>
									<div className={styles.ourContacts__cardText}>
										<span>
											<Image
												src='/images/map-icon.webp'
												alt='map-icon'
												width={65}
												height={65}
												objectFit='contain'
											/>
										</span>
										<article className={styles.ourContacts__info}>
											<span className={styles.ourContacts__infoTitle}>
												Офис
											</span>
											<p className={styles.ourContacts__infoText}>
												Белгородский район
											</p>
											<p className={styles.ourContacts__infoText}>
												село Никольское, ул. Дорожная, д. 10
											</p>
										</article>
									</div>
								</li>
							</Fade>
							<li>
								<a 
									className={styles.ourContacts__link} 
									href='tel:+79087873444'>
									<span>
										<Image
											src='/images/mobile-icon.webp'
											alt='mobile-icon'
											width={48}
											height={48}
											objectFit='contain'
										/>
									</span>
									<article className={styles.ourContacts__info}>
										<span
											className={classNames(
												styles.ourContacts__infoTitle,
												styles.ourContacts__infoTitle_color,
											)}>
											Телефон
										</span>
										<p className={styles.ourContacts__infoText}>
											+7 908 787 3 444
										</p>
									</article>
								</a>
							</li>
							<li>
								<a
									className={styles.ourContacts__link}
									href='mailto:bel.terminalm@yandex.ru'>
									<span>
										<Image
											src='/images/email-icon.webp'
											alt='email-icon'
											width={48}
											height={48}
											objectFit='contain'
										/>
									</span>
									<article className={styles.ourContacts__info}>
										<span
											className={classNames(
												styles.ourContacts__infoTitle,
												styles.ourContacts__infoTitle_color,
											)}>
											Email
										</span>
										<p className={styles.ourContacts__infoText}>
											bel.terminalm@yandex.ru
										</p>
									</article>
								</a>
							</li>
						</ul>
					</div>
					<iframe 
						src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=216680259541" 
						width="560" 
						height="400" 
						frameBorder="0"
					>
					</iframe>
				</div>
			</Fade>
		</section>
	)
}

export default OurContacts
