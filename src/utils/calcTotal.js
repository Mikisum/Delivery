export const calcTotalCount = orderGoods => orderGoods.reduce(
  (acc, item) => acc + item.count,
  0,
)
export const calcTotalPrice = orderGoods => orderGoods.reduce(
  (acc, item) => acc + item.count * item.price,
  0,
)

// export const calcTotal = orderGoods => orderGoods.reduce(
//   ([totalCount, totalPrice], item) => {
//     const sumCount = totalCount + item.count
//     const sumPrice = totalPrice + item.count * item.price
//     return [sumCount, sumPrice]
//   },
//   [0, 0]
// )