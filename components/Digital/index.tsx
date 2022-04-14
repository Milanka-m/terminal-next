import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Digital.module.scss"
import classNames from "classnames"

const Digital: React.FC = () => {
	return (
		<section className={styles.digital}>
			<div className={styles.digital__container}>
				<div className={styles.digital__content}>
                    <Image
						src='/images/skillfond-company-logo.webp'
						alt='skillfond-logo'
						width={411}
						height={109}
					/>
					<h1 className={styles.digital__title}>
                        <span>Digital агенство</span>
                        <br/>с упором на веб-разработку и создание сложных проектов
					</h1>
                    <ul className={styles.digital__links}>
                        <li>
                            <Link href='/'>
                                <a className={styles.digital__cardLink}>
                                    Оставить заявку на расчет стоимости проекта
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                <a className={classNames(
                                    styles.digital__cardLink, 
                                    styles.digital__cardLink_backgraund)}>
                                    Заказать бесплатный аудит Вашего сайта
                                </a>
                            </Link>
                        </li>
                    </ul>
				</div>
                <span className={styles.digital__image}>
                    <Image
                        src='/images/home-image-1.webp'
                        alt='clients-scaled'
                        width={736}
                        height={517}
                        objectFit='contain'
                    />
                </span>
			</div>
            <ul className={styles.digital__contacts}>
                <li>
					<p className={styles.digital__address}>
						Белгород ул. Садовая 2а, офис 100
					</p>
				</li>
				<li className={styles.digital__itemLink}>
					<a className={styles.digital__contactsLink} 
                        href='tel:+3712082527'>
						+7 4722 777 235
					</a>
				</li>
				<li className={styles.digital__itemLink}>
					<a
						className={styles.digital__contactsLink}
						href='mailto:dev@skillfond.ru'>
						dev@skillfond.ru
					</a>   
				</li>
                <li>
                    <ul className={styles.socialLinks}>
                        <li>
                            <a
                                href='https://www.facebook.com/skillfond/'
                                className={styles.socialLink}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <Image
                                    src='/images/facebook-icon.webp'
                                    alt='facebook-icon'
                                    width={32}
                                    height={32}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://vk.com/skillfond'
                                className={styles.socialLink}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <Image
                                    src='/images/vk-icon.webp'
                                    alt='vk-icon'
                                    width={32}
                                    height={32}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.instagram.com/skillfond/'
                                className={styles.socialLink}
                                target='_blank'
                                rel='noopener noreferrer'>
                                <Image
                                    src='/images/instagram-icon.webp'
                                    alt='instagram-icon'
                                    width={32}
                                    height={32}
                                />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
		</section>
	)
}

export default Digital