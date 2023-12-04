import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import OtherProducts from "@/app/components/OtherProducts/OtherProducts";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import axios from "axios";

export async function generateStaticParams() {
    const posts = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
    ).then((res) => res.json());

    return posts.map((post) => {
        return { slug: [`${post.id}`,`${post.brand}`,`${post.product_type}`] };
    });
}

const fetchProducts = async (productData) => {

    try {
        const response = await axios.get(
            `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${productData[1]}&product_type=${productData[2]}`
        );
        return (
            response.data
        );

    } catch (error) {
        console.error("Error fetching data:", error); 
    }
};

export default async function Page({ params }) {

    const products = await fetchProducts(params.slug)
    return (
        <div>
            <Header caller={"header"} />

        
            <ProductCard product={products.find(obj => obj.id == params.slug[0])} />

            <OtherProducts  products={products}/>
            <Footer />
        </div>
    );
};

