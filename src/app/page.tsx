'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Input, 
  Button, 
  Code
} from '@heroui/react';
import { 
  Search,
  Copy, 
  Check,
  Github,
  Youtube,
  MapPin,
  Brain,
  Globe,
  X,
  Image,
} from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { SparklesCore } from '@/components/ui/sparkles';
import SplitText from '@/components/ui/split-text';
import { BANGS } from '@/lib/bangs';

function CopyButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  return (
    <Button
      isIconOnly
      variant="flat"
      color={copied ? "success" : "primary"}
      onPress={handleCopy}
      size="sm"
    >
      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    </Button>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bang: string;
}

const GridItem = ({ area, icon, title, description, bang }: GridItemProps) => {
  return (
    <li className={`list-none min-h-[14rem] ${area}`}>
      <div className="relative p-2 h-full rounded-2xl border border-gray-800 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="flex overflow-hidden relative flex-col gap-6 justify-between p-6 h-full rounded-xl border border-gray-700 backdrop-blur-sm bg-gray-900/50">
          <div className="flex relative flex-col flex-1 gap-3 justify-between">
            <div className="space-y-2">
              <div className="p-2 bg-gray-800 rounded-lg border border-gray-600 w-fit">
                {icon}
              </div>
              <Code className="px-2 py-1 mt-2 text-sm font-semibold text-gray-200 bg-gray-700 rounded-lg w-fit">
                !{bang}
              </Code>
            </div>
            <div className="space-y-3">
              <h3 className="font-sans text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="font-sans text-sm text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

function HomePage() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [locale, setLocale] = useState<'fr' | 'en'>('fr');
  const { setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(`${window.location.origin}/search?q=%s`);
      const userLang = navigator.language || (navigator.languages && navigator.languages[0]) || 'fr';
      if (!userLang.toLowerCase().startsWith('fr')) {
        setLocale('en');
      }
    }
    setTheme('dark');
  }, [setTheme]);

  const t = {
    tagline: locale === 'fr'
      ? 'Recherche rapide avec des raccourcis ! Ajoutez cette URL comme moteur de recherche personnalisé dans votre navigateur.'
      : 'Quick search with shortcuts! Add this URL as a custom search engine in your browser.',
    configTitle: locale === 'fr' ? 'Configuration du navigateur' : 'Browser setup',
    bangsTitle: locale === 'fr' ? 'Bangs disponibles' : 'Available bangs',
    examplesTitle: locale === 'fr' ? "Exemples d'utilisation" : 'Usage examples',
  } as const;

  // English translations for bang descriptions (same order as BANGS array)
  const descEn: Record<number, string> = {
    0: 'Universal search on Google',
    1: 'Video search on YouTube',
    2: 'Wikipedia articles',
    3: 'Code and projects on GitHub',
    4: 'Direct access to GitHub repos',
    5: 'Location and navigation',
    6: 'Private and secure search',
    7: 'Social media search',
    8: 'Discussions and communities',
    9: "OpenAI's AI assistant",
    10: 'Image search',
  };

  const getDesc = (index: number) => (locale === 'fr' ? BANGS[index].description : descEn[index]);

  const examples = locale === 'fr'
    ? [
        { code: '(Default) recherche google', desc: 'Recherche Google' },
        { code: '!y musique', desc: 'Recherche YouTube' },
        { code: '!gh', desc: 'Va sur GitHub.com' },
        { code: '!ghr user/repo', desc: 'Va sur un repo GitHub spécifique' },
        { code: '!m restaurant paris', desc: 'Recherche Google Maps' },
      ]
    : [
        { code: '(Default) google search', desc: 'Google Search' },
        { code: '!y music', desc: 'YouTube Search' },
        { code: '!gh', desc: 'Go to GitHub.com' },
        { code: '!ghr user/repo', desc: 'Go to a specific GitHub repo' },
        { code: '!m restaurant paris', desc: 'Google Maps search' },
      ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="py-8 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex relative gap-3 justify-center items-center mt-6 mb-4">
            {/* Sparkles effect behind the title */}
            <div className="absolute inset-0 w-full h-20">
              <SparklesCore
                id="tsparticles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FACC15"
                speed={2}
              />
            </div>
                         <svg className="relative z-10 w-12 h-12" viewBox="0 0 130 248" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bang icon">
               <defs>
                 <linearGradient id="bangGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#FACC15" />
                   <stop offset="100%" stopColor="#F97316" />
                 </linearGradient>
               </defs>
               <path d="M63 180.5L104.5 139L32.5 97.4308C60.6178 69.313 104.5 25.4308 104.5 25.4308" stroke="url(#bangGradient)" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round"/>
               <circle cx="25" cy="223" r="25" fill="url(#bangGradient)"/>
             </svg>
            <SplitText
              text="Bangs!"
              className="text-5xl font-bold text-white"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            {t.tagline}
          </p>
        </div>

        {/* URL Configuration */}
        <div className="mx-auto mb-12 max-w-2xl">
          <h2 className="mb-4 text-xl font-semibold text-center text-white">{t.configTitle}</h2>
          <div className="relative p-2 rounded-2xl border border-gray-800 md:rounded-3xl md:p-3">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="flex relative gap-3 items-center p-6 w-full rounded-xl border border-gray-700 backdrop-blur-sm bg-gray-900/50">
              <Globe className="flex-shrink-0 w-5 h-5 text-gray-400" />
              <Input
                value={currentUrl}
                readOnly
                variant="flat"
                classNames={{
                  input: "font-medium text-sm mt-3.5 mb-1 text-white",
                  inputWrapper: "bg-gray-800 border-gray-700 rounded-lg h-12"
                }}
                className="flex-1"
              />
              <CopyButton url={currentUrl} />
            </div>
          </div>
        </div>

        {/* Bangs Grid avec effet de lueur */}
        <div className="mx-auto mb-12 max-w-2xl">
          <h2 className="mb-8 text-3xl font-semibold text-center text-white">{t.bangsTitle}</h2>
          <ul className="grid grid-cols-2 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-4lg:gap-6">
            <GridItem
              area="md:[grid-area:1/1/2/7]"
              icon={<Image className="w-5 h-5 text-blue-500" />}
              title={BANGS[10].s}
              description={getDesc(10)}
              bang={BANGS[10].t}
            />
            <GridItem
              area="md:[grid-area:1/7/2/13]"
              icon={<Youtube className="w-5 h-5 text-red-500" />}
              title={BANGS[1].s}
              description={getDesc(1)}
              bang={BANGS[1].t}
            />
            <GridItem
              area="md:[grid-area:2/1/3/5]"
              icon={<Globe className="w-5 h-5 text-yellow-500" />}
              title={BANGS[2].s}
              description={getDesc(2)}
              bang={BANGS[2].t}
            />
            <GridItem
              area="md:[grid-area:2/5/3/9]"
              icon={<Github className="w-5 h-5 text-white" />}
              title={BANGS[3].s}
              description={getDesc(3)}
              bang={BANGS[3].t}
            />
            <GridItem
              area="md:[grid-area:2/9/3/13]"
              icon={<X className="w-5 h-5 text-white" />}
              title={BANGS[7].s}
              description={getDesc(7)}
              bang={BANGS[7].t}
            />
            <GridItem
              area="md:[grid-area:3/1/4/7]"
              icon={<MapPin className="w-5 h-5 text-green-500" />}
              title={BANGS[5].s}
              description={getDesc(5)}
              bang={BANGS[5].t}
            />
            <GridItem
              area="md:[grid-area:3/7/4/13]"
              icon={<Brain className="w-5 h-5 text-purple-500" />}
              title={BANGS[9].s}
              description={getDesc(9)}
              bang={BANGS[9].t}
            />
            <GridItem
              area="md:[grid-area:4/1/5/13]"
              icon={<Search className="w-5 h-5 text-orange-500" />}
              title={BANGS[6].s}
              description={getDesc(6)}
              bang={BANGS[6].t}
            />
          </ul>
        </div>

        {/* Examples */}
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-center text-white">{t.examplesTitle}</h2>
          <div className="relative p-2 rounded-2xl border border-gray-800 md:rounded-3xl md:p-3">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative p-6 rounded-xl border border-gray-700 backdrop-blur-sm bg-gray-900/50">
              <div className="space-y-4">
                {examples.map((example, index) => (
                  <div key={index} className="flex justify-between items-center p-4 rounded-lg border border-gray-600 bg-gray-800/50">
                    <Code className="px-3 py-1 text-sm text-gray-200 bg-gray-700 rounded-lg">
                      {example.code}
                    </Code>
                    <span className="ml-4 text-gray-400">→ {example.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="flex gap-2 justify-center items-center mt-8 mt-10 mb-10 text-sm text-center text-gray-400" onClick={() => window.open("https://github.com/gayakaci20", "_blank")} >
        <Github 
          className="text-gray-400 cursor-pointer hover:text-gray-300" 
        />
        <span className="text-gray-400 hover:text-gray-300">Open Source Project by Gaya KACI</span>
      </footer>
    </div>
  );
}

export default HomePage;
