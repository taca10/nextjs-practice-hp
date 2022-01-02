// import Layout from "../components/Layout";
// import Post from "../components/Post";
// import { getAllPostsData } from "../lib/posts";

// const Blog = ({ posts }) => {
//   return (
//     <Layout title="Blog">
//       Blog page
//       <ul className="m-10">
//         {posts && posts.map((post) => <Post key={post.id} post={post} />)}
//         {/* {posts && posts.map((post) => <Post key={post.id} post={post}> /> )} */}
//       </ul>
//     </Layout>
//   );
// };

// export default Blog;

// export async function getStaticProps() {
//   // build時にサーバーサイドで実行される。
//   const posts = await getAllPostsData();
//   return {
//     props: { posts },
//   };
// }
