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

const ConstructionHouses: NextPage = () => {
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
		ym('reachGoal', 'construction-houses-btn')
	}

  return (
    <>
      <Layout 
        title='Стоительство домов. Строительство 
        коммерческих и некоммерческих зданий' 
        desc='✅ Строительство домов, коттеджей из кирпича, 
        газобетона, пеноблоков под ключ. ⭐️ Цены снижены! ⭐️ 
        Скидки до 20% ☎️ 8 (908) 787-34-44 Строительно-отделочная 
        компания Терминал-М | Строительство. Отделка. Проектирование.' 
        ogTitle='Стоительство домов. Строительство 
        коммерческих и некоммерческих зданий'>
          <Landing
            title='Строительство домов | Услуги Терминал-М'
            paragraph='Строительно-отделочная компания 
            Терминал-М имеет большой опыт в малоэтажном 
            строительстве. Мы построим вам загородный дом 
            по всем строительным нормам и правилам. Если 
            вы решили обустроить свой коттедж, обращайтесь 
            в нашу компанию. В работе мы используем проекты, 
            разработанные по типовому образцу, либо 
            индивидуальные, которые будут воплощены только 
            у вас.'
            img='/images/construction-houses-img.webp'
            heading='Какие строительные работы мы можем предложить'
            cardtext1='Стоительство домов'
            cardtext2='Строительство коммерческих зданий'
            cardtext3='Строительство некоммерческих зданий'
            cardtext4='Строительство загородных комплексов'
            iconcard1='/images/construction-houses-icon.webp'
            iconcard2='/images/construction-houses-icon.webp'
            iconcard3='/images/construction-houses-icon.webp'
            iconcard4='/images/construction-houses-icon.webp'
          />
          <Price 
            priceimg='/images/construction-houses-img-2.webp'
            handleClickOpen={handleClickOpen}
          >
            <div className={styles.price__contentBonuses}>
              <ul className={styles.price__lists}>
                <li>
                  <p className={styles.price__item}>
                    Проектирование дома
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Строительство коробки дома
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Монтаж коммуникаций 
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Отделка дома
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Строительство дополнительных построек, навесов, заборов
                  </p>
                </li>
                <li>
                  <p className={styles.price__item}>
                    Благоустройство участка и прилегающей территории
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

export default withRoot(ConstructionHouses)