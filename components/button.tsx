import React from 'react'

function Button() {
  return (
    <button id='CTA' className='flex items-center justify-between px-4 mt-8'>
                <span className='__btn-text-1'>Let&apos;s call</span>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <span className='relative'>
                    {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/arrow_up.svg" alt="" className='--arrow-up'/> {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/CTX_line.svg" alt=""/> {/*eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/arrow_down.svg" alt="" className='--arrow-down'/>
                </span>
    </button>
  )
}

export default Button