import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const articles = await getCollection('articles', ({ data }) => data.status === 'live');
  const sorted = articles.sort((a, b) =>
    new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime()
  );

  return rss({
    title: 'Chain Brief',
    description: 'Crypto made clear — from first principles to the latest signals.',
    site: context.site ?? 'https://chainbrief.com',
    items: sorted.map(article => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: new Date(article.data.publishedDate),
      link: `/articles/${article.slug}/`,
    })),
  });
}
