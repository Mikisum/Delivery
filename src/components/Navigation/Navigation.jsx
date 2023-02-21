import classNames from 'classnames'
import React from 'react'
import { Layout } from '../Layout/Layout'
import style from './Navigation.module.css'

export const Navigation = () => {
  return (

    <nav className={style.navigation}>
      <Layout className={style.container}>
        <ul className={style.list}>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_burger, style.button_active)}>Бургеры</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_snack)}>Закуски</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_hotdog)}>Хот-доги</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_combo)}>Комбо</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_shawarma)}>Шаурма</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_pizza)}>Пицца</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_wok)}>Вок</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_dessert)}>Десерты</button>
          </li>
          <li className={style.item}>
            <button className={classNames(style.button, style.button_sauce)}>Соусы</button>
          </li>
        </ul>
      </Layout>
    </nav>

  )
}