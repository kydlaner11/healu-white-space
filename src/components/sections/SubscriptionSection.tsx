import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Truck, Calendar, Sparkles, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Starter',
    description: 'Sempurna untuk memulai',
    price: '299K',
    period: '/minggu',
    bottles: '6 botol',
    features: [
      '6 botol jus pilihan',
      'Pengiriman 2x seminggu',
      'Bebas pilih varian',
      'Cooler bag gratis',
    ],
    popular: false,
  },
  {
    name: 'Wellness',
    description: 'Paling populer',
    price: '549K',
    period: '/minggu',
    bottles: '12 botol',
    features: [
      '12 botol jus pilihan',
      'Pengiriman setiap hari',
      'Konsultasi nutrisi',
      'Cooler bag premium',
      'Diskon 10%',
    ],
    popular: true,
  },
  {
    name: 'Detox Pro',
    description: 'Program detox intensif',
    price: '899K',
    period: '/minggu',
    bottles: '21 botol',
    features: [
      '21 botol jus detox',
      'Program 7 hari lengkap',
      'Panduan detox',
      'Konsultasi pribadi',
      'Diskon 15%',
    ],
    popular: false,
  },
];

const benefits = [
  {
    icon: Truck,
    title: 'Pengiriman Gratis',
    description: 'Diantar langsung ke rumah Anda setiap pagi',
  },
  {
    icon: Calendar,
    title: 'Jadwal Fleksibel',
    description: 'Atur jadwal pengiriman sesuai kebutuhan',
  },
  {
    icon: Sparkles,
    title: 'Selalu Segar',
    description: 'Dibuat fresh setiap hari tanpa pengawet',
  },
  {
    icon: Leaf,
    title: 'Bahan Organik',
    description: '100% dari petani lokal terpilih',
  },
];

export function SubscriptionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="subscription" className="section-padding bg-healu-cream">
      <div className="container-narrow">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-background rounded-full text-foreground text-sm font-medium mb-4">
            Langganan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Hidup Sehat Jadi Lebih Mudah
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nikmati kemudahan jus segar yang diantar langsung ke rumah Anda setiap hari
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`relative bg-background rounded-3xl p-8 ${
                plan.popular
                  ? 'ring-2 ring-primary shadow-xl shadow-primary/10'
                  : 'border border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Paling Populer
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-serif text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <span className="text-4xl font-serif font-bold text-foreground">
                  Rp {plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
                <p className="text-sm text-primary font-medium mt-2">{plan.bottles}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'hero' : 'heroOutline'}
                size="lg"
                className="w-full"
              >
                Mulai Berlangganan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
