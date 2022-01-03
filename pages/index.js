import Layout from "../components/Layout";
export default function Home(props) {
  return (
    <Layout title="Home">
      <h1>POSTの一覧</h1>
      {props.posts.map((post) => (
        // eslint-disable-next-line react/jsx-key
        <p>{post.title}</p>
      ))}
      <p className="text-4xl">Welcome to Nextjs</p>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("http://localhost:4000/posts", {
      method: "GET",
    });
    const json = await response.json();

    return {
      props: {
        posts: json,
      },
    };
  } catch (err) {
    console.log("失敗");
    return {
      props: {
        posts: [],
      },
    };
  }
}
