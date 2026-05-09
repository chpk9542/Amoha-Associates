import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Search, ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const MOCK_BLOGS = [
  {
    id: '1',
    title: 'Top 10 Tips to Improve Your CIBIL Score Quickly',
    excerpt: 'Your credit score is the most critical factor in loan approval. Learn how to boost it in under 3 months...',
    category: 'Finance Tips',
    date: 'Oct 15, 2024',
    author: 'Adv. Ramesh Kumar',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Home Loan Interest Rates 2024: Bank Wise Comparison',
    excerpt: 'Comparing current ROI across HDFC, SBI, ICICI and other top lenders to help you pick the cheapest loan.',
    category: 'Market Trends',
    date: 'Oct 12, 2024',
    author: 'Financial Desk',
    image: 'https://images.unsplash.com/photo-1560518883-9b48c36ab45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Understanding Loan Against Property: Benefits & Risks',
    excerpt: 'Is pledging your house for a business loan a good idea? We break down everything you need to know.',
    category: 'Loan Guide',
    date: 'Oct 08, 2024',
    author: 'Amoha Advisory',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623abe5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Blog() {
  return (
    <div className="pt-24 bg-matte-black min-h-screen text-luxury-white pb-20">
      <Helmet>
        <title>Knowledge Center | Amoha Associates - Finance & Loan Blog</title>
        <meta name="description" content="Expert insights on home loans, interest rates, real estate trends, and CIBIL score improvements from India's top financial advisors." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 italic font-serif gold-gradient-text">Knowledge Center</h1>
              <p className="text-xl text-slate-400 font-light leading-relaxed">
                Stay updated with the latest trends in the Indian financial market, loan strategies, and tax saving tips.
              </p>
           </div>
           <div className="w-full md:w-80">
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                 <Input className="pl-12" placeholder="Search articles..." />
              </div>
           </div>
        </div>

        {/* Featured Post */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-20"
        >
          <Card className="p-0 overflow-hidden border-secondary/20 h-[500px] flex flex-col md:flex-row">
             <div className="w-full md:w-1/2 h-[300px] md:h-full">
                <img 
                  src={MOCK_BLOGS[0].image} 
                  alt="Featured" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer"
                  referrerPolicy="no-referrer"
                />
             </div>
             <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-4">{MOCK_BLOGS[0].category}</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                  {MOCK_BLOGS[0].title}
                </h2>
                <p className="text-slate-400 mb-8 font-light text-lg">{MOCK_BLOGS[0].excerpt}</p>
                <div className="flex items-center gap-6 mb-10">
                   <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <Calendar className="w-4 h-4" />
                      {MOCK_BLOGS[0].date}
                   </div>
                   <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <User className="w-4 h-4" />
                      {MOCK_BLOGS[0].author}
                   </div>
                </div>
                <Link to={`/blog/${MOCK_BLOGS[0].id}`}>
                  <Button size="lg" className="self-start">Read Article</Button>
                </Link>
             </div>
          </Card>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {MOCK_BLOGS.slice(1).map((blog, i) => (
             <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
             >
                <Card className="p-0 overflow-hidden h-full group hover:border-secondary/20 flex flex-col">
                   <div className="h-60 overflow-hidden relative">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                         {blog.category}
                      </div>
                   </div>
                   <div className="p-8 grow flex flex-col">
                      <div className="flex items-center gap-4 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-4">
                         <span>{blog.date}</span>
                         <span className="w-1 h-1 rounded-full bg-slate-700" />
                         <span>{blog.author}</span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-4 leading-snug group-hover:text-secondary transition-colors italic font-serif tracking-tight">
                        {blog.title}
                      </h3>
                      <p className="text-slate-400 text-sm font-light mb-8 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <Link to={`/blog/${blog.id}`} className="mt-auto inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-[0.2em] group/btn">
                         Continue Reading
                         <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                   </div>
                </Card>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
