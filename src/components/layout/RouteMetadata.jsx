import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const defaultMetadata = {
  title: 'Rangers Legends — The Stories Behind the Shirt',
  description:
    'An evolving storytelling archive celebrating the players, moments and stories that shaped Rangers International F.C.',
};

const socialImage = {
  path: '/rangers-legends-og.jpg',
  width: '1728',
  height: '910',
  alt: 'Rangers Legends — The Stories Behind the Shirt, Collection 001: Christian Chukwu “Chairman”.',
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

function getSiteUrl() {
  return (import.meta.env.VITE_SITE_URL ?? '').replace(/\/+$/, '');
}

function getRouteUrl(pathname) {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return '';
  }

  return `${siteUrl}${pathname === '/' ? '' : pathname}`;
}

function getAssetUrl(path) {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    return '';
  }

  return `${siteUrl}${path}`;
}

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

function removeElement(selector) {
  document.head.querySelector(selector)?.remove();
}

function setLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
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
    const routeUrl = getRouteUrl(pathname);
    const imageUrl = getAssetUrl(socialImage.path);

    document.title = metadata.title;

    setMeta('meta[name="description"]', { content: metadata.description });
    setMeta('meta[name="robots"]', { content: isNotFound ? 'noindex, follow' : 'index, follow' });
    setMeta('meta[property="og:title"]', { content: metadata.title });
    setMeta('meta[property="og:description"]', { content: metadata.description });
    setMeta('meta[property="og:image:alt"]', { content: socialImage.alt });
    setMeta('meta[name="twitter:title"]', { content: metadata.title });
    setMeta('meta[name="twitter:description"]', { content: metadata.description });
    setMeta('meta[name="twitter:card"]', { content: 'summary_large_image' });
    setMeta('meta[name="twitter:image:alt"]', { content: socialImage.alt });

    if (routeUrl && !isNotFound) {
      setLink('link[rel="canonical"]', { rel: 'canonical', href: routeUrl });
      setMeta('meta[property="og:url"]', { content: routeUrl });
    } else {
      removeElement('link[rel="canonical"]');
      removeElement('meta[property="og:url"]');
    }

    if (imageUrl) {
      setMeta('meta[property="og:image"]', { content: imageUrl });
      setMeta('meta[property="og:image:width"]', { content: socialImage.width });
      setMeta('meta[property="og:image:height"]', { content: socialImage.height });
      setMeta('meta[name="twitter:image"]', { content: imageUrl });
    } else {
      removeElement('meta[property="og:image"]');
      removeElement('meta[property="og:image:width"]');
      removeElement('meta[property="og:image:height"]');
      removeElement('meta[name="twitter:image"]');
    }
  }, [pathname]);

  return null;
}

export default RouteMetadata;
