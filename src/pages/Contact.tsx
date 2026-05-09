import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, Select } from '../components/ui/Input';
import { createLead } from '../services/leadService';
import { CITIES } from '../constants';
import { EmploymentType } from '../types';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    loanType: 'Home Loan',
    income: '',
    employmentType: EmploymentType.SALARIED,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createLead({
        ...formData,
        income: Number(formData.income),
      });
      setSubmitted(true);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 bg-matte-black min-h-screen text-luxury-white pb-20">
      <Helmet>
        <title>Contact Us | Amoha Associates - Free Loan Consultation</title>
        <meta name="description" content="Get in touch with Amoha Associates for expert loan advisory. Request a callback or visit our office for mortgage and real estate financial solutions." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
           {/* Info Side */}
           <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">Get in <span className="gold-gradient-text italic font-serif">Touch.</span></h1>
              <p className="text-xl text-slate-400 font-light mb-12 leading-relaxed">
                Whether you're planning for your first home or expanding your business empire, our expert advisors are ready to guide you through the process.
              </p>

              <div className="space-y-10 mb-12">
                 <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                       <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-white mb-2">Our Office</h4>
                       <p className="text-slate-400 text-sm leading-relaxed">Financial District, Gachibowli,<br />Hyderabad, Telangana - 500032</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                       <Phone className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-white mb-2">Direct Contact</h4>
                       <p className="text-slate-400 text-sm tracking-widest">+91 91234 56789</p>
                       <p className="text-secondary text-xs font-bold mt-1 uppercase">Available 9am - 7pm</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                       <Mail className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-white mb-2">Email Support</h4>
                       <p className="text-slate-400 text-sm">contact@amohaassociates.com</p>
                       <p className="text-slate-400 text-sm">support@amohaassociates.com</p>
                    </div>
                 </div>
              </div>

              {/* Working Hours */}
              <Card className="p-8 border-secondary/20 bg-secondary/5">
                 <div className="flex items-center gap-4 mb-6">
                    <Clock className="w-6 h-6 text-secondary" />
                    <h4 className="text-lg font-bold text-white">Working Hours</h4>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-400">Monday - Friday</span>
                       <span className="text-white font-medium">09:00 AM - 07:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-400">Saturday</span>
                       <span className="text-white font-medium">10:00 AM - 04:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                       <span className="text-slate-400">Sunday</span>
                       <span className="text-secondary font-bold">BY APPOINTMENT</span>
                    </div>
                 </div>
              </Card>
           </div>

           {/* Form Side */}
           <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 blur-[100px] -z-10" />
              <Card className="p-10 border-white/10 shadow-2xl">
                 {!submitted ? (
                   <>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Request a Callback</h3>
                    <p className="text-sm text-slate-500 mb-8">Our expert will call you back within 30 minutes for a free assessment.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                             <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                             <Input 
                                required placeholder="Enter full name" 
                                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                             />
                          </div>
                          <div>
                             <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                             <Input 
                                required placeholder="+91 XXXXX XXXXX" 
                                value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
                             />
                          </div>
                       </div>

                       <div>
                          <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                          <Input 
                             type="email" placeholder="example@gmail.com" 
                             value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                             <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">City</label>
                             <Select value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})}>
                                {CITIES.map(city => <option key={city} value={city}>{city}</option>)}
                             </Select>
                          </div>
                          <div>
                             <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Loan Type</label>
                             <Select value={formData.loanType} onChange={(e) => setFormData({...formData, loanType: e.target.value})}>
                                <option>Home Loan</option>
                                <option>Business Loan</option>
                                <option>Loan Against Property</option>
                                <option>Personal Loan</option>
                                <option>Balance Transfer</option>
                             </Select>
                          </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                             <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Employment Type</label>
                             <Select value={formData.employmentType} onChange={(e: any) => setFormData({...formData, employmentType: e.target.value})}>
                                <option value={EmploymentType.SALARIED}>Salaried</option>
                                <option value={EmploymentType.SELF_EMPLOYED}>Self-employed</option>
                                <option value={EmploymentType.BUSINESS}>Business</option>
                             </Select>
                          </div>
                          <div>
                             <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Monthly Income</label>
                             <Input 
                                type="number" placeholder="₹ Enter Amount" 
                                value={formData.income} onChange={(e) => setFormData({...formData, income: e.target.value})}
                             />
                          </div>
                       </div>

                       <Button type="submit" className="w-full" size="lg" disabled={loading}>
                          {loading ? 'Processing...' : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Submit Inquiry
                            </>
                          )}
                       </Button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                       <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                          <CheckCircle2 className="w-4 h-4 text-secondary" />
                          Secure & Confidential
                       </div>
                       <div className="flex gap-4">
                          <button onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')} className="text-secondary hover:text-white transition-colors">
                             <MessageSquare className="w-5 h-5" />
                          </button>
                          <button onClick={() => window.open('tel:+91XXXXXXXXXX', '_blank')} className="text-secondary hover:text-white transition-colors">
                             <Phone className="w-5 h-5" />
                          </button>
                       </div>
                    </div>
                   </>
                 ) : (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="text-center py-20"
                   >
                     <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-secondary/30">
                        <CheckCircle2 className="w-10 h-10 text-primary" />
                     </div>
                     <h3 className="text-3xl font-display font-bold text-white mb-4 italic font-serif">Inquiry Received!</h3>
                     <p className="text-slate-400 mb-8 leading-relaxed">
                       Thank you for choosing Amoha Associates. <br />Our financial expert will contact you shortly to discuss your requirements.
                     </p>
                     <Button variant="outline" onClick={() => setSubmitted(false)}>Submit Another Request</Button>
                   </motion.div>
                 )}
              </Card>
           </div>
        </div>
      </div>
    </div>
  );
}
