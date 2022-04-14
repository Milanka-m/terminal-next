import React from "react"
import Box from "@mui/material/Box"
import withRoot from "../../modules/withRoot"
import styles from "./GetConsultation.module.scss"
import { 
	Snackbar,
  } from "../../components"
import AppForm from "../../modules/views/AppForm"
import FormButton from "../../modules/form/FormButton"
import FormFeedback from "../../modules/form/FormFeedback"
import RFTextField from "../../modules/form/RFTextField"
import { Field, Form, FormSpy } from "react-final-form"
import { phone, required } from "../../modules/form/validation"
import { sendTelegramm } from "../../utils"
import ym from "react-yandex-metrika"

const GetConsultation: React.FC = () => {

	const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false)
	const [sent, setSent] = React.useState<boolean>(false)

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
			`Получить консультацию. %0AИмя: ${values.firstName}%0AТелефон: ${values.phone}`,
		)
		setSent((pre) => !pre)
		setOpenSnackBar((pre) => !pre)
		ym('reachGoal', 'submit-form-consultation')
	}

	return (
		<section className={styles.getConsultation}>
            <div className={styles.getConsultation__formContent}>
				<p 
					className={styles.getConsultation__label}
				>
					Хотите работать с нами?
				</p>
					<AppForm>
						<Form
							onSubmit={handleSubmit}
							subscription={{ submitting: true }}
							validate={validate}
						>
						    {({ handleSubmit: handleSubmit2, submitting }) => (
						<Box
							component='form'
							onSubmit={handleSubmit2}
							noValidate
							sx={{ 
								mt: 0, 
								width: 500,
								'@media (max-width:800px)': {
								    width: '100%',
								},
							}}
                        >
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
                                {submitting || sent ? "Отправлено" : "Получить консультацию"}
                            </FormButton>
					    </Box>
					    )}
					</Form>	
				</AppForm>	
			</div> 
			<Snackbar
				open={openSnackBar}
				closeFunc={handleCloseSnackBar}
				message='В ближайшее время с Вами свяжется наш специалист!'
			/>
		</section>
	)
}

export default withRoot(GetConsultation)