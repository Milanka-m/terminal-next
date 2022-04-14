import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "../../components/Typography"
import Snackbar from "../../components/Snackbar"
import { phone, required } from "../form/validation"
import { Field, Form, FormSpy } from "react-final-form"
import RFTextField from "../form/RFTextField"
import FormButton from "../form/FormButton"
import FormFeedback from "../form/FormFeedback"
import { sendTelegramm } from "../../utils"
import ym from "react-yandex-metrika"

function ProductCTA() {
	const [open, setOpen] = React.useState(false)
	const [sent, setSent] = React.useState<boolean>(false)

	const handleSubmit = (values: { [index: string]: string }): void => {
		if (values.phone && values.phone.length > 0) {
			sendTelegramm(`Оставили заявку. Телефон заказчика: ${values.phone}`)
		}
		setSent((pre) => !pre)
		setOpen((pre) => !pre)
		ym('reachGoal', 'submit-form')
	}

	const handleClose = () => {
		setOpen(false)
	}

	const validate = (values: { [index: string]: string }) => {
		const errors = required(["phone"], values)
		if (!errors.phone) {
			const phoneError = phone(values.phone)
			if (phoneError) {
				errors.phone = phoneError
			}
		}
		return errors
	}

	return (
		<Container 
            component='section' 
            sx={{ 
                mt: 10, 
                mb: 3,
                display: "flex",
            }}>
			<Grid container>
				<Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							bgcolor: "secondary.light",
							py: 8,
							px: 3,
						}}>
						<Box sx={{ maxWidth: 400 }}>
							<Typography variant='h2' component='h3' gutterBottom>
								Оставить заявку
							</Typography>
							<Typography variant='h5' component='span'>
								Мы свяжимся с вами в течение 3 минут
							</Typography>
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
											noBorder
											variant='standard'
											sx={{
												width: "100%",
												mt: 3,
												mb: 2,
											}}
											component={RFTextField}
											disabled={submitting || sent}
											autoComplete='Phone'
											placeholder='Телефон'
											name='phone'
											required
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
											id='application-button'
											type='submit'
											color='primary'
											variant='contained'
											sx={{ width: "100%" }}
											disabled={submitting || sent}
											fullWidth>
											{submitting || sent ? "Отправлено" : "Оставить заявку"}
										</FormButton>
									</Box>
								)}
							</Form>
						</Box>
					</Box>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: { md: "block", xs: "none" },
						position: "relative",
					}}>
					<Box
						sx={{
							position: "absolute",
							top: -67,
							left: -67,
							right: 0,
							bottom: 0,
							width: "100%",
							background: "url(/images/productCTAImageDots.webp)",
						}}
					/>
					<Box
						component='img'
						src='/images/photo-9.webp'
						alt='call to action'
						sx={{
							position: "absolute",
							top: -28,
							left: -28,
							right: 0,
							bottom: 0,
							width: "100%",
							maxWidth: 600,
						}}
					/>
				</Grid>
			</Grid>
			<Snackbar
				open={open}
				closeFunc={handleClose}
				message='В ближайшее время с Вами свяжется наш специалист!'
			/>
		</Container>
	)
}

export default ProductCTA