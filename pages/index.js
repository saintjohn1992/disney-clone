import Image from 'next/image'
import { gql, GraphQLClient } from 'graphql-request'


export const getStaticProps = async () => {
  const url = "https://api-eu-central-1.hygraph.com/v2/cl6kquvos680301tggvka3lcb/master"
  const graphQLClient = new GraphQLClient(url, {
    headers: {
      "Authorization" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjEwOTMwOTYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2w2a3F1dm9zNjgwMzAxdGdndmthM2xjYi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiODU4NjY5MTAtYmRjZC00N2RjLWJlNGEtZWU2NmM0MDRmOGYyIiwianRpIjoiY2w3M2Z4d2tlM2lzbjAxdDhjcjR0ZmoxNiJ9.pcgHSsXm8monfOEBS841PYdK0oteWaSHVBejQ64fEiEhVi0hS8XZrTvkR-QTi8g-J6TC_ezkkOu8wZni1WdHjeQBnITJPmb8kBOsZLBTJ7IvJCb0i20nEaFWPPD11H2B_FRaQjxf0HC6r5BAPfMeeaV8LmHn0n3_kViUDWBP5o4E7BACh1EHTsPENzPS7mtmeYWKJ75mS_29XWhSVPy8sf_SMs5dfiI0yOEV57zGndJ8afpj9DcVeOGVornQvJAEkzqHya0X-pVk5iuRUbxt3FK6wwWiz3y67ikUNWaJnTytSm9SrmCgcT2bJZG-iu5fzYhv64Pb_PPFGxFbovdECYXSXrPJua3YaPk1ZVp_Td2BcIJgpl4jcYfYQEIWxuGrt_BqvRjF4MLwpsjjT-IJsEtUZyExUjZNkUuQa9gxfFeJv0ecXOw8TRm_p0cDyb7l1RCd9wZsnQ5ye03-U8RtguYLru8nXJ2S_a2HuWepzcSmS7r7urgtjmZHO6EBcUTBW4QjXQY7jXe3j_qPcPk0UNqNtOmIBCUTTS6_DxvL26qbbP_OTnsBqXzEDyG1zJuoAURk7IfFxHyv24lLsFuVCgUHPrbsekfVcVqNc7YLs0ozlRA-hRWYp1Zj7sGIPHVqBxIjV8ESCdtfvdvrTtMvcGiWL80p9QNgtBfo2DrzfZY"
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
  console.log(videos)
  return (
    <div>
      Hello
    </div>
  )
}
