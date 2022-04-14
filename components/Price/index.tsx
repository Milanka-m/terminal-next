import React from "react"
import Fade from 'react-reveal/Fade';
import Image from "next/image"
import Button from '../../components/Button';
import styles from "./Price.module.scss"
import withRoot from "../../modules/withRoot"

interface IPriceProps {
  priceimg: string
  handleClickOpen: () => void
  children: any
}

const Price: React.FC<IPriceProps> = ({
  priceimg,
  children,
  handleClickOpen
}) => {
	return (
      <section className={styles.price}>
        <div className={styles.price__container}>
          <Fade top>
            <article className={styles.price__imageContainer}>
              <span className={styles.price__image}>
                <Image
                  src={priceimg}
                  alt='casual-colleagues'
                  width={650}
                  height={500}
                  objectFit='cover'
                />
              </span>
            </article>
          </Fade>
          <Fade bottom>
            <div className={styles.price__content}>
              <h2 className={styles.price__title}>
                Что входит в стоимость
              </h2>
                {children}
              <Button
                id="price-btn"
                onClick={() => handleClickOpen()}
                color="secondary"
                variant="contained"
                size="medium"
                sx={{ maxWidth: 200 }}
              >
                Оставить заявку
            </Button>
            </div>
          </Fade>
        </div>
      </section>
	)
}

export default withRoot(Price)