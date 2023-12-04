import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
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

const fetchProduct = async (productData) => {

    try {
        const response = await axios.get(
            `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${productData[1]}&product_type=${productData[2]}`
        );
        return (
            response.data.find(obj => obj.id == productData[0])
        );

    } catch (error) {
        console.error("Error fetching data:", error); 
    }
};
export default async function Page({ params }) {

    const product = await fetchProduct(params.slug)
    return (
        <div>
            <Header caller={"header"} />

        
            {/* Trending Products use searchParams to get and show realated products */}
            <ProductCard product={product} />
            <Footer />
        </div>
    );
};

