import Head from 'next/head';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Category } from '../components/Category';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Subscribe } from '../components/Subscribe';
import { Title } from '../components/Title';
import { Card, CardContainer, ContainerArticles } from '../styles/global';

export default function Home({ posts }) {

  return (
    <div>
      <Head>
        <title>BMS.Blog | Técnologia em um click!</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <Header />
        <Hero />
        <Category />
        <ContainerArticles>
          <Title title="Featured Article" path="/" category="See All Category" icon={<RiArrowRightSLine />} />
          <section>
            <CardContainer>
              {posts.nodes.slice(0, 8).map((post) => {
                return (
                  <Link href={`/posts/${post.slug}`}>
                    <a>
                      <Card key={post.id}>
                        <div>
                          <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
                          <h2>{post.title}</h2>
                        </div>
                        <section>
                          <img src={post.author.node.avatar.url} alt="avatar" />
                          <span>
                            <h3>{post.author.node.name}</h3>
                            <p>{post.date}</p>
                          </span>
                        </section>
                      </Card>
                    </a>
                  </Link>
                )
              })}
            </CardContainer>
          </section>
        </ContainerArticles>
        <Subscribe />
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {

  const res = await fetch(process.env.GRAPHQL_ACCESS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query NewQuery {
            posts {
              nodes {
                id
                slug
                title
                date
                author {
                  node {
                    name
                    avatar {
                      url
                    }
                  }
                }
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
          `,
    })
  })

  const json = await res.json()

  return {
    props: {
      posts: json.data.posts,
    },
  }

}