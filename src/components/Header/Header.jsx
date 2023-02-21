
import React from 'react'
import logo from '../../assets/img/logo.svg'
import { Layout } from '../Layout/Layout'
import style from './Header.module.css'

export const Header = () => {
  return (

    <header className={style.header}>
      <Layout>
        <div className={style.container}>
          <img className={style.logo} src={logo} alt="Логотип YourMeal" />

          <div className={style.wrapper}>
            <h1 className={style.title}>
              <span>Только самые</span>
              <span className={style.red}>сочные бургеры!</span>
            </h1>

            <p className={style.appeal}>Бесплатная доставка от 599₽</p>
          </div>
        </div>
      </Layout>
    </header>
  )
}
