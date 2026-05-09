import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Banks', path: '/banks' },
    { name: 'EMI Calculator', path: '/calculator' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-matte-black/90 backdrop-blur-lg py-3 border-b border-white/10' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">AMOHA</span>
          <span className="text-[10px] tracking-[0.3em] font-medium text-secondary -mt-1 uppercase">Associates</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-secondary ${location.pathname === link.path ? 'text-secondary' : 'text-slate-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <Button size="sm" onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}>
            <MessageSquare className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-matte-black border-b border-white/10 px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium ${location.pathname === link.path ? 'text-secondary' : 'text-white'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3">
              <Button onClick={() => window.open('tel:+91XXXXXXXXXX', '_blank')} variant="outline">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}>
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
