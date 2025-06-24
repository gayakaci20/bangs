import { Search, Youtube, Globe, Github, Brain, MapPin, MessageCircle, X, Image } from 'lucide-react';

// Structure inspirée d'unduck avec plus de bangs et une meilleure organisation
export const BANGS = [
  {
    t: 'g',
    u: 'https://www.google.com/search?q={{{s}}}',
    d: 'www.google.com',
    s: 'Google',
    icon: Search,
    color: 'primary',
    description: 'Recherche universelle sur Google',
  },
  {
    t: 'y',
    u: 'https://www.youtube.com/results?search_query={{{s}}}',
    d: 'www.youtube.com',
    s: 'YouTube',
    icon: Youtube,
    color: 'danger',
    description: 'Recherche de vidéos sur YouTube',
  },
  {
    t: 'w',
    u: 'https://wikipedia.org/search?q={{{s}}}',
    d: 'wikipedia.org',
    s: 'Wikipedia',
    icon: Globe,
    color: 'secondary',
    description: 'Articles Wikipédia',
  },
  {
    t: 'gh',
    u: 'https://github.com/search?q={{{s}}}',
    d: 'github.com',
    s: 'GitHub',
    icon: Github,
    color: 'default',
    description: 'Code et projets sur GitHub',
  },
  {
    t: 'ghr',
    u: 'https://github.com/{{{s}}}',
    d: 'github.com',
    s: 'GitHub Repository',
    icon: Github,
    color: 'default',
    description: 'Accès direct aux repos GitHub',
  },
  {
    t: 'm',
    u: 'https://www.google.com/maps/search/?api=1&query={{{s}}}',
    d: 'maps.google.com',
    s: 'Maps',
    icon: MapPin,
    color: 'success',
    description: 'Localisation et navigation',
  },
  {
    t: 'd',
    u: 'https://duckduckgo.com/?q={{{s}}}',
    d: 'duckduckgo.com',
    s: 'DuckDuckGo',
    icon: Search,
    color: 'secondary',
    description: 'Recherche privée et sécurisée',
  },
  {
    t: 'x',
    u: 'https://x.com/search?q={{{s}}}',
    d: 'x.com',
    s: 'X',
    icon: X,
    color: 'primary',
    description: 'Recherche sur les réseaux sociaux',
  },
  {
    t: 'r',
    u: 'https://www.reddit.com/search/?q={{{s}}}',
    d: 'reddit.com',
    s: 'Reddit',
    icon: MessageCircle,
    color: 'danger',
    description: 'Discussions et communautés',
  },
  {
    t: 'c',
    u: 'https://chatgpt.com/?q={{{s}}}',
    d: 'chatgpt.com',
    s: 'ChatGPT',
    icon: Brain,
    color: 'warning',
    description: 'Assistant IA de OpenAI',
  },
  {
    t: 'i',
    u: 'http://google.com/search?tbm=isch&q={{{s}}}&tbs=imgo:1',
    d: 'google.com',
    s: 'Google Images',
    icon: Image,
    color: 'secondary',
    description: 'Recherche d\'images',
  }
] as const;

// Bang par défaut (Google) si aucun bang n'est détecté
const DEFAULT_BANG = BANGS.find((b) => b.t === 'g')!;

export function getBangRedirectUrl(query: string): string {
  if (!query.trim()) {
    return 'https://www.google.com';
  }

  // Détection du bang avec regex inspirée d'unduck
  const match = query.match(/!(\S+)/i);
  const bangCandidate = match?.[1]?.toLowerCase();

  // Trouve le bang correspondant ou utilise celui par défaut
  const selectedBang = BANGS.find((b) => b.t === bangCandidate) || DEFAULT_BANG;

  // Retire le bang de la query
  const cleanQuery = query.replace(/!\S+\s*/i, '').trim();

  // Si la query est juste un bang (ex: "!gh"), redirige vers le domaine principal
  if (cleanQuery === '' && bangCandidate) {
    return `https://${selectedBang.d}`;
  }

  // Si pas de terme de recherche, utilise Google par défaut
  if (cleanQuery === '') {
    return 'https://www.google.com';
  }

  // Remplace {{{s}}} par le terme de recherche encodé et garde les slash pour !ghr user/repo
  const encodedQuery = encodeURIComponent(cleanQuery).replace(/%2F/g, '/');
  return selectedBang.u.replace('{{{s}}}', encodedQuery);
} 