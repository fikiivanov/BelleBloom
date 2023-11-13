import React from 'react'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { blogText } from '../../../public/blogText/blogtext'

const page = () => {
  return (
    <div>
        <Header/>

       {blogText.map((e)=>(<Blogs props={e} />))}

        <Footer/>
    </div>
  )
}

export default page