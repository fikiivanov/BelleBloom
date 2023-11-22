
export async function generateStaticParams() {
    const posts = await fetch(
      "https://makeup-api.herokuapp.com/api/v1/products.json"
    ).then((res) => res.json());
  
    return posts.map((post) => {
      return { id: `${post.id}` };
    });
}


const page = ({ params }) => {
  return <div>{params.id} </div>;
};
export default page;
