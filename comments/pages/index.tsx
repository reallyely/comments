import Head from 'next/head'
import { Posts, CreatePost } from "@/post/view"
import { PostEntity } from "@/post/mapping/PostEntity"
import { useState } from 'react';
import { AuthorEntity } from '@/post/mapping/AuthorEntity';
import { PortraitEntity } from '@/post/mapping/PortraitEntity';
import { CommentEntity } from '@/post/mapping/CommentEntity';

type PostJSON = string
interface HomeProps {
  currentUser: string
  posts: Array<PostJSON>
}
export default function Home(props: HomeProps) {
  const initialPosts = props.posts.map(PostEntity.createFromJSON)
  const [posts, updatePosts] = useState(initialPosts || [{}])
  const currentUser = AuthorEntity.createFromJSON(props.currentUser)
  const handleCreatePost = (content: string) => {
    const newPost = PostEntity.fromForm({ content, author: currentUser })
    updatePosts([...posts, newPost])
  }
  return (
    <div>
      <Head>
        <title>Totally Awesome Message Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CreatePost handleCreatePost={handleCreatePost} />
        <Posts posts={posts} />
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

export const getServerSideProps = async () => {
  const author = AuthorEntity.create({ name: "Cool user", portrait: PortraitEntity.create({ src: "https://avatars.githubusercontent.com/u/1640588?v=4" }) })
  const initialPost = PostEntity.create({ content: "Hello World!", author, comments: [CommentEntity.createEmpty()] })
  return {
    props: {
      posts: [JSON.stringify(initialPost)],
      currentUser: JSON.stringify(author)
    }
  }
}