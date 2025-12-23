import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Apa itu cold-pressed juice?',
    answer:
      'Cold-pressed juice adalah jus yang dibuat menggunakan teknik hidrolik pressing yang tidak menghasilkan panas. Metode ini menjaga lebih banyak nutrisi, enzim, dan vitamin dibandingkan metode juicing tradisional yang menggunakan pisau berputar.',
  },
  {
    question: 'Berapa lama jus bisa disimpan?',
    answer:
      'Jus HEALU sebaiknya dikonsumsi dalam 3-5 hari setelah produksi dan harus disimpan dalam lemari es. Kami tidak menggunakan pengawet, jadi kesegaran adalah prioritas utama kami.',
  },
  {
    question: 'Apakah ada minimum order untuk langganan?',
    answer:
      'Tidak ada minimum order. Anda bisa memulai dengan paket Starter yang berisi 6 botol per minggu. Anda juga bisa menyesuaikan atau membatalkan langganan kapan saja.',
  },
  {
    question: 'Area mana saja yang dijangkau pengiriman?',
    answer:
      'Saat ini kami melayani pengiriman di area Jakarta, Tangerang, Bekasi, dan Depok. Pengiriman dilakukan setiap pagi antara pukul 06.00-08.00 untuk memastikan kesegaran jus.',
  },
  {
    question: 'Apakah bahan-bahan yang digunakan organik?',
    answer:
      'Ya, kami menggunakan 100% bahan organik yang bersumber dari petani lokal terpilih. Semua bahan kami bebas pestisida dan bahan kimia berbahaya.',
  },
  {
    question: 'Bagaimana cara membatalkan atau mengubah langganan?',
    answer:
      'Anda bisa menghubungi customer service kami melalui WhatsApp atau email minimal 24 jam sebelum jadwal pengiriman berikutnya untuk melakukan perubahan atau pembatalan.',
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="faq" className="section-padding bg-healu-cream">
      <div className="container-narrow max-w-3xl">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-background rounded-full text-foreground text-sm font-medium mb-4">
            Bantuan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-muted-foreground text-lg">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-2xl border-none px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-serif text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-2">Masih punya pertanyaan?</p>
          <a
            href="#"
            className="text-primary font-semibold hover:underline underline-offset-4"
          >
            Hubungi kami via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
