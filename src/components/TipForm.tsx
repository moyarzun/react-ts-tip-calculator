import { Dispatch, SetStateAction } from 'react'

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipFormProps = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}

export default function TipForm({setTip, tip}: TipFormProps) {
  return (
    <div>
      <h3 className='font-black text-2xl'>Propina:</h3>
      <form className='space-y-3'>
        {tipOptions.map(tipOption => (
          <div key={tipOption.id} className='flex gap-2'>
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input 
              type='radio' 
              id={tipOption.id} 
              name='tip' 
              value={tipOption.value}
              onChange={ e => setTip(+e.target.value)} // El signo + convierte el valor de String a Number. Se puede usar .valueAsNumber pero no funciona con Radio Buttons
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
