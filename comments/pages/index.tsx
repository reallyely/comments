import Head from 'next/head'
import { Posts, CreatePost } from "@/post/view"
interface PostEntity {
  content: string
}
interface HomeProps {
  posts?: Array<PostEntity>
}
export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Totally Awesome Message Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CreatePost></CreatePost>
        <Posts posts={props.posts}>
        </Posts>
      </main>

      <footer>
        <a
          href="https://www.github.com/reallyely"
          target="_blank"
          rel="noopener noreferrer"
        >
          Stephen Ely
        </a>
      </footer>
    </div>
  )
}

Home.getInitialProps = async () => {
  return { posts: [{ content: "Hello from getInitial" }] }
}