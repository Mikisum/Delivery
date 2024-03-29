import React from 'react'
import { useDispatch } from 'react-redux'
import { API_URI } from '../../../const'
import { addProduct } from '../../../store/order/orderSlice'
import style from './CatalogProguct.module.css'

export const CatalogProguct = ({ item }) => {

  const dispatch = useDispatch()

  return (
    <article className={style.product}>
      <img src={`${API_URI}/${item.image}`} alt={item.title} className={style.image} />

      <p className="price">{item.price}<span className="currency">₽</span></p>

      <h3 className={style.title}>
        <button className={style.detail}>{item.title}</button>
      </h3>

      <p className={style.weight}>{item.weight}</p>

      <button
        className={style.add}
        type="button"
        onClick={() => {
          dispatch(addProduct({ id: item.id }))
        }}
      >
        Добавить
      </button>
    </article>
  )
}
