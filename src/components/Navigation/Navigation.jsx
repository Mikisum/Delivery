import classNames from 'classnames'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../../store/category/categorySlice'
import { Layout } from '../Layout/Layout'
import style from './Navigation.module.css'

export const Navigation = () => {

  const { category, activeCategory } = useSelector((state) => state.category)
  const dispatch = useDispatch()

  return (
    <nav className={style.navigation}>
      <Layout className={style.container}>
        <ul className={style.list}>
          {category.map((item, i) =>
            <li className={style.item} key={i}>
              <button
                className={classNames(
                  style.button,
                  activeCategory === i ? style.button_active : '')}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => {
                  dispatch(changeCategory({ indexCategory: i }))
                }}
              >
                {item.rus}
              </button>
            </li>
          )}

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
