const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path with the configured base path. */
export function url(path = '/'): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Strip the base path from a pathname so it can be compared with route paths. */
export function stripBase(pathname: string): string {
  const p = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  return p === '' ? '/' : p;
}

export function initials(name: string): string {
  return name
    .replace(/^(Prof\.|Dr\.|Dr\.-Ing\.|M\.Sc\.|M\.Eng\.)\s*/g, '')
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export function dcLabel(n: number): string {
  return `DC${String(n).padStart(2, '0')}`;
}

const POST_NOMINAL = /^(M\.Sc\.|M\.Eng\.|MSc\.?)$/;

/** "Prof. Jane Doe" / "Jane Doe, M.Sc." */
export function personName(name: string, title?: string): string {
  if (!title) return name;
  return POST_NOMINAL.test(title) ? `${name}, ${title}` : `${title} ${name}`;
}
