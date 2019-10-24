import React from 'react';
import { useLDflexValue } from '@solid/react';

/** Displays an anchor with proper email reference. */
export default function Email({ src, defaultSrc, children = null, ...props }) {
  src = useLDflexValue(src) || defaultSrc;
  let href = `${src}`.startsWith('mailto:') ? src : `mailto:${src}`;
  return src ? <a href={`${href}`}>{`${src}`}</a> : children;
}