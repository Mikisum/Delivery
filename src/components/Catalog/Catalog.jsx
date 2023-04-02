import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productRequestAsync } from '../../store/product/productSlice';
import { Layout } from '../Layout/Layout';
import { Order } from '../Order/Order';
import style from './Catalog.module.css';
import { CatalogProguct } from './CatalogProduct/CatalogProguct';

export const Catalog = () => {
  const { products } = useSelector(state => state.product)
  const dispatch = useDispatch()
  const { category, activeCategory } = useSelector(state => state.category)

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title))
    }
  }, [category, activeCategory])

  return (
    <section className={style.catalog}>
      <Layout className={style.container}>
        <Order />

        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
          <div className={style.wrap_list}>
            {products.length ? (
              <ul className={style.list}>
                {products.map(item => (
                  <li className={style.item} key={item.id} >
                    <CatalogProguct item={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <p className={style.empty}>К сожалению,товаров в данной категории нет</p>
            )}

          </div>
        </div>
      </Layout>
    </section>
  )
}
