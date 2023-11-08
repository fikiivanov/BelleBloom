import React from 'react'
import Footer from '../components/Footer/Footer'
import style from "./style.scss"
import Header from '../components/Header/Header'

const page = () => {
  return (
    <section className="section-about-us">
      <Header caller={"another"} />
        <div className="shell">
            <div className="section__inner">
                <h1>About Us</h1>

                <p>In the main page you can read about us. But here you can read more about project. And what we want do on this site. All women want look beautiful but they can afraid.  Firstly they can afraid because they don't know how start. Secondly they don't know how right apply makeup that's why we want publish different video about makeup. I think it's useful information. And finally you can find information about different brands. And now I can tell about myself. My name Julia. I have eiughteen years old. Yes I know now you think how this young girl can talk to us about problem skin. When she has got clean skin and young skin. But I have got problem skin. I have got acne, acne scars and acne on body. I want so that this site been for you good informant about cosmetics. Here you can read only comments different people  about cosmetics or composition and information about different brands product.   But you need remember that all people have different skin. What suits some does not suit others. When you buy new cosmetics you need always tested on your arm before applying on face. It's very important because you can prevent  allergy on product components.  Always remember about that all women can have got clean and beautiful skin but if you want it.  </p>

                <p>We love you!</p>
            </div>
        </div>

        <Footer/>
    </section>
  )
}

export default page