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

export default function TipForm() {
  return (
    <div>
      <h3 className='font-black text-2xl'>Propina:</h3>
      <form className='space-y-3'>
        {tipOptions.map(tip => (
          <div key={tip.id} className='flex gap-2'>
            <label htmlFor={tip.id}>{tip.label}</label>
            <input type='radio' id={tip.id} name='tip' value={tip.value}/>
          </div>
        ))}
        <button className='bg-teal-400 text-white font-black py-2 px-4 rounded-lg'>Calcular</button>
      </form>
    </div>
  )
}
