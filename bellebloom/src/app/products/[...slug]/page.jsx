import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import ProductCard from "@/app/components/ProductCard/ProductCard";

export async function generateStaticParams() {
    const posts = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
    ).then((res) => res.json());

    return posts.map((post) => {
        return { id: [`${post.id}`,`${post.brand}`,`${post.product_type}`] };
    });
}


export default async function Page({ params }) {

    return (
        <div>
            <Header caller={"header"} />

        
            {/* Trending Products use searchParams to get and show realated products */}
            <ProductCard productData={ params.slug} />
            <Footer />
        </div>
    );
};

