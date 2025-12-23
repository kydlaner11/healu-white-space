import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import heroProducts from '@/assets/healu-products.jpg';

const juices = [
  {
    name: 'Ranger-U',
    tagline: 'Energi Sepanjang Hari',
    ingredients: 'Wortel, Nanas, Mint, Jeruk',
    color: 'bg-healu-orange',
    benefits: 'Vitamin A & C untuk imunitas',
  },
  {
    name: 'Greeny-U',
    tagline: 'Detox Alami',
    ingredients: 'Bayam, Pir, Nanas',
    color: 'bg-healu-green',
    benefits: 'Serat tinggi untuk pencernaan',
  },
  {
    name: 'Bloomy-U',
    tagline: 'Kulit Bersinar',
    ingredients: 'Apel, Lemon, Semangka, Mint',
    color: 'bg-healu-pink',
    benefits: 'Antioksidan untuk kulit sehat',
  },
  {
    name: 'Sunny-U',
    tagline: 'Morning Boost',
    ingredients: 'Jeruk, Mangga, Jahe',
    color: 'bg-healu-orange',
    benefits: 'Vitamin C untuk stamina',
  },
  {
    name: 'Minty-U',
    tagline: 'Relaksasi Maksimal',
    ingredients: 'Timun, Mint, Apel Hijau, Lemon',
    color: 'bg-healu-green',
    benefits: 'Menyegarkan & menenangkan',
  },
  {
    name: 'Berry-U',
    tagline: 'Anti-Aging Power',
    ingredients: 'Strawberry, Blueberry, Apel',
    color: 'bg-healu-pink',
    benefits: 'Antioksidan tinggi',
  },
];

function JuiceCard({ juice, index }: { juice: typeof juices[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group card-hover"
    >
      <div className="bg-card rounded-2xl overflow-hidden border border-border/50">
        {/* Color indicator */}
        <div className={`h-1 ${juice.color}`} />
        
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                {juice.name}
              </h3>
              <p className="text-sm text-primary font-medium">{juice.tagline}</p>
            </div>
            <span className={`w-3 h-3 rounded-full ${juice.color}`} />
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
              Bahan
            </p>
            <p className="text-sm text-foreground">{juice.ingredients}</p>
          </div>

          {/* Benefits */}
          <div className="pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground">{juice.benefits}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
            Koleksi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Menu Cold-Pressed
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Setiap botol mengandung nutrisi murni dari buah dan sayuran segar yang diperas dengan teknologi cold-pressed
          </p>
        </motion.div>

        {/* Product showcase image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-muted/50 to-background">
            <img
              src={heroProducts}
              alt="HEALU Juice Collection"
              className="w-full max-w-3xl mx-auto"
            />
          </div>
        </motion.div>

        {/* Juice grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {juices.map((juice, index) => (
            <JuiceCard key={juice.name} juice={juice} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
