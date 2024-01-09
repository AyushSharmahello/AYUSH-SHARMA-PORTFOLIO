import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg py-8'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center'>Build With <span className='text-primary text-2xl px-1'>&#9825;</span>By &nbsp;
            <Link href="https://www.instagram.com/1ltimecode/" className='underline underline-offset-2' target={"_blank"}>Ayush Sharma</Link>
            </div>
            <Link href="https://www.instagram.com/1ltimecode/" target={"_blank"} className='underline underline-offset-2'>Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer
