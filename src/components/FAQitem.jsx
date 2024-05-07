import React, { useEffect, useState } from 'react'

const FAQitem = ({faq, index}) => {
  const [isShow, setisShow] = useState(false)

  useEffect(() => {
   if(index == 0){
     setisShow(true)
   }
  }, [])
  


  const handleClick = ()=>{
    setisShow((isShow)=> !isShow)
  }
  return (
    <div className='faq-box'>
      <div className='que' onClick={handleClick}>
        <button className={isShow ? 'arrow' : ''}>></button>
        <div>{faq.question}</div>
      </div>

     {isShow && <div className='ans'>{faq.answer}</div>}
    </div>
  )
}

export default FAQitem