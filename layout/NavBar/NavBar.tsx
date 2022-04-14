import React from "react"
import Link from "next/link"
import Image from "next/image"
import { 
	ApplicationBtn,
	Snackbar 
} from "../../components"
import { Box } from "@mui/material"
import Popup from "../../modules/views/Popup"
import AppForm from "../../modules/views/AppForm"
import FormButton from "../../modules/form/FormButton"
import FormFeedback from "../../modules/form/FormFeedback"
import RFTextField from "../../modules/form/RFTextField"
import { Field, Form, FormSpy } from "react-final-form"
import { phone, required } from "../../modules/form/validation"
import { sendTelegramm } from "../../utils"
import withRoot from "../../modules/withRoot"
import ym from "react-yandex-metrika"

import styles from "./NavBar.module.scss"

const NavBar: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(false)
	const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false)
	const [sent, setSent] = React.useState<boolean>(false)

	const handleClickOpen = (): void => {
		setOpen((pre) => !pre)
	}

	const handleClose = (): void => {
		setOpen((pre) => !pre)
	}

	const handleCloseSnackBar = (): void => {
		setOpenSnackBar((pre) => !pre)
	}

	const validate = (values: { [index: string]: string }) => {
		const errors = required(["firstName", "phone"], values)

		if (!errors.phone) {
			const phoneError = phone(values.phone)
			if (phoneError) {
				errors.phone = phoneError
			}
		}

		return errors
	}

	const handleSubmit = (values: { [name: string]: string }): void => {
		sendTelegramm(
			`Оформление заказа/услуги. %0AИмя: ${values.firstName}%0AТелефон: ${values.phone} %0AСообщение:${values.message}`,
		)
		setSent((pre) => !pre)
		setOpen((pre) => !pre)
		setOpenSnackBar((pre) => !pre)
		ym('reachGoal', 'header-btn')
	}

	return (
		<>
			<div className={styles.burgerMenu}>
				<input 
					id={styles.burgerMenu__toggle} 
					type='checkbox'
				/>
				<label className={styles.burgerMenu__btn} 
					htmlFor={styles.burgerMenu__toggle}>
					<span className={styles.burgerMenu__span}></span>
				</label>
				<div className={styles.navBar__container}>
					<div className={styles.navBar__navContainer}>
						<Link href='/'>
							<a>
								<Image
									src='/images/logo-terminal-2.webp'
									alt='logo-terminal-M'
									width={105}
									height={64}
								/>
							</a>
						</Link>
						<nav className={styles.navBar__nav}>
							<ul className={styles.navBar__navLinks}>
								<li>
									<Link href='/o-nas'>
										<a className={styles.navBar__navLink}>
											О нас
										</a>
									</Link>
								</li>
								<li>
									<Link href='/uslugi'>
										<a className={styles.navBar__navLink}>
											Услуги
										</a>
									</Link>
								</li>
								<li>
									<Link href='/proekti'>
										<a className={styles.navBar__navLink}>
											Проекты
										</a>
									</Link>
								</li>
								<li>
									<Link href='/nashi-partneri'>
										<a className={styles.navBar__navLink}>
											Наши партнёры
										</a>
									</Link>
								</li>
								<li>
									<Link href='/contact'>
										<a className={styles.navBar__navLink}>
											Контакты
										</a>
									</Link>
								</li>
							</ul>
						</nav>
						<ApplicationBtn handleClickOpen={handleClickOpen} />
						<ul className={styles.socialLinks}>
							<li>
								<a
									href='#'
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
					</div>
				</div>
			</div>
			<Popup 
				open={open} 
				onClose={handleClose}>
				<AppForm>
					<Form
						onSubmit={handleSubmit}
						subscription={{ submitting: true }}
						validate={validate}>
						{({ handleSubmit: handleSubmit2, submitting }) => (
							<Box
								component='form'
								onSubmit={handleSubmit2}
								noValidate
								sx={{ mt: 2 }}>
								<Field
									autoFocus
									component={RFTextField}
									disabled={submitting || sent}
									autoComplete='given-name'
									fullWidth
									label='Имя'
									name='firstName'
									required
								/>
								<Field
									fullWidth
									component={RFTextField}
									disabled={submitting || sent}
									autoComplete='Phone'
									label='Телефон'
									margin='normal'
									name='phone'
									required
								/>
								<Field
									autoComplete='Text'
									component={RFTextField}
									disabled={submitting || sent}
									fullWidth
									label='Ваше сообщение'
									margin='normal'
									name='message'
								/>
								<FormSpy subscription={{ submitError: true }}>
									{({ submitError }) =>
										submitError ? (
											<FormFeedback error sx={{ mt: 2 }}>
												{submitError}
											</FormFeedback>
										) : null
									}
								</FormSpy>
								<FormButton
									id='submit-modal'
									sx={{ mt: 3, mb: 2 }}
									disabled={submitting || sent}
									color='secondary'
									fullWidth>
									{submitting || sent ? "Отправлено" : "Заказать звонок"}
								</FormButton>
							</Box>
						)}
					</Form>
				</AppForm>
			</Popup>
			<Snackbar
				open={openSnackBar}
				closeFunc={handleCloseSnackBar}
				message='В ближайшее время с Вами свяжется наш специалист!'
			/>
		</>
	)
}

export default withRoot(NavBar)
