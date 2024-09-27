import { useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number
}

export default function OrderTotals({order, tip}: OrderTotalsProps) {
  
  const subTotal = useMemo(() => order.reduce((acc, item) => acc + (item.price * item.quantity), 0), [order])
  const tipAmount = useMemo(() => subTotal * tip, [order, tip]) // Se cambia el calculo de la propina si cambia la orden o la propina indicada

  return (
    <>
      <div className='space-y-3'>
        <h2 className='font-black text-2xl'>Totales y propina:</h2>
        <p>Subtotal a pagar: {''}
          <span className='font-bold'>{formatCurrency(subTotal)}</span>
        </p>
        <p>Propina: {''}
          <span className='font-bold'>$0</span>
        </p>
        <p>Total a pagar: {''}
          <span className='font-bold'> { formatCurrency(tipAmount) } </span>
        </p>

        <button></button>
      </div>
    </>
  )
}
