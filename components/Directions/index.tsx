import React from "react"
import Link from "next/link"
import Fade from 'react-reveal/Fade'
import styles from "./Directions.module.scss"

interface IDirectionsProps {
  title?: string
  spanItem1?: string
  spanItem2?: string
  spanItem3?: string
  spanItem4?: string
  spanItem5?: string
  spanItem6?: string
  textItem1?: string
  textItem2?: string
  textItem3?: string
  textItem4?: string
  textItem5?: string
  textItem6?: string
}

const Directions: React.FC<IDirectionsProps> = ({
  title,
  spanItem1,
  spanItem2,
  spanItem3,
  spanItem4,
  spanItem5,
  spanItem6,
  textItem1,
  textItem2,
  textItem3,
  textItem4,
  textItem5,
  textItem6,
}) => {
	return (
    <section className={styles.directions}>
      <Fade bottom>
        <h2 className={styles.directions__title}>
          {title}
        </h2>
        <ul id={styles.directions__lists}>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/stroitelstvo-domov'>
                <a>{spanItem1}</a>
              </Link>
              {textItem1}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/elektromontazhnie-raboti'>
                <a>{spanItem2}</a>
              </Link>
              {textItem2}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/santehnicheskie-raboti'>
                <a>{spanItem3}</a>
              </Link>
              {textItem3}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/vnutrennyaya-otdelka'>
                <a>{spanItem4}</a>
              </Link>
              {textItem4}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/dizainerskie-resheniya'>
                <a>{spanItem5}</a>
              </Link>
              {textItem5}
            </p>
          </li>
          <li>
            <p className={styles.directions__item}>
              <Link href='/uslugi/blagoustroistvo'>
                <a>{spanItem6}</a>
              </Link>
              {textItem6}
            </p>
          </li>
        </ul>
      </Fade>
    </section>
	)
}

export default Directions