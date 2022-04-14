import React from "react"
import Fade from 'react-reveal/Fade'
import Image from "next/image"
import styles from "./WebsiteDev.module.scss"

interface IWebsiteDevProps {
  title?: string
  paragraph1?: string
  paragraph2?: string
  paragraph3?: string
  imgWebDev: string
  textItem1?: string
  textItem2?: string
  textItem3?: string
  textItem4?: string
  textItem5?: string
  textItem6?: string
}

const WebsiteDev: React.FC<IWebsiteDevProps> = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  imgWebDev,
  textItem1,
  textItem2,
  textItem3,
  textItem4,
  textItem5,
  textItem6,
  children
}) => {
	return (
      <section className={styles.websiteDev}>
        <div className={styles.websiteDev__container}>
          <article className={styles.websiteDev__block}>
            <Fade bottom>
              <div className={styles.websiteDev__content}>
                <h1 className={styles.websiteDev__title}>
                  {title}
                </h1>
                <p className={styles.websiteDev__paragraph}>
                  {paragraph1}
                </p>
                <p className={styles.websiteDev__paragraph}>
                  {paragraph2}
                </p>
                <ul id={styles.websiteDev__lists}>
                  <li>
                    <p className={styles.websiteDev__item}>
                      {textItem1}
                    </p>
                  </li>
                  <li>
                    <p className={styles.websiteDev__item}>
                      {textItem2}
                    </p>
                  </li>
                  <li>
                    <p className={styles.websiteDev__item}>
                      {textItem3}
                    </p>
                  </li>
                  <li>
                    <p className={styles.websiteDev__item}>
                      {textItem4}
                    </p>
                  </li>
                  <li>
                    <p className={styles.websiteDev__item}>
                      {textItem5}
                    </p>
                  </li>
                  <li>
                    <p className={styles.websiteDev__item}>
                      {textItem6}
                    </p>
                  </li>
                </ul>
                <p className={styles.websiteDev__paragraph}>
                  {paragraph3}
                </p>
              </div>
            </Fade>
            <Fade top>
              <Image
                src={imgWebDev}
                alt='website-min-scaled'
                width={520}
                height={419}
                objectFit='cover'
              />
            </Fade>
          </article>
          {children}
        </div>
      </section>
	)
}

export default WebsiteDev