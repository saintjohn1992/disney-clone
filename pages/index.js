import Image from 'next/image'
import { gql, GraphQLClient } from 'graphql-request'



export const getStaticProps = async () => {
  const url = process.env.ENDPOINT
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization" : process.env.GRAPH_CMS_TOKEN

    }
  })



const query = gql`
query {
  videos {
    createdAt,
    id,
    title,
    description,
    seen,
    slug,
    tags,
    thumbnail {
      url
    },
    mp4 {
      url
    }
  }
}
`
const data = await graphQLClient.request(query)
const videos = data.videos

return {
  props: {
    videos
  }
}
}

export default function Home({videos}) {
  
  const randomVideo = (videos) => {
    return videos[Math.floor(Math.random() * videos.length)]
  }
  return (
  <>
  <div className="app">
    <div className="main-video">
      <img src={randomVideo(videos).thumbnail.url} alt={randomVideo(videos).title}></img>
    </div>
  </div>
  </>
  )
}
