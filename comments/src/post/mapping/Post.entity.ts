interface UserEntity {
  name: string
  portrait: PortraitEntity
}
interface PortraitEntity {
  src: string
}

interface CommentEntity {
  content: string
  author: UserEntity
}
interface PostInteractionsEntity {
  hypes: number
  shares: number
  views: number
  replies: number
}
interface PostEntity {
  content: string;
  author: UserEntity
  comments: Array<CommentEntity>
}