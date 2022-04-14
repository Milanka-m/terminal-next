import type { NextPage } from "next"
import React from "react"
import Layout from "../../layout/Layout"
import { 
  Landing, 
  Price, 
  Strategy,
  Questions,
  GetConsultation,
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
 import styles from "../index.module.scss"

const PlumbingWork: NextPage = () => {
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
		ym('reachGoal', 'plumbing-work-btn')
	}

  return (
    <>
      <Layout 
        title='Сантехнические работы под ключ' 
        desc='✅ Все виды сантехнических работ под ключ. 
        Качественно и недорого сделаем монтаж сантехники 
        в квартире, коттедже, таунхаусе ⭐️ Цены снижены! ⭐️ 
        Скидки до 20% ☎️ 8 (908) 787-34-44 Строительно-отделочная 
        компания Терминал-М | Строительство. Отделка. Проектирование.' 
        ogTitle='Сантехнические работы под ключ'>
          <Landing
            title='Сантехнические работы | Услуги Терминал-М'
            paragraph='Сантехнические работы – это установка, ремонт 
            и обслуживание сантехнического оборудования. Если 
            нужно установить канализацию, провести водопровод, 
            или просто поменять трубы или устранить протечку – 
            необходимо вызывать сантехника.
            Сантехнические работы в нашей компании 
            могут стоить от 500 рублей. Всё зависит от 
            задачи: расскажите, что случилось, и мастера 
            сами расскажут о расценках, а вы выберете 
            подходящий вариант.'
            img='/images/plumbing-work-img.webp'
            heading='Кому мы помогаем с сантехническими работами'
            cardtext1='Жилым комплексам'
            cardtext2='Бизнес-центрам'
            cardtext3='Торговым комплексам'
            cardtext4='Загородным комплексам'
            iconcard1='/images/plumbing-work-icon.webp'
            iconcard2='/images/plumbing-work-icon.webp'
            iconcard3='/images/plumbing-work-icon.webp'
            iconcard4='/images/plumbing-work-icon.webp'
          />
          <Price 
            priceimg='/images/plumbing-work-img-2.webp'
            handleClickOpen={handleClickOpen}
          >
            <div className={styles.price__contentBonuses}>
              <ul className={styles.price__lists}>
                <li>
                  <p className={styles.price__item}>
                    Демонтаж сантехники 
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Разводка водоснабжения 
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Разводка канализации
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Разводка отопления
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Монтаж сантехнических приборов и устройств
                  </p>
                </li>
              </ul>
            </div>
          </Price>
          <Strategy />
          <GetConsultation />
          <Questions />
      </Layout>
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

export default withRoot(PlumbingWork)