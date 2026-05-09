import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input, Select } from '../components/ui/Input';

export default function Calculator() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [loanType, setLoanType] = useState('home');

  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenure * 12;
  const emi = 
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
    (Math.pow(1 + monthlyRate, totalMonths) - 1);
  
  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const data = [
    { name: 'Principal Amount', value: loanAmount },
    { name: 'Total Interest', value: Math.round(totalInterest) },
  ];

  const COLORS = ['#C5A059', '#172A45'];

  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="pt-24 bg-matte-black min-h-screen text-luxury-white pb-20">
      <Helmet>
        <title>EMI Calculator | Amoha Associates - Home, LAP & Business Loans</title>
        <meta name="description" content="Calculate your loan EMI, total interest, and repayment schedule with our easy-to-use financial calculator." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Loan <span className="gold-gradient-text italic font-serif">EMI</span> Calculator</h1>
            <p className="text-xl text-slate-400 font-light max-w-3xl">
              Plan your finances with precision. Adjust the sliders to see how loan amount, tenure, and interest rates affect your monthly payments.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="p-8">
               <div className="space-y-6">
                  <div>
                     <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Loan Type</label>
                     <Select value={loanType} onChange={(e) => setLoanType(e.target.value)}>
                        <option value="home">Home Loan</option>
                        <option value="lap">Loan Against Property</option>
                        <option value="business">Business Loan</option>
                        <option value="personal">Personal Loan</option>
                     </Select>
                  </div>
                  <div>
                     <div className="flex justify-between mb-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Loan Amount</label>
                        <span className="text-secondary font-bold font-display">{formatCurrency(loanAmount)}</span>
                     </div>
                     <input 
                        type="range" min="100000" max="100000000" step="100000"
                        value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))}
                        className="w-full accent-secondary"
                     />
                  </div>
                  <div>
                     <div className="flex justify-between mb-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Interest Rate (% p.a)</label>
                        <span className="text-secondary font-bold font-display">{interestRate}%</span>
                     </div>
                     <input 
                        type="range" min="5" max="25" step="0.1"
                        value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-full accent-secondary"
                     />
                  </div>
                  <div>
                     <div className="flex justify-between mb-2">
                        <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">Tenure (Years)</label>
                        <span className="text-secondary font-bold font-display">{tenure} Yrs</span>
                     </div>
                     <input 
                        type="range" min="1" max="30" step="1"
                        value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full accent-secondary"
                     />
                  </div>
               </div>
            </Card>
            
            <Card className="bg-secondary p-8 border-none">
               <h4 className="text-primary font-display font-bold text-xl mb-4">Your Monthly EMI</h4>
               <p className="text-5xl font-display font-bold text-primary mb-2">{formatCurrency(Math.round(emi))}</p>
               <p className="text-primary/70 text-sm font-medium">Interest starts at 8.25% with our partner banks.</p>
               <Button className="w-full mt-6 bg-primary text-white border-none" onClick={() => window.location.href='/contact'}>Apply for this Loan</Button>
            </Card>
          </div>

          {/* Results Vis */}
          <div className="lg:col-span-2 space-y-8">
             <Card className="p-8 h-full flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 grow mb-12">
                   <div className="h-[300px]">
                      <ResponsiveContainer width="100%" height="100%">
                         <PieChart>
                            <Pie
                               data={data}
                               cx="50%" cy="50%"
                               innerRadius={80}
                               outerRadius={120}
                               paddingAngle={5}
                               dataKey="value"
                            >
                               {data.map((entry, index) => (
                                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                               ))}
                            </Pie>
                            <Tooltip 
                               contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                               itemStyle={{ color: '#fff' }}
                            />
                            <Legend verticalAlign="bottom" height={36}/>
                         </PieChart>
                      </ResponsiveContainer>
                   </div>
                   <div className="flex flex-col justify-center gap-8">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Principal Amount</p>
                        <p className="text-2xl font-display font-bold text-white">{formatCurrency(loanAmount)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Total Interest Payable</p>
                        <p className="text-2xl font-display font-bold text-secondary">{formatCurrency(Math.round(totalInterest))}</p>
                      </div>
                      <div className="pt-6 border-t border-white/10">
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Total Amount Payable</p>
                        <p className="text-3xl font-display font-bold text-white italic font-serif italic">{formatCurrency(Math.round(totalPayment))}</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-4">
                   <h4 className="text-lg font-display font-bold text-white">Benefits of using our EMI Calculator:</h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Instant digital estimates",
                        "Detailed amortization breakups",
                        "Balance transfer comparison",
                        "Optimize tenure for target budget"
                      ].map((b, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                           <div className="w-1 h-1 rounded-full bg-secondary" />
                           {b}
                        </div>
                      ))}
                   </div>
                </div>
             </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
