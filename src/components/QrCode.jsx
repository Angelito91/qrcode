import Qr from 'react-qr-code'
import { Clean } from './Clean'

export function QrCode ({ value, handleClean }) {
  return (
    <div className='flex flex-col items-center w-[400px] h-[300px] gap-6'>
      {value.trim().length > 0 ? (
        <>
          <Qr value={value} className='animate-fade-in w-full h-full' />
          <button className='hover:bg-slate-600/40 border-slate-700/40 p-2 border rounded-full' onClick={handleClean}>
            <Clean />
          </button>
        </>
      ) : (
        <h3 className='text-slate-400 animate-pulse'>Write something</h3>
      )}
    </div>
  )
}
