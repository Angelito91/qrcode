import { useState } from 'react'
import { Form } from './components/Form'
import { QrCode } from './components/QrCode'

function App () {
  const [text, setText] = useState('')
  const [value, setValue] = useState('')

  const handleClick = () => {
    if (text.trim().length === 0) return

    setValue(text)
  }

  const handleClean = () => {
    setValue('')
    setText('')
  }

  return (
    <main className='bg-slate-950 place-content-center grid min-h-screen gap-5 text-white'>
      <h1 className='text-3xl font-bold text-center text-purple-500'>
        QR Generetor
      </h1>
      <Form handleClick={handleClick} text={text} setText={setText} />
      <QrCode value={value} handleClean={handleClean} />
    </main>
  )
}

export default App
