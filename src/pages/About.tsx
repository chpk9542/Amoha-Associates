import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Target, Eye, Shield, Award, Calendar, Milestone, Users } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function About() {
  return (
    <div className="pt-20 bg-matte-black text-luxury-white">
      <Helmet>
        <title>About Us | Amoha Associates - Our Vision & Mission</title>
        <meta name="description" content="Learn about Amoha Associates' journey, mission, and the team dedicated to providing luxury financial solutions in India." />
      </Helmet>

      {/* Header */}
      <section className="py-24 px-6 border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-secondary/5 blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Redefining <span className="gold-gradient-text italic font-serif">Finance</span> <br />
              With Integrity.
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
              Founded on the principles of transparency and excellence, Amoha Associates has grown to become a benchmark in the financial advisory sector across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full group hover:border-secondary/30 transition-all p-10">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed text-lg font-light">
                To simplify the complex landscape of financial borrowing for every Indian. We strive to provide accessible, transparent, and multi-bank solutions that empower individuals and businesses to scale new heights.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full group hover:border-secondary/30 transition-all p-10">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed text-lg font-light">
                To become the premier choice for financial advisory in South India, recognized for our commitment to client success and our ability to navigate the most challenging financial landscapes.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-24 bg-primary/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-xs font-semibold text-secondary uppercase tracking-[0.3em] mb-4">Our Journey</h2>
             <h3 className="text-4xl md:text-5xl font-display font-bold">The <span className="gold-gradient-text italic font-serif">Milestones</span> of Success</h3>
          </div>
          
          <div className="relative border-l border-white/10 ml-6 md:ml-0 md:border-l-0 md:before:absolute md:before:top-1/2 md:before:left-0 md:before:w-full md:before:h-px md:before:bg-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
               {[
                 { year: '2010', title: 'Foundation', desc: 'Started with a team of 3 experts in Vijayawada.' },
                 { year: '2015', title: 'Expansion', desc: 'Opened offices in Hyderabad and Guntur.' },
                 { year: '2020', title: 'Industry Leader', desc: 'Recognized as Top Channel Partner for SBI & HDFC.' },
                 { year: '2024', title: 'Digital Era', desc: 'Launching AI-powered eligibility and lead systems.' }
               ].map((item, i) => (
                 <div key={i} className="relative pt-8 md:pt-0">
                    <div className="absolute top-0 -left-[31px] md:relative md:left-0 w-4 h-4 rounded-full bg-secondary md:mx-auto mb-6 shadow-[0_0_15px_rgba(197,160,89,0.5)]" />
                    <div className="md:text-center">
                       <p className="text-secondary font-display font-bold text-2xl mb-2">{item.year}</p>
                       <h4 className="text-white font-bold mb-3">{item.title}</h4>
                       <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
           {[
             { val: '15+', label: 'Years Of Trust' },
             { val: '5k+', label: 'Happy Clients' },
             { val: '30+', label: 'Bank Partners' },
             { val: '500Cr+', label: 'Loan Disbursed' }
           ].map((s, i) => (
             <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{s.val}</p>
                <p className="text-xs text-secondary font-semibold uppercase tracking-widest">{s.label}</p>
             </div>
           ))}
        </div>
      </section>
      
      {/* Values */}
      <section className="py-24 bg-matte-black">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                 <h2 className="text-xs font-semibold text-secondary uppercase tracking-[0.3em] mb-4">Core Values</h2>
                 <h3 className="text-4xl font-display font-bold text-white mb-8">What Defines Us.</h3>
                 <p className="text-slate-400 font-light leading-relaxed">
                   Our values are the foundation of everything we do. They guide our strategy and inspire our team to provide the best service to our clients.
                 </p>
              </div>
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                   { icon: Shield, title: "Transparency", desc: "No hidden charges, no false promises. Just clear, honest financial advice." },
                   { icon: Award, title: "Excellence", desc: "We strive for perfection in every documentation and approval process." },
                   { icon: Users, title: "Customer Centric", desc: "Your goals are our priority. We tailor solutions to your specific needs." },
                   { icon: Milestone, title: "Integrity", desc: "Building long-term relationships through ethical business practices." }
                 ].map((v, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                         <v.icon className="w-5 h-5" />
                      </div>
                      <div>
                         <h4 className="text-white font-bold mb-2">{v.title}</h4>
                         <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
