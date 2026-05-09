export enum EmploymentType {
  SALARIED = 'Salaried',
  SELF_EMPLOYED = 'Self-employed',
  BUSINESS = 'Business'
}

export enum LeadStatus {
  NEW = 'New',
  CONTACTED = 'Contacted',
  QUALIFIED = 'Qualified',
  CONVERTED = 'Converted',
  LOST = 'Lost'
}

export interface Lead {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  city: string;
  loanType: string;
  income?: number;
  employmentType?: EmploymentType;
  propertyValue?: number;
  existingObligations?: number;
  status: LeadStatus;
  createdAt: any; // Firestore Timestamp
  updatedAt: any; // Firestore Timestamp
}

export interface Bank {
  id: string;
  name: string;
  logo: string;
  interestRateRange: string;
  processingFee: string;
  approvalSpeed: string;
  bestFor: string[];
}

export interface LoanService {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  fullDescription: string;
  eligibility: string[];
  documents: string[];
  benefits: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  featuredImage: string;
  publishedAt: any;
  createdAt: any;
}
