import React from "react"
import withRoot from "../../modules/withRoot"
import Fade from "react-reveal/Fade"
import styles from "./Strategy.module.scss"
import classNames from "classnames"

const Strategy: React.FC = () => {
	return (
		<section className={styles.strategy}>
			<ul className={styles.strategy__block}>
				<Fade bottom>
					<li className={styles.strategy__item}>
						<h2 className={styles.strategy__title}>
							Этапы работ
						</h2>
						<span className={styles.strategy__subtitle}>
							Все этапы для взаимовыгодного 
							и продуктивного сотрудничества.
						</span>
					</li>
				</Fade>
				<Fade top>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_1
							)}>
							Оставьте заявку на сайте или позвоните нам. 
							Мы свяжемся с Вами и обсудим все детали 
							Вашего проекта.
						</p>
					</li>
				</Fade>
				<Fade bottom>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_2
						)}>
							Личная встреча. Подробное обсуждение 
							выполнения проекта. Замеры на территории проекта. 
							Обсуждение бюджета, этапов проектирования и оплат.
						</p>
					</li>
				</Fade>
				<Fade bottom>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_3
						)}>
							Заключение договора проектирования. 
							Разработка и утверждение пороекта, 
							расчет стоимости сметы, подписание 
							договора.
						</p>
					</li>
				</Fade>
				<Fade top>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_4
						)}>
							Выполнение работ по договору.
						</p>
					</li>
				</Fade>
				<Fade bottom>
					<li className={styles.strategy__item}>
						<p className={classNames(
							styles.strategy__description,
							styles.strategy__description_5
						)}>
							Сдача готовых работ. Подписание завершающей документации, 
							гарантийное и постгарантийное обслуживание.
						</p>
					</li>
				</Fade>	
			</ul>
		</section>	
	)
}

export default withRoot(Strategy)
