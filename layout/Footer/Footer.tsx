import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./Footer.module.scss"
import classNames from "classnames"

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<ul className={styles.footer__container}>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Ждем вас</span>
					<ul className={styles.footer__timeline}>
						<li>
							<p className={styles.footer__timeText}>Пн. – Пт.</p>
							<p className={styles.footer__timeText}>09 00 – 18 00</p>
						</li>
						<li>
							<p className={styles.footer__timeText}>Сб.</p>
							<p className={styles.footer__timeText}>выходной</p>
						</li>
						<li>
							<p className={styles.footer__timeText}>Вс.</p>
							<p className={styles.footer__timeText}>выходной</p>
						</li>
						<li>
							<Link href='/'>
								<a>
									<Image
										className={styles.header__logoLink}
										src='/images/logo-terminal-2.webp'
										alt='logo-terminal-M'
										width={130}
										height={80}
									/>
								</a>
							</Link>
						</li>
					</ul>
				</li>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Меню</span>
					<ul className={styles.footer__navLinks}>
						<li>
							<Link href='/o-nas'>
								<a className={styles.footer__navLink}>О нас</a>
							</Link>
						</li>
						<li>
							<Link href='/proekti'>
								<a className={styles.footer__navLink}>Проекты</a>
							</Link>
						</li>
						<li>
							<Link href='/nashi-partneri'>
								<a className={styles.footer__navLink}>Наши партнёры</a>
							</Link>
						</li>
					</ul>
				</li>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Услуги</span>
					<ul className={styles.footer__navLinks}>
						<li>
							<Link href='/uslugi/stroitelstvo-domov'>
								<a className={styles.footer__navLink}>
									Cтроительство домов
								</a>
							</Link>
						</li>
						<li>
							<Link href='/uslugi/elektromontazhnie-raboti'>
								<a className={styles.footer__navLink}>
									Электромонтажные работы
								</a>
							</Link>
						</li>
						<li>
							<Link href='/uslugi/santehnicheskie-raboti'>
								<a className={styles.footer__navLink}>
									Сантехнические работы
								</a>
							</Link>
						</li>
						<li>
							<Link href='/uslugi/vnutrennyaya-otdelka'>
								<a className={styles.footer__navLink}>
									Внутренняя отделка
								</a>
							</Link>
						</li>
						<li>
							<Link href='/uslugi/dizainerskie-resheniya'>
								<a className={styles.footer__navLink}>
									Дизайнерские решения
								</a>
							</Link>
						</li>
						<li>
							<Link href='/uslugi/blagoustroistvo'>
								<a className={styles.footer__navLink}>
									Благоустройство
								</a>
							</Link>
						</li>
					</ul>
				</li>
				<li className={styles.footer__item}>
					<span className={styles.footer__heading}>Контакты</span>
					<ul className={styles.footer__contactsList}>
						<li>
							<p className={styles.footer__timeText}>
								Белгородский район
							</p>
							<p className={styles.footer__timeText}>
								село Никольское, ул. Дорожная, д. 10
							</p>
						</li>
						<li className={styles.footer__itemLink}>
							<a className={styles.footer__contactsLink} href='tel:+79087873444'>
								+7 908 787 3 444
							</a>
						</li>
						<li className={styles.footer__itemLink}>
							<a
								className={styles.footer__contactsLink}
								href='mailto:bel.terminalm@yandex.ru'>
								bel.terminalm@yandex.ru
							</a>
						</li>
					</ul>
					<ul className={styles.socialLinks}>
						<li>
							<a
								href='https://vk.com/terminal_m'
								className={styles.socialLink}
								target='_blank'
								rel='noopener noreferrer'>
								<Image
									src='/images/vkontakte-icon.webp'
									alt='vk-icon'
									width={32}
									height={32}
								/>
							</a>
						</li>
					</ul>
				</li>
			</ul>
			<ul className={styles.footer__navCopyright}>
				<li>
					<Link href='/politika-konfidencialnosti'>
						<a className={classNames(styles.footer__navLink,
							styles.footer__navLink_size)}>
							Политика конфиденциальности
						</a>
					</Link>
				</li>
				<li>
					<p className={styles.footer__copyright}>
						&copy; {new Date().getFullYear()} Строительно-отделочная компания Терминал-М. 
						Все права защищены.
					</p>
				</li>
				<li>
					<p className={styles.footer__warning}>
						Обращаем ваше внимание на то, что данный сайт носит 
						исключительно информационный характер и ни при каких 
						условиях не является публичной офертой, определяемой 
						положениями Статьи 437 (2) ГК РФ. Для получения 
						детальной информации о стоимости услуг, обращайтесь 
						к нашим менеджерам. Незаконное копирование информации 
						запрещено.
					</p>
				</li>
			</ul>
			<a
				href='https://skillfond.ru/'
				className={classNames(styles.footer__navLink,
					styles.footer__navLink_size,
					styles.footer__navLink_align)}
				target='_blank'
				rel='noopener noreferrer'>
					Создание и продвижение сайта
			</a>
		</footer>
	)
}

export default Footer
