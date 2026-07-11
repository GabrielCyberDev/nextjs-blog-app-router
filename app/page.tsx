import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/articles";

export const dynamic = "force-static";
export const revalidate = false;

export default async function Home() {
  const articles = await getArticles();

  return (
    <>
      <header>
        <div className="header-container">

          <div className="logo">
            <h1>Next.js Blog</h1>
            <p>Aprendizados sobre Next.js moderno</p>
          </div>

          <nav>
            <Link href="/">
              Home
            </Link>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </nav>

        </div>
      </header>


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
            Explore artigos sobre App Router, Server Components,
            SEO, SSG, SSR, Data Fetching e as principais
            tecnologias utilizadas no desenvolvimento moderno.
          </p>

        </section>



        <section className="grid">

          {articles.map((article) => (

            <article
              className="card"
              key={article.id}
            >

              <span className="category">
                {article.category}
              </span>


              <h3>
                {article.title}
              </h3>


              <p>
                {article.description}
              </p>


              <div className="meta">

                <p>
                  <strong>
                    Autor:
                  </strong>{" "}
                  {article.author}
                </p>


                <p>
                  <strong>
                    Publicado:
                  </strong>{" "}
                  {new Date(article.date)
                    .toLocaleDateString("pt-BR")}
                </p>

              </div>


              <Link
                href={`/artigos/${article.slug}`}
                className="button"
              >
                Ler artigo →
              </Link>


            </article>

          ))}

        </section>

      </main>



      <footer>

        <div className="footer-container">

          <h3>
            Next.js Blog
          </h3>


          <p>
            Desenvolvido com Next.js 15,
            React, TypeScript, App Router
            e Server Components.
          </p>


        </div>

      </footer>

    </>
  );
}