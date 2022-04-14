import React from "react"
import Fade from "react-reveal/Fade"
import styles from "./Questions.module.scss"

const Questions: React.FC = () => {
	return (
      <section className={styles.questions}>
        <div className={styles.questions__container}>
          <h2 className={styles.questions__title}>
            Часто задаваемые вопросы
          </h2>
          <p className={styles.questions__subtitle}>
            По всем вопросам, ответы на которые вы не смогли найти, обращайтесь в разделе контакты или звоните.
          </p>
          <ul className={styles.questions__list}>
            <Fade bottom>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Почему на сайте нет цен на строительные и ремонтные виды работ?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId1} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId1}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Это самый популярный вопрос у наших заказчиков. На формирование 
                    цены влияют множество различных факторов:
                  </p>
                  <ul id={styles.questions__itemSelectList}>
                    <li>
                      <p className={styles.questions__itemSelectListText}>
                        сложность дизайн проекта;
                      </p>
                    </li>
                    <li>
                      <p className={styles.questions__itemSelectListText}>
                        объем и виды работ;
                      </p>
                    </li>
                    <li>
                      <p className={styles.questions__itemSelectListText}>
                        использование различных видов строительных и 
                        отделочных материалов, оборудования и мебели.
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
            </Fade>
            <Fade top>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Сколько времени рассчитывается смета?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId3} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId3}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Полная смета на все работы и материалы 
                    составляется обычно от 2 до 5 рабочих дней 
                    в зависимости от сложности проекта.
                  </p>
                </div>
              </li>
            </Fade>
            <Fade bottom>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Может ли изменятся стоимость в процессе ремонта или строительства?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId2} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId2}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Как правило, после заключения договора, указанная 
                    в нем стоимость изменятся не может. Однако, как 
                    показывает практика, мы часто сталкиваемся с 
                    изменениями видов работ, объемов или материалов 
                    по желанию заказчика, что приводит к увеличению 
                    или уменьшению стоимости.
                    В редких случаях цена меняется из-за возникших 
                    дополнительных работ, которые были обнаружены 
                    при реализации строительных или отделочных услуг.
                  </p>
                </div>
              </li>
              </Fade>
              <Fade top>
              <li>
                <div className={styles.questions__item}>
                  <p className={styles.questions__itemSelect}>
                    Можно ли заказывать материалы через вас?
                  </p>
                </div>
                <input id={styles.questions__itemSelectId4} type='checkbox' />
                <label 
                  className={styles.questions__itemSelectLabel}
                  htmlFor={styles.questions__itemSelectId4}>
                    <div className={styles.questions__itemSelectBtn}>
                    </div>
                </label>
                <div className={styles.questions__itemSelectContainer}>
                  <p className={styles.questions__itemText}>
                    Да. Более того, заказывая материалы через нашу 
                    компанию, вы получаете скидку у наших партнеров.
                  </p>
                </div>
              </li>
           </Fade>
          </ul>
        </div>
      </section>
	)
}

export default Questions