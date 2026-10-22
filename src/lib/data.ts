import { getCollection, type CollectionEntry } from 'astro:content';
import { partners, partnerById, type Partner } from '../data/partners';
import { supervisors, supervisorById, type Supervisor } from '../data/supervisors';

export type DC = CollectionEntry<'dcs'>;
export type NewsPost = CollectionEntry<'news'>;

export async function getDcs(): Promise<DC[]> {
  const all = await getCollection('dcs');
  return all.sort((a, b) => a.data.number - b.data.number);
}

export async function getNews(): Promise<NewsPost[]> {
  const all = await getCollection('news', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function dcSlug(dc: DC): string {
  return dc.id;
}

export function dcPath(dc: DC): string {
  return `/doctoral-candidates/${dc.id}/`;
}

export function newsPath(post: NewsPost): string {
  return `/news/${post.id}/`;
}

/** Supervisors with the DCs they supervise attached, in the order of supervisors.ts. */
export async function getSupervisorsWithDcs(): Promise<(Supervisor & { dcs: DC[] })[]> {
  const dcs = await getDcs();
  return supervisors.map((s) => ({ ...s, dcs: dcs.filter((d) => d.data.supervisors.includes(s.id)) }));
}

/** Partners with the DCs they host (academic) or partner on (industry). */
export async function getPartnersWithDcs(): Promise<(Partner & { hosted: DC[]; partnered: DC[] })[]> {
  const dcs = await getDcs();
  return partners.map((p) => ({
    ...p,
    hosted: dcs.filter((d) => d.data.host.includes(p.id)),
    partnered: dcs.filter((d) => d.data.partners.includes(p.id)),
  }));
}

export function supervisorOrg(s: Supervisor): string {
  return s.partner ? partnerById[s.partner]?.name ?? '' : s.org ?? '';
}

export function dcCountry(dc: DC): string | undefined {
  const host = dc.data.host[0];
  return host ? partnerById[host]?.country : undefined;
}

export { partners, partnerById, supervisors, supervisorById };

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
