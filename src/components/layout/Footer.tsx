import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex flex-col mb-6">
            <span className="font-display font-bold text-3xl tracking-tighter text-white">AMOHA</span>
            <span className="text-xs tracking-[0.3em] font-medium text-secondary uppercase">Associates</span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Your trusted partner in financial solutions. We specialize in all types of loans, mortgage solutions, and real estate financial advisory services across India.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-6 text-white text-secondary">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-secondary transition-colors">Our Services</Link></li>
            <li><Link to="/banks" className="hover:text-secondary transition-colors">Bank Partners</Link></li>
            <li><Link to="/calculator" className="hover:text-secondary transition-colors">EMI Calculator</Link></li>
            <li><Link to="/blog" className="hover:text-secondary transition-colors">Knowledge Center</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-6 text-white text-secondary">Our Services</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/services?type=home-loan" className="hover:text-secondary transition-colors">Home Loans</Link></li>
            <li><Link to="/services?type=lap" className="hover:text-secondary transition-colors">Mortgage Loans</Link></li>
            <li><Link to="/services?type=business-loan" className="hover:text-secondary transition-colors">Business Loans</Link></li>
            <li><Link to="/services?type=personal-loan" className="hover:text-secondary transition-colors">Personal Loans</Link></li>
            <li><Link to="/services?type=commercial-loan" className="hover:text-secondary transition-colors">Commercial Loans</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-lg mb-6 text-white text-secondary">Contact Us</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0" />
              <span>Amoha Associates, Financial District, Gachibowli, Hyderabad - 500032</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <span>+91 91234 56789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <span>contact@amohaassociates.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
        <p>© 2026 Amoha Associates. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 mt-6 text-[10px] text-slate-600 leading-relaxed text-center">
        Disclaimer: Amoha Associates is a financial consultancy firm and an authorized channel partner for various Banks and NBFCs. We do not charge any processing fee directly from the customers. Approval of loans is at the sole discretion of the respective banks/NBFCs. RBI License info...
      </div>
    </footer>
  );
}
