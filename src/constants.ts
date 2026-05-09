import { LoanService, Bank } from './types';

export const LOAN_SERVICES: LoanService[] = [
  {
    id: 'home-loan',
    title: 'Home Loans',
    shortDescription: 'Competitive rates for your dream home from top banks.',
    icon: 'Home',
    fullDescription: 'We provide comprehensive home loan solutions for purchasing new apartments, villas, plots, or individual houses. Our tie-ups with 30+ banks ensure you get the lowest interest rates.',
    eligibility: ['Age: 21-65 years', 'Min. Monthly Income: ₹25,000', 'Credit Score: 750+', 'At least 2 years of work experience'],
    documents: ['Identity Proof (PAN, Aadhaar)', 'Address Proof', 'Last 6 months Salary Slips', 'Last 2 years Form 16', 'Last 6 months Bank Statement'],
    benefits: ['Low Interest Rates', 'Flexible Repayment Tenure (up to 30 years)', 'Speedy Approval', 'Zero Prepayment Charges']
  },
  {
    id: 'lap',
    title: 'Loan Against Property (LAP)',
    shortDescription: 'Unlock the value of your property with ease.',
    icon: 'Building',
    fullDescription: 'Get funds for your business expansion or personal needs by pledging your residential or commercial property.',
    eligibility: ['Property must be in approved location', 'Age: 25-60 years', 'Regular source of income'],
    documents: ['Property Ownership Documents', 'Sanctioned Plan copy', 'Income tax returns (3 years)', 'Bank statements'],
    benefits: ['High Loan Amount', 'Lower interest than Personal Loans', 'Minimal Documentation']
  },
  {
    id: 'business-loan',
    title: 'Business Loans',
    shortDescription: 'Fuel your business growth with targeted funding.',
    icon: 'Briefcase',
    fullDescription: 'Specialized loans for SMEs, MSMEs, and large corporations for working capital, equipment purchase, or expansion.',
    eligibility: ['Business Vintage: 3+ years', 'Profitable for last 2 years', 'Annual Turnover: Above ₹40 Lakhs'],
    documents: ['Audit Reports', 'GST Returns', 'KYC of Promoters', 'Project Report'],
    benefits: ['Collateral-free options', 'Tax benefits', 'Customized repayment plans']
  },
  {
    id: 'personal-loan',
    title: 'Personal Loans',
    shortDescription: 'Unsecured loans for all your immediate needs.',
    icon: 'User',
    fullDescription: 'Instant funds for wedding, travel, medical emergencies, or debt consolidation without any collateral.',
    eligibility: ['Age: 21-60 years', 'Min Income: ₹30,000 for Tier 1 cities'],
    documents: ['KYC Docs', 'Income Proof'],
    benefits: ['Quick Disbursal', 'No Collateral required', 'Simple online process']
  },
  {
    id: 'commercial-loan',
    title: 'Commercial Loans',
    shortDescription: 'Funding for commercial properties and office spaces.',
    icon: 'Building2',
    fullDescription: 'Loans for buying shops, office spaces, warehouses, or commercial land.',
    eligibility: ['Standard commercial property norms', 'Financial stability of applicant'],
    documents: ['Commercial Property Sale Agreement', 'OC/CC certificate', 'Company documents'],
    benefits: ['Long tenure', 'Competitive rates']
  }
];

export const BANK_PARTNERS: Bank[] = [
  {
    id: 'hdfc',
    name: 'HDFC Bank',
    logo: 'https://companieslogo.com/img/orig/HDB-bb625779.png',
    interestRateRange: '8.40% - 10.50%',
    processingFee: '0.50% - 1%',
    approvalSpeed: '4-7 Days',
    bestFor: ['Home Loans', 'LAP', 'Savings']
  },
  {
    id: 'icici',
    name: 'ICICI Bank',
    logo: 'https://companieslogo.com/img/orig/IBN-9023475c.png',
    interestRateRange: '8.50% - 11.00%',
    processingFee: 'Up to 1.5%',
    approvalSpeed: '3-5 Days',
    bestFor: ['Private Banking', 'Commercial Loans']
  },
  {
    id: 'sbi',
    name: 'State Bank of India',
    logo: 'https://companieslogo.com/img/orig/SBIN.NS-6d43e5c9.png',
    interestRateRange: '8.25% - 9.50%',
    processingFee: 'Low/Nil',
    approvalSpeed: '7-12 Days',
    bestFor: ['Government Employees', 'Low Interest']
  },
  {
    id: 'axis',
    name: 'Axis Bank',
    logo: 'https://companieslogo.com/img/orig/AXISBANK.NS-9860b731.png',
    interestRateRange: '8.60% - 11.25%',
    processingFee: 'Flat Fee options',
    approvalSpeed: '5-8 Days',
    bestFor: ['Personal Loans', 'Home Loans']
  }
];

export const CITIES = [
  'Vijayawada', 'Guntur', 'Hyderabad', 'Visakhapatnam', 'Tirupati', 'Amaravati', 'Bengaluru', 'Chennai'
];
