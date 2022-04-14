import type { NextPage } from "next"
import React from "react"
import Box from "@mui/material/Box"
import withRoot from "../../modules/withRoot"
import Layout from "../../layout/Layout"
import styles from "../index.module.scss"
import { 
  Snackbar,
  Contacts
} from "../../components"
import AppForm from "../../modules/views/AppForm"
import FormButton from "../../modules/form/FormButton"
import FormFeedback from "../../modules/form/FormFeedback"
import RFTextField from "../../modules/form/RFTextField"
import { Field, Form, FormSpy } from "react-final-form"
import { phone, required } from "../../modules/form/validation"
import { sendTelegramm } from "../../utils"
import ym from "react-yandex-metrika"

const OurContacts: NextPage = () => {
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
			`Оформление заказа/услуги. %0AИмя: ${values.firstName}%0AТелефон: ${values.phone} %0AСообщение:${values.message}`,
		)
		setSent((pre) => !pre)
		setOpenSnackBar((pre) => !pre)
		ym('reachGoal', 'submit-form-contact')
	}

  return (
    <>
      <Layout 
        title='Контакты строительно-отделочной компании Терминал-М | 
        Строительство. Отделка. Проектирование.' 
        desc='⭐️ Контактная информация Строительно-отделочная компания 
        Терминал-М | Строительство. Отделка. Проектирование.: 
        телефон, адрес, режим работы, e-mail для связи. Контакты 
        строительно-отделочной компании Терминал-М.☎️ 8 (908) 787-34-44'
        ogTitle='Контакты строительно-отделочной компании Терминал-М | 
        Строительство. Отделка. Проектирование.'> 
          <section className={styles.contacts}>
            <h1 className={styles.services__title}>
              Контакты Терминал-М | Строительство. 
              Отделка. Проектирование
            </h1>
            <div className={styles.contacts__content}>
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
              <Contacts />
            </div>
          </section>
      </Layout>
      <Snackbar
        open={openSnackBar}
        closeFunc={handleCloseSnackBar}
        message='В ближайшее время с Вами свяжется наш специалист!'
      />
    </>
  )
}

export default withRoot(OurContacts)