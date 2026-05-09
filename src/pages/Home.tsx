import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Clock, Users, Building2, Wallet, Landmark, Laptop } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { LOAN_SERVICES, BANK_PARTNERS } from '../constants';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-matte-black text-luxury-white">
      <Helmet>
        <title>Amoha Associates | Premium Loan & Financial Advisory Services India</title>
        <meta name="description" content="Amoha Associates offers premium home loans, business loans, LAP, and mortgage solutions across India. Trusted by thousands for smart finance and guidance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 z-0 text-secondary">
          <div className="absolute inset-0 bg-linear-to-b from-primary/95 via-primary/60 to-matte-black z-10" />
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-semibold uppercase tracking-widest mb-6">
              <TrendingUp className="w-4 h-4" />
              Empowering Your Financial Dreams
            </div>
            <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mb-8">
              Turning <span className="gold-gradient-text italic font-serif">Dreams</span> <br />
              Into Approved <br />
              <span className="gold-gradient-text">Loans.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed font-light">
              Experience Bespoke Financial Solutions with India's most trusted advisory. From Home Loans to Commercial Finance, we bridge the gap between you and your aspirations.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/contact">
                <Button size="lg" className="group">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/calculator">
                <Button variant="outline" size="lg">
                  Check Eligibility
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-white">30+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Bank Partners</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-display font-bold text-white">₹500Cr+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Disbursed</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-3xl font-display font-bold text-white">5000+</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Happy Clients</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            {/* Visual element here */}
            <div className="relative">
              <div className="absolute -inset-10 bg-secondary/20 blur-[100px] rounded-full" />
              <Card className="p-0 overflow-hidden relative border-secondary/20 shadow-2xl shadow-secondary/10">
                 <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Property"
                    className="w-full h-[500px] object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-matte-black via-transparent to-transparent flex flex-col justify-end p-8">
                    <p className="text-2xl font-serif italic text-white mb-2">"Luxury Financial Solutions"</p>
                    <p className="text-sm text-slate-400">Trusted by over 5000 individuals and developers across India.</p>
                  </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-matte-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xs font-semibold text-secondary uppercase tracking-[0.3em] mb-4">Our Services</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                Comprehensive Loan <span className="gold-gradient-text italic font-serif">Solutions</span>
              </h3>
            </div>
            <Link to="/services" className="text-secondary hover:text-white transition-colors flex items-center gap-2 group text-sm font-medium uppercase tracking-widest">
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOAN_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-secondary/40 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                     {service.id === 'home-loan' && <Landmark className="w-7 h-7" />}
                     {service.id === 'lap' && <Building2 className="w-7 h-7" />}
                     {service.id === 'business-loan' && <TrendingUp className="w-7 h-7" />}
                     {service.id === 'personal-loan' && <Wallet className="w-7 h-7" />}
                     {service.id === 'commercial-loan' && <Building2 className="w-7 h-7" />}
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <Link to={`/services?type=${service.id}`} className="inline-flex items-center text-xs font-bold text-secondary uppercase tracking-widest group/btn">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Expert Advisor"
                className="rounded-3xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-2xl shadow-2xl z-20 hidden md:block">
                <p className="text-primary font-display font-bold text-4xl leading-tight">15+</p>
                <p className="text-primary/70 text-xs font-bold uppercase tracking-widest">Years Experience</p>
              </div>
           </div>

           <div>
              <h2 className="text-xs font-semibold text-secondary uppercase tracking-[0.3em] mb-4">Why Amoha Associates</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-8">
                Your <span className="gold-gradient-text italic font-serif">Trust</span> is Our Greatest Achievement.
              </h3>
              
              <div className="space-y-8 mt-12">
                {[
                  { icon: ShieldCheck, title: "Zero Service Charges", desc: "We are authorized channel partners. You don't pay us anything for our expertise." },
                  { icon: Clock, title: "Fastest Approval", desc: "Our direct relationship with bank managers ensures your file gets prioritized." },
                  { icon: Laptop, title: "Comparison Engine", desc: "We compare 30+ banks to find you the lowest ROI and highest eligibility." },
                  { icon: Users, title: "End-to-End Assistance", desc: "From documentation to disbursement, we stand by you at every step." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-secondary shrink-0 shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Banks Slider */}
      <section className="py-20 bg-matte-black border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center">
           <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Trusted By Top Indian Institutions</h3>
           <Link to="/banks" className="text-xs font-bold text-secondary uppercase tracking-widest hover:text-white transition-colors">See All Partners</Link>
        </div>
        <div className="flex gap-12 items-center animate-marquee">
          {/* Duplicate for infinite effect */}
          {[...BANK_PARTNERS, ...BANK_PARTNERS].map((bank, i) => (
            <div key={i} className="shrink-0 flex items-center gap-4 bg-white/5 py-4 px-8 rounded-xl border border-white/5 hover:border-secondary/20 transition-all">
              <img src={bank.logo} alt={bank.name} className="h-8 object-contain filter grayscale invert brightness-200" referrerPolicy="no-referrer" />
              <span className="text-sm font-semibold text-slate-300">{bank.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* EMI Calculator Preview */}
      <section className="py-24 bg-matte-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Card className="bg-primary/50 border-secondary/20 p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 blur-[100px] -z-10" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                  Estimate Your <span className="gold-gradient-text italic font-serif">Expenses</span>
                </h3>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light">
                  Plan your future today. Use our advanced EMI calculator to understand your monthly obligations and savings from balance transfers.
                </p>
                <ul className="space-y-4 mb-10">
                  {['Real-time Amortization Schedule', 'Balance Transfer Savings Check', 'Download PDF Reports', 'Multi-bank Eligibility Check'].map((t, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-secondary" />
                      {t}
                    </li>
                  ))}
                </ul>
                <Link to="/calculator">
                  <Button size="lg" variant="outline">Try Calculator Now</Button>
                </Link>
              </div>
              <div className="bg-matte-black/50 p-8 rounded-3xl border border-white/5 shadow-inner">
                {/* Mock UI for Calculator */}
                <div className="space-y-6">
                   <div>
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                        <span>Loan Amount</span>
                        <span className="text-white">₹50,00,000</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full">
                        <div className="h-full w-[60%] bg-secondary rounded-full" />
                      </div>
                   </div>
                   <div>
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
                        <span>Interest Rate</span>
                        <span className="text-white">8.5% p.a.</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full">
                        <div className="h-full w-[40%] bg-secondary rounded-full" />
                      </div>
                   </div>
                   <div className="pt-8 border-t border-white/10 mt-8 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Monthly EMI</p>
                        <p className="text-3xl font-display font-bold text-secondary">₹38,446</p>
                      </div>
                      <div className="text-right">
                         <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Total Interest</p>
                         <p className="text-xl font-display font-bold text-white">₹42,26,981</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-matte-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-8">Ready to <span className="gold-gradient-text italic font-serif">get started?</span></h3>
            <p className="text-xl text-slate-400 mb-12 font-light">Join thousands of families and businesses who achieved their financial goals with Amoha Associates.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">Request a Callback</Button>
               </Link>
               <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}>
                  Chat with Expert
               </Button>
            </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
