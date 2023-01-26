import React from 'react'
import Alert from './assets/images/alert.svg'
import Li from './assets/images/li.svg'
import Email from './assets/images/email.svg'
import Phone from './assets/images/phone.svg'
import Mobile from './assets/images/mobile.svg'
import * as styles from './assets/styles/index.module.css'

interface Props {

}

const Ad:React.FC<Props> = () => {
  return (
    <section className={styles.root}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <div className={styles.welcome}>
          <Alert />
          <div className={styles.text}>
            <h3 className={styles.heading}>Уважаемые инвесторы!</h3>
            <p className={styles.paragraph}>Во время отсутствия организованных торгов и ограниченной ликвидности, ООО "Солид-Лизинг" предлагает своим инвесторам возможность предъявить к выкупу биржевые облигации серии БО-001Р-05 (RU000A100TD8). ООО «Солид-Лизинг» определил цену приобретения с учетом доходности альтернативных вложений в настоящий момент.</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.params}>
            <h3 className={styles.heading}>Параметры выкупа</h3>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Li /><span className={styles.title}>Период предъявления уведомлений - с 04.04.2022 по 08.04.2022</span>
              </li>
              <li className={styles.item}>
                <Li /><span className={styles.title}>Дата приобретения - 22.04.2022</span>
              </li>
              <li className={styles.item}>
                <Li /><span className={styles.title}>Цена приобретения - 75% от номинала</span>
              </li>
              <li className={styles.item}>
                <Li /><span className={styles.title}>Кол-во - до 115 тыс. шт. включительно</span>
              </li>
              <li className={styles.item}>
                <Li /><a href="https://www.ricom.ru" style={{color: '#5c1248', fontWeight: 'bold'}}  className={styles.title} target="_blank">Агент по приобретению - АО "ИК "РИКОМ-ТРАСТ"</a>
              </li>
            </ul>
          </div>
          <div className={styles.contacts}>
            <h3 className={styles.heading}>Отправить заявку</h3>
            <div className={styles.wrap}>
              <div className={styles.contact}>
                <Email />
                <a href="mailto:yu.volkova@ricom.ru" className={styles.title}>yu.volkova@ricom.ru</a>
              </div>
              <div className={styles.contact}>
                <Phone />
                <a href="tel:+74992415307" className={styles.title}>+7 (499) 241-53-07 (доб.137)</a>
              </div>
              <div className={styles.contact}>
                <Mobile />
                <a href="tel:+79037190636" className={styles.title}>+7 (903) 719-06-36</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ad