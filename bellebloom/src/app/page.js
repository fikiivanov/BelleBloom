import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ImageText from "./components/ImageText/ImageText";
import Products from "./components/Products/Products";


export default function Home() {
  return (
	<div className="wrapper">
		<Header/>

		<div className="main">
			<Hero/>

			<ImageText/>

			<Products/>

			<Blogs/>
		</div>
	</div>
  
  )
}
