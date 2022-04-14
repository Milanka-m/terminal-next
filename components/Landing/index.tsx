import React from "react"
import Fade from 'react-reveal/Fade'
import Image from "next/image"
import styles from "./Landing.module.scss"

interface ILandingProps {
  title?: string
  paragraph?: string
  img: string
  heading?: string
  cardtext1?: string
  cardtext2?: string
  cardtext3?: string
  cardtext4?: string
  iconcard1: string
  iconcard2: string
  iconcard3: string
  iconcard4: string
}

const Landing: React.FC<ILandingProps> = ({
  title,
  paragraph,
  img,
  heading,
  cardtext1,
  cardtext2,
  cardtext3,
  cardtext4,
  iconcard1,
  iconcard2,
  iconcard3,
  iconcard4
}) => {
	return (
    <>
      <section className={styles.landing}>
        <div className={styles.landing__container}>
          <Fade bottom>
            <div className={styles.landing__content}>
              <h1 className={styles.landing__title}>
                {title}
              </h1>
              <p className={styles.landing__paragraph}>
                {paragraph}
              </p>
            </div>
          </Fade>
          <Fade top>
            <Image
              src={img}
              alt='landing-page'
              width={630}
              height={425}
              objectFit='cover'
            />
          </Fade>
        </div>
      </section>
      <section className={styles.landing}>
        <div className={styles.landing__containerCards}>
          <h2 className={styles.landing__title}>
            <span>
              {heading}
            </span>
          </h2>
          <ul className={styles.landing__cards}>
            <Fade bottom>  
              <li>
                <div className={styles.landing__card}>
                  <span className={styles.landing__cardImage}>
                    <Image
                      src={iconcard1}
                      alt='website-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span>     
                  <p className={styles.landing__cardText}>
                    {cardtext1}
                  </p>
                </div>
              </li>
            </Fade>
            <Fade top>
              <li>
                <div className={styles.landing__card}>
                  <span className={styles.landing__cardImage}>
                    <Image
                      src={iconcard2}
                      alt='speaker-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span>  
                  <p className={styles.landing__cardText}>
                    {cardtext2}
                  </p>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className={styles.landing__card}>
                  <span className={styles.landing__cardImage}>
                    <Image
                      src={iconcard3}
                      alt='printing-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span> 
                  <p className={styles.landing__cardText}>
                    {cardtext3}
                  </p>
                </div>
              </li>
            </Fade>
            <Fade top>
              <li>
                <div className={styles.landing__card}>
                  <span className={styles.landings__cardImage}>
                    <Image
                      src={iconcard4}
                      alt='seo-icon'
                      width={60}
                      height={60}
                      objectFit='contain'
                    />
                  </span> 
                  <p className={styles.landing__cardText}>
                   {cardtext4}
                  </p>
                </div>
              </li>
            </Fade>
          </ul>
        </div>
      </section>
    </>
	)
}

export default Landing