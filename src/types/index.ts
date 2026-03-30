export type Language = 'en' | 'ta' | 'ml';

export interface Course {
    id: string;
    name: string;
    duration: string;
    eligibility: string;
    startDate: string;
    semesterFee: string;
    seatBlockingFee: number;
}

export interface EnquiryFormData {
    name: string;
    mobile: string;
    preferredTime?: string;
    courseId: string;
}

export interface SeatBlockFormData {
    studentName: string;
    mobile: string;
    email: string;
    gender: 'Male' | 'Female' | 'Other';
    parentName?: string;
    parentMobile?: string;
}
