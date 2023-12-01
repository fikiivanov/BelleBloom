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
            
            <div>{searchParams.id}</div>

            <ProductCard product={searchParams}></ProductCard>

            {/* Trending Products */}

            <Footer />
        </div>
    );
};
export default page;
