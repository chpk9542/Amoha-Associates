import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../services/firebase';
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import { Lead } from '../types';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Shield, LayoutDashboard, Users, FileText, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'leads'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setLeads(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Lead));
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = () => auth.signOut();

  if (loading) return <div className="pt-40 text-center">Loading...</div>;

  if (!user) {
    return (
      <div className="pt-40 min-h-screen flex items-center justify-center px-6">
        <Card className="max-w-md w-full p-10 text-center border-secondary/20">
          <Shield className="w-16 h-16 text-secondary mx-auto mb-6" />
          <h2 className="text-2xl font-display font-bold text-white mb-4">Admin Access</h2>
          <p className="text-slate-400 mb-8">Please sign in with your authorized Google account to access the CRM portal.</p>
          <Button onClick={handleLogin} className="w-full">Sign in with Google</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen bg-matte-black text-luxury-white px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
           <div>
              <h1 className="text-3xl font-display font-bold text-white">Lead Management System</h1>
              <p className="text-slate-500 text-sm italic">Authenticated as: {user.email}</p>
           </div>
           <Button variant="ghost" onClick={handleLogout} className="text-slate-400">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
           </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
           <Card className="p-6 border-white/5">
              <div className="flex justify-between items-start">
                 <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Total Leads</p>
                    <p className="text-3xl font-display font-bold text-white">{leads.length}</p>
                 </div>
                 <Users className="text-secondary w-5 h-5" />
              </div>
           </Card>
           <Card className="p-6 border-white/5">
              <div className="flex justify-between items-start">
                 <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">New Today</p>
                    <p className="text-3xl font-display font-bold text-white">
                      {leads.filter(l => {
                        const d = l.createdAt?.toDate();
                        return d && (new Date().getTime() - d.getTime()) < 86400000;
                      }).length}
                    </p>
                 </div>
                 <FileText className="text-secondary w-5 h-5" />
              </div>
           </Card>
        </div>

        {/* Lead Table */}
        <Card className="p-0 overflow-hidden border-white/10">
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead className="bg-white/5 border-b border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <tr>
                       <th className="px-6 py-4">Name</th>
                       <th className="px-6 py-4">Loan Type</th>
                       <th className="px-6 py-4">City</th>
                       <th className="px-6 py-4">Income</th>
                       <th className="px-6 py-4">Phone</th>
                       <th className="px-6 py-4">Status</th>
                       <th className="px-6 py-4">Created</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-white/5 transition-colors">
                         <td className="px-6 py-4 font-medium text-white">{lead.name}</td>
                         <td className="px-6 py-4 text-sm text-slate-400">{lead.loanType}</td>
                         <td className="px-6 py-4 text-sm text-slate-400">{lead.city}</td>
                         <td className="px-6 py-4 text-sm text-slate-400">₹{lead.income?.toLocaleString()}</td>
                         <td className="px-6 py-4 text-sm text-secondary font-bold">{lead.phone}</td>
                         <td className="px-6 py-4">
                            <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase">
                               {lead.status}
                            </span>
                         </td>
                         <td className="px-6 py-4 text-[10px] text-slate-500 font-bold uppercase">
                            {lead.createdAt?.toDate()?.toLocaleDateString()}
                         </td>
                      </tr>
                    ))}
                    {leads.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-6 py-20 text-center text-slate-500 italic">No leads found yet.</td>
                      </tr>
                    )}
                 </tbody>
              </table>
           </div>
        </Card>
      </div>
    </div>
  );
}
