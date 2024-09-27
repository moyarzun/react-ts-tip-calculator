import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types'

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]) //useState va a ser un arreglo de objetos de tipo OrderItem, y se inicializa como un arreglo vacío.
  const [tip, setTip] = useState(0) // useState se inicializa en cero, lo que implicitamente lo define como Number

  const addItem = (item: MenuItem) => {
    const itemExist = order.find(orderItem => orderItem.id === item.id)

    if(itemExist) {
      const updatedOrder = order.map(orderItem => {
        if(orderItem.id === item.id) {
          return {...orderItem, quantity: orderItem.quantity + 1}
        }
        return orderItem
      })
      setOrder(updatedOrder)
    } else {
      const newItem = {...item, quantity: 1}
      setOrder([...order, newItem])
    }
  }

  const removeItem = (id: MenuItem['id']) => {
    const updatedOrder = order.filter(orderItem => orderItem.id !== id)
    setOrder(updatedOrder)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem
  }
}
