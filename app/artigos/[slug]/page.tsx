import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Badge from "@/components/Badge";
import { getArticleBySlug, getArticles } from "@/lib/articles";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";


export const dynamic = "force-static";

export const revalidate = false;


type Props = {
  params: Promise<{
    slug: string;
  }>;
};



export async function generateStaticParams() {

  const articles = await getArticles();


  return articles.map((article) => ({

    slug: article.slug,

  }));

}



export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {


  const { slug } = await params;


  const article = await getArticleBySlug(slug);



  if (!article) {

    return {

      title: "Artigo não encontrado",

    };

  }



  return {

    title: article.title,

    description: article.description,

  };

}



export default async function ArticlePage({
  params,
}: Props) {


  const { slug } = await params;


  const article = await getArticleBySlug(slug);



  if (!article) {

    notFound();

  }



  return (

    <>


      <Header />


      <main>


        <article className="article">


          <Badge>
            {article.category}
          </Badge>



          <h1>
            {article.title}
          </h1>



          <div className="article-info">


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




          <div className="article-content">

            <p>
              {article.content}
            </p>

          </div>




          <Link
            href="/"
            className="back"
          >

            ← Voltar para Home

          </Link>



        </article>


      </main>



      <Footer />


    </>

  );

}