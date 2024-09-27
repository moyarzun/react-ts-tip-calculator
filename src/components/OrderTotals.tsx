import { useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalsProps = {
  order: OrderItem[],
  tip: number
}

export default function OrderTotals({order, tip}: OrderTotalsProps) {
  
  const subTotal = useMemo(() => order.reduce((acc, item) => acc + (item.price * item.quantity), 0), [order])
  const tipAmount = useMemo(() => subTotal * tip, [subTotal, tip]) // Se cambia el calculo de la propina si cambia el subtotal de la orden o la propina indicada
  const orderTotal = useMemo(() => subTotal + tipAmount, [subTotal, tipAmount]) // Se cambia el calculo del total si cambia el subtotal o el calculo de la propina
  // useMemo mantiene el resultado de la función en memoria para no calcularla múltiples veces.
  // Alternativamente, se puede usar useCallback para mantener la función misma en memoria en caso de que el cálculo del valor no sea costoso y no se desee renderizar la función múltiples veces.

  return (
    <>
      <div className='space-y-3'>
        <h2 className='font-black text-2xl'>Totales y propina:</h2>
        <p>Subtotal a pagar: {''}
          <span className='font-bold'>{formatCurrency(subTotal)}</span>
        </p>
        <p>Propina: {''}
          <span className='font-bold'>{ formatCurrency(tipAmount) }</span>
        </p>
        <p>Total a pagar: {''}
          <span className='font-bold'> { formatCurrency(orderTotal) } </span>
        </p>

        <button 
          className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
          disabled={orderTotal === 0} >
          Guardar Orden
        </button>
      </div>
    </>
  )
}
