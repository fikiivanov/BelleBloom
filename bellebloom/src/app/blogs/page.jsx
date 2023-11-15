import React from 'react'
import Blogs from '../components/BlogCards/BlogCards'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { blogCardsText } from '../../../public/blogsInfo/blogCardsText'


const page = () => {
  return (
    <div>
        <Header/>

       {blogCardsText.map((e)=>(<Blogs props={e} />))}

        <Footer/>
    </div>
  )
}

export default page