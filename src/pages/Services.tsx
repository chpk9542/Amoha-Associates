import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, CheckCircle2, Info, FileText, Gift, HelpCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { LOAN_SERVICES } from '../constants';

export default function Services() {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('type');
  const [selectedService, setSelectedService] = useState(LOAN_SERVICES[0]);

  useEffect(() => {
    if (serviceId) {
      const found = LOAN_SERVICES.find(s => s.id === serviceId);
      if (found) setSelectedService(found);
    }
  }, [serviceId]);

  return (
    <div className="pt-24 min-h-screen bg-matte-black text-luxury-white pb-20">
      <Helmet>
        <title>{selectedService.title} | Amoha Associates - Best Loan Services</title>
        <meta name="description" content={selectedService.shortDescription} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
             <div className="sticky top-32 space-y-2">
                <p className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 ml-2">Our Offerings</p>
                {LOAN_SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all flex items-center justify-between group ${selectedService.id === s.id ? 'bg-secondary text-primary font-bold shadow-lg shadow-secondary/20' : 'bg-white/5 text-slate-400 hover:bg-white/10'}`}
                  >
                    <span className="text-sm tracking-wide">{s.title}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedService.id === s.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                  </button>
                ))}
                
                <div className="mt-12 bg-linear-to-br from-secondary/20 to-primary/40 rounded-2xl p-6 border border-secondary/20">
                   <h4 className="font-display font-bold text-white mb-2">Need Help?</h4>
                   <p className="text-xs text-slate-400 mb-6 font-light">Talk to our experts today for a free consultation.</p>
                   <Link to="/contact">
                     <Button size="sm" className="w-full">Get Free Advice</Button>
                   </Link>
                </div>
             </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
             <AnimatePresence mode="wait">
               <motion.div
                 key={selectedService.id}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.4 }}
               >
                 <div className="mb-12">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
                      {selectedService.title}
                    </h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed max-w-3xl">
                      {selectedService.fullDescription}
                    </p>
                 </div>

                 {/* Key Tabs */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <Card className="p-8 hover:border-secondary/20 transition-colors">
                       <div className="flex items-center gap-3 mb-6">
                          <CheckCircle2 className="w-6 h-6 text-secondary" />
                          <h3 className="text-xl font-display font-bold text-white">Eligibility Criteria</h3>
                       </div>
                       <ul className="space-y-4">
                          {selectedService.eligibility.map((e, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-slate-400 items-start">
                               <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                               {e}
                            </li>
                          ))}
                       </ul>
                    </Card>

                    <Card className="p-8 hover:border-secondary/20 transition-colors">
                       <div className="flex items-center gap-3 mb-6">
                          <FileText className="w-6 h-6 text-secondary" />
                          <h3 className="text-xl font-display font-bold text-white">Documents Required</h3>
                       </div>
                       <ul className="space-y-4">
                          {selectedService.documents.map((d, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-slate-400 items-start">
                               <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                               {d}
                            </li>
                          ))}
                       </ul>
                    </Card>
                 </div>

                 <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                       <Gift className="w-6 h-6 text-secondary" />
                       <h3 className="text-2xl font-display font-bold text-white">Key Benefits</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {selectedService.benefits.map((b, idx) => (
                         <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-6 flex gap-4 hover:border-secondary/20 transition-all">
                            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                            <span className="text-slate-300 font-medium">{b}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 <Card className="bg-secondary/10 border-secondary/20 p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                       <h4 className="text-2xl font-display font-bold text-white mb-2">Ready to apply for {selectedService.title}?</h4>
                       <p className="text-slate-400 text-sm">Fill out our quick form and get an instant eligibility check.</p>
                    </div>
                    <Link to="/contact">
                       <Button size="lg">Get Started Now</Button>
                    </Link>
                 </Card>
               </motion.div>
             </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}
