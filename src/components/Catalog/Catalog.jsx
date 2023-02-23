import React from 'react';
import { Layout } from '../Layout/Layout';
import { Order } from '../Order/Order';
import style from './Catalog.module.css';
import { CatalogProguct } from './CatalogProduct/CatalogProguct';

const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export const Catalog = () => {
  return (
    <section className={style.catalog}>
      <Layout className={style.container}>
        <Order />

        <div className={style.wrapper}>
          <h2 className={style.title}>Бургеры</h2>
          <div className={style.wrap_list}>
            <ul className={style.list}>
              {goodsList.map(item => (
                <li className={style.item}>
                  <CatalogProguct title={item.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    </section>
  )
}
