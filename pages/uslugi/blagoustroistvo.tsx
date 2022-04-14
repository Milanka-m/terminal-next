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

const Landscaping: NextPage = () => {
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
		ym('reachGoal', 'landscaping-btn')
	}

  return (
    <>
      <Layout 
        title='Монтаж инженерных сетей и благоустройство территории' 
        desc='✅ Монтаж инженерных сетей и благоустройство территории 
        под ключ. ⭐️ Цены снижены! ⭐️ Скидки до 20% ☎️ 
        8 (908) 787-34-44 Строительно-отделочная компания 
        Терминал-М | Строительство. Отделка. Проектирование. ' 
        ogTitle='Монтаж инженерных сетей и благоустройство территории'>
          <Landing
            title='Благоустройство | Услуги Терминал-М'
            paragraph='Все должно находиться в гармонии, и дом, 
            каким бы красивым и удобным он ни был — лишь одна 
            из двух составляющих настоящего уюта. Двор, визитная 
            карточка любого участка, обязан соответствовать дому. 
            Благоустройство территории — это способ облагородить 
            участок до уровня жилья. Ухоженный и стильный, он 
            будет лучшим свидетельством рачительности и вкуса 
            хозяев. А те смогут получать дивиденды в виде 
            искренних комплиментов от восхищенных красотой гостей.'
            img='/images/landscaping-img.webp'
            heading='Кому мы помогаем с проектом благоустройства'
            cardtext1='Торговым комплексам'
            cardtext2='Бизнес-центрам'
            cardtext3='Многоквартирным домам и жилым комплексам'
            cardtext4='Промышленным зонам и предприятиям'
            iconcard1='/images/sity-icon.webp'
            iconcard2='/images/sity-icon.webp'
            iconcard3='/images/sity-icon.webp'
            iconcard4='/images/sity-icon.webp'
          />
          <Price 
            priceimg='/images/landscaping-img-2.webp'
            handleClickOpen={handleClickOpen}
          >
            <div className={styles.price__contentBonuses}>
              <ul className={styles.price__lists}>
                <li>
                  <p className={styles.price__item}>Монтаж бордюров</p>
                </li>
                <li>
                  <p className={styles.price__item}>Монтаж садовых бордюров</p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Устройство тротуарной плитки
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>Земляные работы</p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Подготовка песчаного основания под плитку
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

export default withRoot(Landscaping)