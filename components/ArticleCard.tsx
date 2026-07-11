import Link from "next/link";
import Badge from "./Badge";

interface ArticleCardProps {
  article: {
    id: number;
    slug: string;
    title: string;
    category: string;
    author: string;
    date: string;
    description: string;
  };
}


export default function ArticleCard({
  article,
}: ArticleCardProps) {

  return (
    <article className="card">

      <Badge>
        {article.category}
      </Badge>


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
  );
}