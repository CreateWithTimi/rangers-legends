import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultMetadata = {
  title: 'Rangers Legends — The Stories Behind the Shirt',
  description:
    'An evolving storytelling archive celebrating the players, moments and stories that shaped Rangers International F.C.',
};

const routeMetadata = {
  '/': defaultMetadata,
  '/legends': {
    title: 'Legends — Rangers Legends',
    description: 'Browse the living Rangers Legends archive, beginning with Legend 001: Christian Chukwu.',
  },
  '/legends/christian-chukwu': {
    title: 'Christian Chukwu — Rangers Legends',
    description: 'Explore the Christian Chukwu collection across story, film, graphics, apparel and cards.',
  },
  '/legends/christian-chukwu/story': {
    title: 'Christian Chukwu: The Story — Rangers Legends',
    description: 'Read the Rangers Legends visual story of Christian Chukwu.',
  },
  '/legends/christian-chukwu/film': {
    title: 'Christian Chukwu: The Film — Rangers Legends',
    description: 'Explore the upcoming Rangers Legends film experience for Christian Chukwu.',
  },
  '/legends/christian-chukwu/graphics': {
    title: 'Christian Chukwu: Graphics — Rangers Legends',
    description: 'Explore visual artwork from the Christian Chukwu collection.',
  },
  '/legends/christian-chukwu/apparel': {
    title: 'Christian Chukwu: Apparel — Rangers Legends',
    description: 'Explore heritage streetwear concepts from Collection 001.',
  },
  '/legends/christian-chukwu/cards': {
    title: 'Christian Chukwu: Cards — Rangers Legends',
    description: 'Explore the five-card Christian Chukwu collector archive.',
  },
};

const notFoundMetadata = {
  title: 'Page Not Found — Rangers Legends',
  description: 'This route is not part of the current Rangers Legends archive.',
};

function setMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    const [attributeName, attributeValue] = selector.match(/\[(name|property)="(.+)"\]/).slice(1);
    element.setAttribute(attributeName, attributeValue);
    document.head.append(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });
}

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[pathname] ?? notFoundMetadata;
    const isNotFound = !routeMetadata[pathname];

    document.title = metadata.title;

    setMeta('meta[name="description"]', { content: metadata.description });
    setMeta('meta[name="robots"]', { content: isNotFound ? 'noindex, follow' : 'index, follow' });
    setMeta('meta[property="og:title"]', { content: metadata.title });
    setMeta('meta[property="og:description"]', { content: metadata.description });
    setMeta('meta[name="twitter:title"]', { content: metadata.title });
    setMeta('meta[name="twitter:description"]', { content: metadata.description });
  }, [pathname]);

  return null;
}

export default RouteMetadata;
