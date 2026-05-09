import { collection, addDoc, serverTimestamp, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';
import { Lead, LeadStatus } from '../types';

export const createLead = async (leadData: Omit<Lead, 'id' | 'status' | 'createdAt' | 'updatedAt'>) => {
  try {
    const docRef = await addDoc(collection(db, 'leads'), {
      ...leadData,
      status: LeadStatus.NEW,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating lead:", error);
    throw error;
  }
};

export const getBlogPosts = async () => {
  try {
    const q = query(collection(db, 'blog'), orderBy('publishedAt', 'desc'), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
};
