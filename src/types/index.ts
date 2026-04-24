export interface ContactInfo {
  telegram: string;
  email: string;
  telegramHandle: string;
}

export interface Competency {
  title: string;
  items: string[];
  icon: string;
  large?: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  features: string[];
  role: string[];
  images: string[];
  accentColor: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  contacts: ContactInfo;
  competencies: Competency[];
  cases: CaseStudy[];
}
