import type { NextPage } from "next"
import Layout from "../../layout/Layout"
import Image from "next/image"
import styles from "../index.module.scss"

const Partners: NextPage = () => {
  return (
    <Layout 
      title='Партнеры строительно-отделочной компании Терминал-М | 
      Строительство. Отделка. Проектирование.' 
      desc='⭐️ Партнеры строительно-отделочной компании Терминал-М | 
      Строительство. Отделка. Проектирование. ⭐️ Цены снижены! ⭐️ 
      Скидки до 20% ☎️ 8 (908) 787-34-44'
      ogTitle='Партнеры строительно-отделочной компании Терминал-М | 
      Строительство. Отделка. Проектирование.'>
        <section className={styles.partnersPage}>
          <h1 className={styles.services__title}>
                Партнеры Терминал-М | Строительство. 
                Отделка. Проектирование
          </h1>
          <ul className={styles.partnersPage__list}>
            <li>
              <div className={styles.partnersPage__item}>
                <Image
                  src='/images/partners-img-1.webp'
                  alt='partners'
                  width={170}
                  height={170}
                  objectFit='contain'
                />
              </div>
            </li>
            <li>
              <div className={styles.partnersPage__item}>
                <Image
                  src='/images/partners-img-2.webp'
                  alt='partners'
                  width={170}
                  height={170}
                  objectFit='contain'
                />
              </div>
            </li>
            <li>
              <div className={styles.partnersPage__item}>
                <Image
                  src='/images/partners-img-3.webp'
                  alt='partners'
                  width={170}
                  height={170}
                  objectFit='contain'
                />
              </div>
            </li>
            <li>
              <div className={styles.partnersPage__item}>
                <Image
                  src='/images/partners-img-4.webp'
                  alt='partners'
                  width={170}
                  height={170}
                  objectFit='contain'
                />
              </div>
            </li>
          </ul>
        </section>
    </Layout>
  )
}

export default Partners