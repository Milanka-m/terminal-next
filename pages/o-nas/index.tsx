import type { NextPage, GetServerSideProps } from "next"
import React from "react"
import Link from "next/link"
import ym from "react-yandex-metrika"
import Box from "@mui/material/Box"
import withRoot from "../../modules/withRoot"
import Layout from "../../layout/Layout"
import { 
  WebsiteDev,
  Snackbar,
  Directions,
  Strategy
} from "../../components"
import CardImage from "../../modules/views/CardImage"
import Popup from "../../modules/views/Popup"
import ProductCategories from '../../modules/views/ProductCategories'
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

const AboutUs: NextPage<IIndexProps> = ({ images, imageData }) => {
  const [countImages, setCountImages] = React.useState(0)
	const [initialImages, setinitialImages] = React.useState<IPortfolio[]>(images && images)
	const [openPopupImage, setOpenPopupImage] = React.useState<boolean>(false)
	const [selectedImage, setSelectedImage] = React.useState<IPortfolio>(imageData)
  const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false)
	const [sent, setSent] = React.useState<boolean>(false)
	
  React.useEffect(() => {
		initialImages.length >= 6 
		? setCountImages(6) 
		: setCountImages(initialImages.length)
	  }, [initialImages])
	
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
		ym('reachGoal', 'submit-form-aboutUs')
	}

  return (
    <>
      <Layout 
          title='О строительно-отделочной компании Терминал-М | 
          Строительство. Отделка. Проектирование' 
          desc='⭐️ Терминал-М | Строительство. Отделка. Проектирование. 
          Производим строительно-отделочные работы'
          ogTitle='О строительно-отделочной компании Терминал-М | 
          Строительство. Отделка. Проектирование'>
            <WebsiteDev 
              title='О компании Терминал-М | Строительство. 
              Отделка. Проектирование'
              paragraph1='Терминал-М — это одна из ведущих строительно-отделочных компаний 
              на территории Белгородской области. На протяжении 10 лет нами было 
              построено более 50 коммерческих и некоммерческих зданий, 
              отремонтировано “под ключ” более 70 квартир, домов, офисных и нежилых помещений. 
              Наша команда высококвалифицированных специалистов берется как за 
              сложные крупномасштабные, так и простые работы.'
              paragraph2='Мы стремимся к совершенству и делаем все возможное, чтобы клиенты 
              были полностью удовлетворены нашей работой. Напишите или позвоните нам и 
              запишитесь на консультацию.'
              imgWebDev='/images/company-img.webp'
            >
              <Directions
                title='Мы работаем в таких направлениях:'
                spanItem1='Строительство домов '
                spanItem2='Электромонтажные работы '
                spanItem3='Сантехнические работы '
                spanItem4='Внутренняя отделка '
                spanItem5='Дизайнерские решения '
                spanItem6='Благоустройство '
                textItem1='– Строительство домов, коттеджей из кирпича, газобетона, пеноблоков под ключ.'
                textItem2='– Все виды электромонтажных работ под ключ. Качественно и недорого сделаем 
                электромонтажные работы в квартире, коттедже, таунхаусе.'
                textItem3='– Все виды сантехнических работ под ключ. Качественно и недорого сделаем 
                монтаж сантехники в квартире, коттедже, таунхаусе'
                textItem4='– Качественно и недорого: выравнивание стен, штукатурные работы, малярные 
                работы, оклейка обоев, художественная роспись.'
                textItem5='– Проектирование дизайна любой сложности под ключ.'
                textItem6='– Монтаж инженерных сетей и благоустройство территории под ключ.'
              />
            </WebsiteDev>
            <section className={styles.portfolio}>
              <ProductCategories 
                title='Наши работы'
                initialImages={initialImages} 
                countImages={countImages}
                handleClickOpen={handleClickOpenPopupImage}
              />
              <Link href='/proekti'>
                <a className={styles.portfolio__cardLink}>
                  Посмотреть все работы
                </a>
              </Link>
            </section>
            <Strategy />
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

export default withRoot(AboutUs)