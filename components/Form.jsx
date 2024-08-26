'use client'
import { useState } from 'react'
import Spinner from './Spinner'

const Form = () => {
  const [loading, setLoading] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const isFormValid = () => {
    return (
      name != '' &&
      email != '' &&
      phone != '' &&
      phone.length == 8 &&
      message != ''
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setShowMessage(true)
    }, 1000)
  }
  return (
    <form className="right">
      <input
        type="text"
        className="w-full border border-gray-300 p-3 rounded-lg"
        placeholder="الاسم"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="email"
        className="w-full border border-gray-300 p-3 rounded-lg my-4"
        placeholder="البريد الالكتروني"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        type="number"
        className="w-full border border-gray-300 p-3 rounded-lg"
        placeholder="رقم الهاتف"
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
      />
      <textarea
        className="w-full border border-gray-300 p-3 rounded-lg"
        placeholder="الرسالة"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <div className="flex items-end gap-6">
        <button
          type="submit"
          className="btn bg-green-500 text-white mt-8 disabled:cursor-not-allowed disabled:bg-gray-300"
          onClick={handleSubmit}
          disabled={!isFormValid()}
        >
          {' '}
          ارسال
        </button>
        {loading && <Spinner />}
      </div>
      {showMessage && (
        <div className="text-[#0f766e] mt-4 bg-[#ecf8f7] border-[.25px] border-[#0f766e] p-4 rounded-lg flex items-center gap-5 justify-between">
          <p>شكرًا على تواصلك معنا ، وسنعاود الاتصال بك في أقرب وقت ممكن</p>
          <span
            className="font-bold cursor-pointer hover:text-red-600"
            onClick={() => setShowMessage(false)}
          >
            &#10005;
          </span>
        </div>
      )}
    </form>
  )
}

export default Form
