import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getArticles } from "@/lib/articles";
import Image from "next/image";

export const dynamic = "force-static";

export const revalidate = false;

export default async function Home() {

  const articles = await getArticles();


  return (
    <>

      <Header />


      <main>

        <section className="hero">


          <Image
            src="/blog-cover.png"
            alt="Next.js Blog"
            width={895}
            height={597}
            className="hero-image"
            priority
          />


          <h2>
            Aprenda Next.js 15 na prática
          </h2>


          <p>
            Explore artigos sobre App Router,
            Server Components, SEO, SSG, SSR,
            Data Fetching e as principais tecnologias
            utilizadas no desenvolvimento moderno.
          </p>


        </section>



        <section className="grid">


          {articles.length > 0 ? (

            articles.map((article) => (

              <ArticleCard
                key={article.id}
                article={article}
              />

            ))

          ) : (

            <p>
              Nenhum artigo encontrado.
            </p>

          )}


        </section>


      </main>


      <Footer />

    </>
  );
}