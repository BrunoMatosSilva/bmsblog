import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Subscribe } from "../../components/Subscribe";
import { ContainerPost, PostBody } from "../../styles/stylesPosts";

export default function Post(data) {
    const post = data.post;

    const datatime = (post.date)
    const today = new Date(datatime).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });


    return (
        <div>
            <Head>
                <title>BMS.Blog | Técnologia em um click!</title>
                <meta name="description" content="Generated by create next app" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <main>
                <Header />
                <ContainerPost>
                    <section>
                        <PostBody>
                            <>
                                <span>
                                    <img src={post.featuredImage.node.sourceUrl} alt={post.title} />
                                </span>
                                <div>
                                    <h2>{post.title}</h2>
                                    <section>
                                        <div>
                                            <p>{today}</p>
                                            -
                                            <p>{post.categories.nodes[0].name}</p>
                                        </div>

                                        <div>
                                            <span>
                                                <img src={post.author.node.avatar.url} alt={post.author.node.name} />
                                            </span>
                                            <b>{post.author.node.name}</b>
                                        </div>
                                    </section>
                                </div>
                                <section className="post">
                                    <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
                                </section>
                            </>
                        </PostBody>
                    </section>
                </ContainerPost>
                <Subscribe />
                <Footer />
            </main>
        </div>
    );
}

export async function getStaticProps(context) {

    const res = await fetch('https://bmsblog.000webhostapp.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        date
                        content
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
                        categories {
                            nodes {
                              name
                            }
                        }
                    }
                }
            `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        })
    })

    const json = await res.json()

    return {
        props: {
            post: json.data.post,
        },
    }

}

export async function getStaticPaths() {

    const res = await fetch(process.env.GRAPHQL_ACCESS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        date
                        title
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
                        categories {
                            nodes {
                              name
                            }
                        }
                    }
                }
            }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: false }

}