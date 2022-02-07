import React from 'react';
import Fuse from 'fuse.js';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
function resolveAttribute(obj: any, key: string): string {
  return key
    .split('.')
    .reduce((prev, curr) => prev?.[curr], obj) as string;
}

// Recursively builds JSX output adding `<mark>` tags around matches
function highlight(value: string, indices: readonly Fuse.RangeTuple[] | undefined = [], i: number | undefined = 1): JSX.Element {
  const pair = indices[indices.length - i];
  return !pair ? <>{value}</> : (
    <>
      {highlight(value.substring(0, pair[0]), indices, i+1)}
      <mark>{value.substring(pair[0], pair[1]+1)}</mark>
      {value.substring(pair[1]+1)}
    </>
  );
}

interface FuseHighlightProps<T> {
  hit: Fuse.FuseResult<T>;
  attribute: string;
}

// FuseHighlight component
export function FuseHighlight<T>({ hit, attribute }: FuseHighlightProps<T>): JSX.Element {
const matches = typeof hit.item === 'string'
  ? hit.matches?.[0]
  : hit.matches?.find(m => m.key === attribute);
const fallback = typeof hit.item === 'string'
  ? hit.item
  : resolveAttribute(hit.item, attribute);
  return highlight(matches?.value || fallback, matches?.indices);
}

