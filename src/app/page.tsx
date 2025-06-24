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
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-800 p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-700">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 bg-gray-800">
              {icon}
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded">
                  !{bang}
                </Code>
                <h3 className="font-sans text-lg font-semibold text-white">
                  {title}
                </h3>
              </div>
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
  const { setTheme } = useTheme();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(`${window.location.origin}/search?q=%s`);
    }
    setTheme('dark');
  }, [setTheme]);

  const examples = [
    { code: "!g recherche google", desc: "Recherche Google" },
    { code: "!y musique", desc: "Recherche YouTube" },
    { code: "!gh", desc: "Va sur GitHub.com" },
    { code: "!ghr user/repo", desc: "Va sur un repo GitHub spécifique" },
    { code: "!m restaurant paris", desc: "Recherche Google Maps" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4">
      <div className="max-w-6xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="relative flex items-center justify-center gap-3 mb-4">
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
                         <svg className="w-12 h-12 relative z-10" viewBox="0 0 130 248" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Bang icon">
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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Recherche rapide avec des raccourcis ! Ajoutez cette URL comme moteur de recherche personnalisé dans votre navigateur.
          </p>
        </div>

        {/* URL Configuration */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-white text-center">Configuration du navigateur</h2>
          <div className="relative rounded-2xl border border-gray-800 p-2 md:rounded-3xl md:p-3">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative flex gap-3 items-center w-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <Input
                value={currentUrl}
                readOnly
                variant="flat"
                classNames={{
                  input: "font-medium text-sm mt-3.5 mb-1",
                  inputWrapper: "bg-gray-800 border-gray-700 rounded-lg h-12"
                }}
                className="flex-1"
              />
              <CopyButton url={currentUrl} />
            </div>
          </div>
        </div>

        {/* Bangs Grid avec effet de lueur */}
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-white text-center">Bangs disponibles</h2>
          <ul className="grid grid-cols-2 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-4lg:gap-6">
            <GridItem
              area="md:[grid-area:1/1/2/7]"
              icon={<Image className="h-5 w-5 text-blue-500" />}
              title={BANGS[10].s}
              description={BANGS[10].description}
              bang={BANGS[10].t}
            />
            <GridItem
              area="md:[grid-area:1/7/2/13]"
              icon={<Youtube className="h-5 w-5 text-red-500" />}
              title={BANGS[1].s}
              description={BANGS[1].description}
              bang={BANGS[1].t}
            />
            <GridItem
              area="md:[grid-area:2/1/3/5]"
              icon={<Globe className="h-5 w-5 text-yellow-500" />}
              title={BANGS[2].s}
              description={BANGS[2].description}
              bang={BANGS[2].t}
            />
            <GridItem
              area="md:[grid-area:2/5/3/9]"
              icon={<Github className="h-5 w-5 text-white" />}
              title={BANGS[3].s}
              description={BANGS[3].description}
              bang={BANGS[3].t}
            />
            <GridItem
              area="md:[grid-area:2/9/3/13]"
              icon={<X className="h-5 w-5 text-white" />}
              title={BANGS[7].s}
              description={BANGS[7].description}
              bang={BANGS[7].t}
            />
            <GridItem
              area="md:[grid-area:3/1/4/7]"
              icon={<MapPin className="h-5 w-5 text-green-500" />}
              title={BANGS[5].s}
              description={BANGS[5].description}
              bang={BANGS[5].t}
            />
            <GridItem
              area="md:[grid-area:3/7/4/13]"
              icon={<Brain className="h-5 w-5 text-purple-500" />}
              title={BANGS[9].s}
              description={BANGS[9].description}
              bang={BANGS[9].t}
            />
            <GridItem
              area="md:[grid-area:4/1/5/13]"
              icon={<Search className="h-5 w-5 text-orange-500" />}
              title={BANGS[6].s}
              description={BANGS[6].description}
              bang={BANGS[6].t}
            />
          </ul>
        </div>

        {/* Examples */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-white text-center">Exemples d&apos;utilisation</h2>
          <div className="relative rounded-2xl border border-gray-800 p-2 md:rounded-3xl md:p-3">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <div className="space-y-4">
                {examples.map((example, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-gray-600">
                    <Code className="bg-gray-700 text-gray-200 text-sm rounded-lg px-3 py-1">
                      {example.code}
                    </Code>
                    <span className="text-gray-400 ml-4">→ {example.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="text-center text-gray-400 text-sm mt-8 flex items-center justify-center gap-2 mb-10 mt-10" onClick={() => window.open("https://github.com/gayakaci20", "_blank")} >
        <Github 
          className="text-gray-400 hover:text-gray-300 cursor-pointer" 
        />
        <span className="text-gray-400 hover:text-gray-300">Open Source Project by Gaya KACI</span>
      </footer>
    </div>
  );
}

export default HomePage;
