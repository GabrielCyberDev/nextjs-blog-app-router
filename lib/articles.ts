import articles from "@/data/artigos.json";

// JSON imports are typed as `any`/`{}`; assert the correct shape for TypeScript
const articlesData = articles as Article[];

export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  description: string;
  content: string;
}

export async function getArticles(): Promise<Article[]> {
  return articlesData;
}

export async function getArticleBySlug(
  slug: string
): Promise<Article | undefined> {
  return articlesData.find((article) => article.slug === slug);
}

export async function getCategories(): Promise<string[]> {
  const categories = articlesData.map((article) => article.category);

  return [...new Set(categories)];
}