import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, Download, FileText, Lock, Users, Briefcase, Building } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function Documents() {
  const documentGroups = [
    {
      id: 'salaried',
      title: 'Salaried Professionals',
      icon: Users,
      docs: [
        'Aadhar Card & PAN Card',
        'Last 3-6 months Salary Slips',
        'Form 16 or Income Tax Returns for last 2 years',
        'Last 6 months Bank Statement showing salary credits',
        'Employee ID Card copy',
        'Proof of Residence (Electricity bill/Passport/Voter ID)'
      ]
    },
    {
      id: 'self-employed',
      title: 'Self-Employed / Business Owners',
      icon: Briefcase,
      docs: [
        'Aadhar Card & PAN Card',
        'IT Returns for last 2-3 years with computation of income',
        'Balance Sheet and Profit & Loss Account (audited if turnover > 1Cr)',
        'Last 12 months Savings & Current Bank Statements',
        'GST Registration & Latest GST Returns',
        'Business Proof (Shop Act/Trade License/GST certificate)'
      ]
    },
    {
      id: 'property',
      title: 'Property Documents',
      icon: Building,
      docs: [
        'Sale Agreement / Booking Receipt',
        'Chain of Title documents (Link Documents for 30 years)',
        'Approved Building Plan or Layout copy',
        'Ownership Documents (Sale Deed/Gift Deed)',
        'Latest Land Tax Receipt',
        'Property Tax Receipts (Latest)'
      ]
    }
  ];

  return (
    <div className="pt-24 bg-matte-black min-h-screen text-luxury-white pb-20">
      <Helmet>
        <title>Documents Checklist | Amoha Associates - Fast Loan Processing</title>
        <meta name="description" content="A comprehensive checklist of documents required for Home Loans, Business Loans, and LAP for salaried and self-employed professionals." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Required <span className="gold-gradient-text italic font-serif">Documents</span></h1>
          <p className="text-xl text-slate-400 font-light leading-relaxed">
            Ensure a smooth and rapid loan approval process by having these documents ready. Select your employment category to see the mandatory checklist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {documentGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full border-white/5 hover:border-secondary/20 transition-all flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8">
                   <group.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-6 underline decoration-secondary/30 decoration-2 underline-offset-8">
                  {group.title}
                </h3>
                <ul className="space-y-4 mb-8 grow">
                  {group.docs.map((doc, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-400 items-start">
                       <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                       {doc}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full text-xs" size="sm">
                   <Download className="w-4 h-4 mr-2" />
                   Download PDF Checklist
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="bg-primary/40 border-secondary/20 p-10 flex flex-col md:flex-row items-center gap-10">
           <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
              <Lock className="w-10 h-10" />
           </div>
           <div>
              <h4 className="text-2xl font-display font-bold text-white mb-2">Secure Document Handling</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                We take your privacy seriously. All documents shared with Amoha Associates are handled with the highest level of confidentiality and are only shared with authorized bank officials for the purpose of your loan application.
              </p>
           </div>
           <div className="md:ml-auto">
              <Link to="/contact">
                <Button>Speak to Advisor</Button>
              </Link>
           </div>
        </Card>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
