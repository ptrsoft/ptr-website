import React from 'react'

const FormInput = (prop) => {
    return (
        <div className='flex px-[46px] py-[1rem] bg-[#F6F6F6] gap-[1rem] border border-[#D5D5D5] rounded-full'>
            <img src={prop.icon} alt="" />
            <input required placeholder={prop.placeHolder} type={prop.type} className='outline-none w-full bg-transparent text-neutral-500 text-lg font-medium font-[Poppins] ' />
            <img className='cursor-pointer' src={prop.passwordIcon} alt="" />
        </div>
    )
}

export default FormInput
