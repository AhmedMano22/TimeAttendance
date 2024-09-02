export interface ProfessionalData {
    experience: string;
    licenseNumber: string;
    specialization: string;
    licenseExpirationDate: string;
    licenseCertificate: string;
    degrees: string[];
    awards: Award[];
}
  
export interface Award {
    title: string;
    year: number;
    issuer: string;
}

export interface BankingData {
    bankName: string;
    accountName: string;
    bankCountry: string;
    accountNumber: string;
    IBAN: string;
}

export interface TaxData {
    taxNumber: string;
    taxpayerName: string;
    taxCertificate: string;
}

export interface EducationData {
    educationalQualification: string;
    academicSpecialization: string;
    academicCertificate: string;
}

export interface PeriodsData {
    days: string;
    times: string;
}

export interface Consultant {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    gender: string;
    birthDate: Date;
    nationality: string;
    img: string;
    bio: string;
    professionalData: ProfessionalData;
    bankingData: BankingData;
    taxData: TaxData;
    educationData: EducationData;
    periodsData: PeriodsData;
}