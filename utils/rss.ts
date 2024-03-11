import { Feed } from 'feed';
import fs from 'fs';

import { SITE_URL } from './constants';
import { Post } from './types';

export const generateRssFeed = async (posts: Post[]) => {
  const feedOptions = {
    title: 'Chen Yang',
    description: 'A blog about web development and fronend developer.',
    id: SITE_URL,
    link: SITE_URL,
    image: `${SITE_URL}/favicon.png`,
    favicon: `${SITE_URL}/favicon.png`,
    feed_url: `${SITE_URL}/rss.xml`,
    copyright: `All rights reserved ${new Date().getFullYear()} Chen Yang`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${SITE_URL}/rss.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  posts.map((post: Post) => {
    feed.addItem({
      title: post.data.title,
      description: post.data.description,
      id: `${SITE_URL}/blog/${post.slug}`,
      link: `${SITE_URL}/blog/${post.slug}`,
      date: new Date(post.data.createdAt),
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.rss2());
};
