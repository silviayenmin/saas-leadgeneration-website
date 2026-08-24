export interface ContactFormData {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  consent?: boolean;
}

export type SubjectOption =
  | 'General Inquiry'
  | 'Product Question'
  | 'Pricing'
  | 'Partnership'
  | 'Technical Question'
  | 'Other';

export interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: string;
}
