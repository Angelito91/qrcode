export function Form ({ text, setText, handleClick }) {
  return (
    <div className='border-purple-950 rounded-xl flex items-center justify-between gap-3 p-2 border-2 shadow'>
      <input
        className='focus:outline-none focus:outline-slate-800 rounded-xl bg-black/30 w-3/4 p-3 border-0'
        onChange={e => setText(e.target.value)}
        value={text}
        maxLength={50}
        placeholder='Enter on URL'
        type='text'
      />
      <button
        onClick={handleClick}
        className='rounded-xl hover:bg-purple-800 flex items-center p-2 font-bold transition bg-purple-600 border-0'
      >
        QR Code
      </button>
    </div>
  )
}
