import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

export async function generateStaticParams() {
  const posts = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  ).then((res) => res.json());

  return posts.map((post) => {
    return { id: `${post.id}` };
  });
}

const page = ({ params }) => {
  console.log(params);
  return (
    <div>
      <Header caller={"header"} />
      {params.id}

      <Footer />
    </div>
  );
};
export default page;
