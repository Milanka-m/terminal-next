import type { NextPage, GetServerSideProps } from "next"
import React from "react"
import ym from "react-yandex-metrika"
import Box from "@mui/material/Box"
import withRoot from "../../modules/withRoot"
import Layout from "../../layout/Layout"
import CardImage from "../../modules/views/CardImage"
import Popup from "../../modules/views/Popup"
import ProductCategories from '../../modules/views/ProductCategories'
import { 
	Snackbar,
  } from "../../components"
import styles from "../index.module.scss"
import AppForm from "../../modules/views/AppForm"
import FormButton from "../../modules/form/FormButton"
import FormFeedback from "../../modules/form/FormFeedback"
import RFTextField from "../../modules/form/RFTextField"
import { Field, Form, FormSpy } from "react-final-form"
import { phone, required } from "../../modules/form/validation"
import { sendTelegramm } from "../../utils"
import { IPortfolio } from "../../types"
import { portfolioApi } from "../../stores/api"

interface IIndexProps {
	images: IPortfolio[]
	imageData: IPortfolio
}

const Product: NextPage<IIndexProps> = ({ images, imageData }) => {

	const [initialImages, setinitialImages] = React.useState<IPortfolio[]>(images && images)
	const [openPopupImage, setOpenPopupImage] = React.useState<boolean>(false)
	const [selectedImage, setSelectedImage] = React.useState<IPortfolio>(imageData)
	const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false)
	const [sent, setSent] = React.useState<boolean>(false)
	
	const handleClickOpenPopupImage = (param: any): void => {
		setOpenPopupImage((pre) => !pre)
		setSelectedImage(param)
	}

	const handleClosePopupImage = (): void => {
		setOpenPopupImage((pre) => !pre)
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
		setOpenSnackBar((pre) => !pre)
		ym('reachGoal', 'submit-form-product')
	}

	return (
		<>
			<Layout
				title='Проекты строительно-отделочной компании 
				Терминал-М | Строительство. Отделка. Проектирование.'
				desc='⭐️ Терминал-М | Строительство. Отделка. 
				Проектирование. Наши проекты. ⭐️ Цены снижены! ⭐️ 
				Скидки до 20% ☎️ 8 (908) 787-34-44'
				ogTitle='Проекты строительно-отделочной компании 
				Терминал-М | Строительство. Отделка. Проектирование.'>
				<h1 className={styles.services__title}>
					Проекты Терминал-М | Строительство. 
					Отделка. Проектирование
				</h1>
				<ProductCategories 
					title=''
					initialImages={initialImages} 
					handleClickOpen={handleClickOpenPopupImage}
				/>
				<section className={styles.application}>
					<div className={styles.application__container}>
						<div className={styles.application__heading}>
						<h2 className={styles.application__title}>
							Свяжитесь с нами!
						</h2>  
						<p className={styles.application__subtitle}>
							Напишите нам и мы обсудим предстоящий проект!
						</p>
						</div>
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
					</div>
				</section>
			</Layout>
			<Popup 
				open={openPopupImage}
				onClose={handleClosePopupImage}
			>
				{selectedImage
				? 
					<CardImage
						selectedImage={selectedImage}
					/>
				: 	<></>
				}
			</Popup>
			<Snackbar
				open={openSnackBar}
				closeFunc={handleCloseSnackBar}
				message='В ближайшее время с Вами свяжется наш специалист!'
			/>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const images = await portfolioApi.show()
	return {
		props: {
			images: images.data.data
		},
	}
}

export default withRoot(Product)