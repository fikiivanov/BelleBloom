import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { blogCardsText } from '../../../public/blogsInfo/blogsInfo'
import BlogCards from '../components/BlogCards/BlogCards'



const page = () => {
  return (
    <div>
        <Header/>

       {blogCardsText.map((e)=>(<BlogCards key={e.blogTitle} props={e} />))}

        <Footer/>
    </div>
  )
}

export default page