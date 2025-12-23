import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: '5 Manfaat Jus Cold-Pressed untuk Kesehatan',
    excerpt: 'Pelajari mengapa metode cold-pressed lebih baik dalam menjaga nutrisi dibanding juicer biasa.',
    category: 'Nutrisi',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&q=80',
  },
  {
    title: 'Panduan Detox 3 Hari untuk Pemula',
    excerpt: 'Langkah demi langkah memulai perjalanan detox Anda dengan aman dan efektif.',
    category: 'Detox',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&q=80',
  },
  {
    title: 'Sayuran Hijau: Superfood untuk Setiap Hari',
    excerpt: 'Kenapa sayuran hijau harus menjadi bagian dari diet harian Anda.',
    category: 'Kesehatan',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80',
  },
];

export function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-4">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold">
              Tips Hidup Sehat
            </h2>
          </div>
          <a
            href="#"
            className="text-primary font-medium flex items-center gap-2 mt-4 md:mt-0 hover:gap-3 transition-all group"
          >
            Lihat Semua Artikel
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-muted">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium text-primary bg-accent px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>

              <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {article.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
