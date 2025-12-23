import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroProducts from '@/assets/healu-products.jpg';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-6"
            >
              100% Cold-Pressed & Natural
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold leading-[1.1] tracking-tight mb-6"
            >
              Kesegaran <br />
              <span className="text-primary">Murni</span> untuk <br />
              Hidup Sehat
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 mb-8"
            >
              Jus cold-pressed premium yang diperas langsung dari buah dan sayuran organik segar. 
              Tanpa gula tambahan, tanpa pengawet.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl">
                Lihat Menu
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-8 mt-12 justify-center lg:justify-start"
            >
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-foreground">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground">Varian Jus</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-serif font-bold text-foreground">4.9★</p>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-3xl transform rotate-3 scale-105" />
              
              {/* Main image */}
              <div className="relative bg-background rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={heroProducts}
                  alt="HEALU Cold-Pressed Juice Collection"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -right-4 top-8 bg-background rounded-2xl shadow-xl p-4 hidden lg:block"
              >
                <p className="text-xs text-muted-foreground mb-1">Segar Setiap Hari</p>
                <p className="text-lg font-serif font-semibold text-foreground">Diantar 06:00</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
