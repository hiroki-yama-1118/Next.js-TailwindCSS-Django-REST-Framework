import Layout from "../components/Layout";

const Blog = () => {
  return <Layout title="Blog">Blog Page</Layout>;
};
export default Blog;

export async function getStaticProps() {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
}
