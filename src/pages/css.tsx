import Head from 'next/head';
import { Category } from './../components/Category';
import { CssArticle } from './../components/CssArticle';
import { Footer } from './../components/Footer';
import { Header } from './../components/Header';
import { Hero } from './../components/Hero';
import { Subscribe } from './../components/Subscribe';

export default function CategoryCss() {
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
                <CssArticle />
                <Subscribe />
                <Footer />
            </main>
        </div>
    );
}