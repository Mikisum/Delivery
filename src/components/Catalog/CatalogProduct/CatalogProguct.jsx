import React from 'react'
import style from './CatalogProguct.module.css'

export const CatalogProguct = ({ title }) => {
  return (
    <article className={style.product}>
      <img src="../../src/assets/img/photo-5.jpg" alt={title} className={style.image} />

      <p className="price">689<span className="currency">₽</span></p>

      <h3 className={style.title}>
        <button className={style.detail}>{title}</button>
      </h3>

      <p className={style.weight}>520г</p>

      <button className={style.add} type="button">Добавить</button>
    </article>
  )
}
