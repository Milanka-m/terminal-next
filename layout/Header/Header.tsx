import React from "react"
import Link from "next/link"
import Image from "next/image"
import NavBar from "../NavBar/NavBar"
import { 
	ApplicationBtn,
	Snackbar,
	YMetrika
} from "../../components"
import styles from "./Header.module.scss"
import classNames from "classnames"
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


const Header: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(false)
	const [isNavActive, setIsNavActive] = React.useState<boolean>(false)
	const [services, setServices] = React.useState<boolean>(false)
	const [home, setHome] = React.useState<boolean>(false)
	const [company, setCompany] = React.useState<boolean>(false)
	const [products, setProducts] = React.useState<boolean>(false)
	const [partners, setPartners] = React.useState<boolean>(false)
	const [contacts, setContacts] = React.useState<boolean>(false)
	const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false)
	const [sent, setSent] = React.useState<boolean>(false)


	const handleNavClick = (): void => {
		setIsNavActive((pre) => !pre)
	}
	const navActive = `${!isNavActive && styles.header__navLink_active}`

	React.useEffect(() => {
		const loc = location.pathname.split("/").pop()!
		if (loc.length > 0) {
			if (loc === "uslugi") {
				setServices(true)
			}
			if (loc === "o-nas") {
				setCompany(true)
			}
			if (loc === "proekti") {
				setProducts(true)
			}
			if (loc === "nashi-partneri") {
				setPartners(true)
			}
			if (loc === "contact") {
				setContacts(true)
			}
		}
		else if (loc.length == 0) {
			setHome(true)
		}
	}, [services, home, company, products, partners, contacts])

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
		ym('reachGoal', 'submit-form-header')
	}

	return (
		<>
			<header className={styles.header}>
				<YMetrika />
				<div className={styles.header__mobileMenu}>
					<Link href='/'>
						<a className={styles.header__logoLink}>
							<Image
								src='/images/logo-terminal-2.webp'
								alt='logo-terminal-M'
								width={90}
								height={55}
							/>
						</a>
					</Link>
					<a 
						className={styles.header__contactsLink} 
						href='tel:+79087873444'>
						+7 908 787 3 444
					</a>
					<NavBar />
				</div>
				<div className={styles.header__container}>
					<div className={styles.header__navContainer}>
						<Link href='/'>
							<a >
								<Image
									className={styles.header__logoLink}
									src='/images/logo-terminal-2.webp'
									alt='logo-terminal-M'
									width={130}
									height={80}
								/>
							</a>
						</Link>
						<nav className={styles.header__nav}>
							<ul className={styles.header__navLinks}>
								<li>
									<Link href='/'>
										<a
											className={classNames(
												styles.header__navLink,
												home ? navActive : "",
											)}
											onClick={handleNavClick}>
											Главная
										</a>
									</Link>
								</li>
								<li>
									<Link href='/o-nas'>
										<a
											className={classNames(
												styles.header__navLink,
												company ? navActive : "",
											)}
											onClick={handleNavClick}>
											О нас
										</a>
									</Link>
								</li>
								<li>
									<Link href='/uslugi'>
										<a
											className={classNames(
												styles.header__navLink,
												services ? navActive : "",
											)}
											onClick={handleNavClick}>
											Услуги
										</a>
									</Link>
								</li>
								<li>
									<Link href='/proekti'>
										<a
											className={classNames(
												styles.header__navLink,
												products ? navActive : "",
											)}
											onClick={handleNavClick}>
											Проекты
										</a>
									</Link>
								</li>
								<li>
									<Link href='/nashi-partneri'>
										<a
											className={classNames(
												styles.header__navLink,
												partners ? navActive : "",
											)}
											onClick={handleNavClick}>
											Наши партнёры
										</a>
									</Link>
								</li>
								<li>
									<Link href='/contact'>
										<a
											className={classNames(
												styles.header__navLink,
												contacts ? navActive : "",
											)}
											onClick={handleNavClick}>
											Контакты
										</a>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<ul className={styles.header__contactLinks}>
						<li>
							<a 
								className={styles.header__contactLink} 
								href='tel:+79087873444'>
								+7 908 787 3 444
							</a>
						</li>
						<li>
							<ApplicationBtn handleClickOpen={handleClickOpen} />
						</li>
					</ul>
				</div>
			</header>
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

export default withRoot(Header)
