import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Search, MapPin, TrendingUp, Clock, Filter, ExternalLink } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BANK_PARTNERS } from '../constants';

export function BankPartners() {
  return (
    <div className="pt-24 bg-matte-black min-h-screen text-luxury-white pb-20">
      <Helmet>
        <title>Bank Partners | Amoha Associates - Our 30+ Lending Partners</title>
        <meta name="description" content="View our network of over 30 top Indian banks and NBFCs including HDFC, ICICI, Axis, and SBI." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Banking <span className="gold-gradient-text italic font-serif">Partners</span></h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            We have strategic alliances with India's leading financial institutions to bring you the best possible terms and interest rates for your loans.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           {[
             { icon: TrendingUp, title: "Lowest Interest Rates", desc: "Access exclusive channel partner interest rates that aren't available to the general public." },
             { icon: Clock, title: "Priority Processing", desc: "Our relationship managers at each bank prioritize files from Amoha Associates for faster approvals." },
             { icon: Filter, title: "Unbiased Comparison", desc: "We provide an objective comparison of different bank offers without any hidden agenda." }
           ].map((f, i) => (
             <div key={i} className="flex flex-col gap-4 p-8 bg-white/5 rounded-3xl border border-white/5">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                   <f.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-display font-bold text-white">{f.title}</h4>
                <p className="text-slate-400 text-sm">{f.desc}</p>
             </div>
           ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BANK_PARTNERS.map((bank, i) => (
            <motion.div
              key={bank.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-8 hover:border-secondary/40 transition-all flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-32 h-32 p-4 bg-white rounded-2xl flex items-center justify-center shrink-0">
                  <img src={bank.logo} alt={bank.name} className="w-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="grow">
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{bank.name}</h3>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-6">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Interest Rate</p>
                      <p className="text-sm font-bold text-secondary font-display">{bank.interestRateRange}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Approval Speed</p>
                      <p className="text-sm font-bold text-white">{bank.approvalSpeed}</p>
                    </div>
                    <div className="col-span-2">
                       <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Best For</p>
                       <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
                          {bank.bestFor.map((b, idx) => (
                            <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-slate-300 font-bold border border-white/10 uppercase tracking-wider">{b}</span>
                          ))}
                       </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full md:w-auto" onClick={() => window.location.href='/contact'}>
                    Apply via {bank.name}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
