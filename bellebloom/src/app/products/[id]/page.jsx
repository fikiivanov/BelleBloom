import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";
import ProductCard from "@/app/components/ProductCard/ProductCard";

export async function generateStaticParams() {
    const posts = await fetch(
        "https://makeup-api.herokuapp.com/api/v1/products.json"
    ).then((res) => res.json());

    return posts.map((post) => {
        return { id: `${post.id}` };
    });
}

const page = ({ searchParams }) => {

    return (
        <div>
            <Header caller={"header"} />

            <ProductCard product={searchParams}/>

            {/* Trending Products use searchParams to get and show realated products */}

            <Footer />
        </div>
    );
};
export default page;
export const dynamic = 'force-static'
