import type { NextPage, GetServerSideProps } from "next"
import React from "react"
import withRoot from "../../modules/withRoot"
import Layout from "../../layout/Layout"
import { OurContacts } from "../../components"
import ProductPrice from "../../modules/views/ProductPrice"
import cardsData from "../../data/products"
import { IProducts } from "../../types"
import styles from "../index.module.scss"

interface IIndexProps {
	cards: IProducts[]
}

const Services: NextPage<IIndexProps> = ({ cards }) => {
  const [initialCards, setInitialCards] = React.useState<IProducts[]>(cards)

  return (
    <Layout 
      title='Услуги строительно-отделочной компании Терминал-М | 
      Строительство. Отделка. Проектирование.' 
      desc='⭐️ Мы оказываем следующие услуги "под ключ": ✅ 
      строительство коммерческих и некоммерческих зданий; ✅ 
      отделка квартир, домов, офисов, магазинов и нежилых помещений; ✅ 
      монтаж инженерных сетей; благоустройство территории; 
      ✅ проектирование дизайна любой сложности. ⭐️ Цены снижены! 
      ☎️ 8 (908) 787-34-44' 
      ogTitle='Услуги строительно-отделочной компании Терминал-М | 
      Строительство. Отделка. Проектирование.'>
        <h1 className={styles.services__title}>
          Услуги Терминал-М | Строительство. 
          Отделка. Проектирование
        </h1>
        {cards && cards.length > 0 
				? (
					<ProductPrice
						initialCards={initialCards}
						title=''
					/>
				  ) 
				: (<></>)}
        <OurContacts />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
	const cards: IProducts[] = cardsData
	return {
		props: {
			cards,
		},
	}
}

export default withRoot(Services)