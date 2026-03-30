'use client';

import React, { useState } from 'react';
import { content } from '@/data/content';
import { Drawer } from '@/components/ui/Drawer';
import { CheckCircle2 } from 'lucide-react';

interface DrawerCommonProps {
    isOpen: boolean;
    onClose: () => void;
    selectedProgram?: any;
}

const InputField = ({ label, placeholder, type = "text", value, onChange, error, name }: any) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#7C0201] focus:border-transparent outline-none transition-all placeholder:text-gray-300`}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

// Validation functions
const validateName = (name: string) => /^[A-Za-z\s]+$/.test(name);
const validateMobile = (mobile: string) => /^\d{10}$/.test(mobile);
const validateWhatsApp = (whatsapp: string) => !whatsapp || /^\d{10}$/.test(whatsapp); // optional but if provided must be 10 digits
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateAlphanumeric = (text: string) => /^[A-Za-z0-9\s]+$/.test(text);

export function BrochureDrawer({ isOpen, onClose, selectedProgram }: DrawerCommonProps) {
    const t = content.drawers.brochure;
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form state
    const [formData, setFormData] = useState({ name: '', mobile: '', whatsapp: '', email: '' });
    const [errors, setErrors] = useState<any>({});

    const title = t.title.en;
    const programName = selectedProgram?.title || selectedProgram?.name?.en || '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Clear error when user types
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: any = {};
        if (!formData.name) newErrors.name = "Name is required.";
        else if (!validateName(formData.name)) newErrors.name = "Only text and spaces allowed.";

        if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
        else if (!validateMobile(formData.mobile)) newErrors.mobile = "Must be a 10-digit number.";

        if (!validateWhatsApp(formData.whatsapp)) newErrors.whatsapp = "Must be a 10-digit number.";

        if (!formData.email) newErrors.email = "Email is required.";
        else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'brochure',
                    formData: { ...formData, program: programName }
                })
            });
            if (res.ok) {
                setSuccess(true);

                // Trigger auto download if we have a program name
                if (programName) {
                    // console.log("programName : ", programName);
                    const pdfUrl = `/pdfs/${encodeURIComponent(programName)}.pdf`;
                    // console.log("pdfUrl : ", pdfUrl);
                    const link = document.createElement('a');
                    link.href = pdfUrl;
                    link.download = `${encodeURIComponent(programName)}.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } else {
                    const pdfUrl = `/pdfs/MBA Brochure.pdf`;
                    const link = document.createElement('a');
                    link.href = pdfUrl;
                    link.download = `MBA Brochure.pdf`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }

                setTimeout(() => {
                    setSuccess(false);
                    setFormData({ name: '', mobile: '', whatsapp: '', email: '' });
                    onClose();
                }, 3000);
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Drawer isOpen={isOpen} onClose={onClose} title={title}>
            {success ? (
                <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{t.submit.en} Successful!</h3>
                    <p className="text-gray-600">{t.success.en}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    {programName && (
                        <div className="mb-4 p-3 bg-red-50 text-[#5C0000] rounded-md text-sm font-medium">
                            Requesting brochure for: {programName}
                        </div>
                    )}
                    <InputField name="name" value={formData.name} onChange={handleChange} error={errors.name} label={t.fields.name.label.en} placeholder={t.fields.name.placeholder.en} />
                    <InputField name="mobile" value={formData.mobile} onChange={handleChange} error={errors.mobile} label={t.fields.mobile.label.en} type="tel" />
                    <InputField name="whatsapp" value={formData.whatsapp} onChange={handleChange} error={errors.whatsapp} label={t.fields.whatsapp.label.en} type="tel" />
                    <InputField name="email" value={formData.email} onChange={handleChange} error={errors.email} label={t.fields.email.label.en} type="email" />
                    <button type="submit" disabled={loading} className="w-full bg-[#7C0201] text-white font-semibold py-3 rounded-lg hover:bg-[#5C0000] mt-2 disabled:bg-red-400">
                        {loading ? "Submitting..." : t.submit.en}
                    </button>
                </form>
            )}
        </Drawer>
    );
}

export function QuestionDrawer({ isOpen, onClose, selectedProgram }: DrawerCommonProps) {
    const t = content.drawers.question;
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form state
    const [formData, setFormData] = useState({ name: '', mobile: '', whatsapp: '', email: '', question: '' });
    const [errors, setErrors] = useState<any>({});

    const programName = selectedProgram?.title || selectedProgram?.name?.en || '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: any = {};
        if (!formData.name) newErrors.name = "Name is required.";
        else if (!validateName(formData.name)) newErrors.name = "Only text and spaces allowed.";

        if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
        else if (!validateMobile(formData.mobile)) newErrors.mobile = "Must be a 10-digit number.";

        if (!validateWhatsApp(formData.whatsapp)) newErrors.whatsapp = "Must be a 10-digit number.";

        if (!formData.email) newErrors.email = "Email is required.";
        else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format.";

        if (!formData.question) newErrors.question = "Question is required.";
        else if (!validateAlphanumeric(formData.question)) newErrors.question = "Only alphanumeric characters and spaces allowed.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'question',
                    formData: { ...formData, program: programName }
                })
            });
            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setFormData({ name: '', mobile: '', whatsapp: '', email: '', question: '' });
                    onClose();
                }, 3000);
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Drawer isOpen={isOpen} onClose={onClose} title={t.title.en}>
            {success ? (
                <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <p className="text-gray-600">{t.success.en}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <InputField name="name" value={formData.name} onChange={handleChange} error={errors.name} label={t.fields.name.label.en} />
                    <InputField name="mobile" value={formData.mobile} onChange={handleChange} error={errors.mobile} label={t.fields.mobile.label.en} type="tel" />
                    <InputField name="whatsapp" value={formData.whatsapp} onChange={handleChange} error={errors.whatsapp} label={t.fields.whatsapp.label.en} type="tel" />
                    <InputField name="email" value={formData.email} onChange={handleChange} error={errors.email} label={t.fields.email.label.en} type="email" />
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.fields.question.label.en}</label>
                        <textarea
                            name="question"
                            value={formData.question}
                            onChange={handleChange}
                            rows={3}
                            className={`w-full px-4 py-2 border ${errors.question ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-[#7C0201] outline-none`}
                        ></textarea>
                        {errors.question && <p className="text-red-500 text-xs mt-1">{errors.question}</p>}
                    </div>
                    <button type="submit" disabled={loading} className="w-full bg-[#7C0201] text-white font-semibold py-3 rounded-lg hover:bg-[#5C0000] mt-2 disabled:bg-red-400">
                        {loading ? "Submitting..." : t.submit.en}
                    </button>
                </form>
            )}
        </Drawer>
    );
}

export function CallbackDrawer({ isOpen, onClose, selectedProgram }: DrawerCommonProps) {
    const t = content.drawers.callback;
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form state
    const [formData, setFormData] = useState({ name: '', mobile: '', whatsapp: '', email: '', preferredTime: '' });
    const [errors, setErrors] = useState<any>({});

    const programName = selectedProgram?.title || selectedProgram?.name?.en || '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: any = {};
        if (!formData.name) newErrors.name = "Name is required.";
        else if (!validateName(formData.name)) newErrors.name = "Only text and spaces allowed.";

        if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
        else if (!validateMobile(formData.mobile)) newErrors.mobile = "Must be a 10-digit number.";

        if (!validateWhatsApp(formData.whatsapp)) newErrors.whatsapp = "Must be a 10-digit number.";

        if (!formData.email) newErrors.email = "Email is required.";
        else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format.";

        if (!formData.preferredTime) newErrors.preferredTime = "Preferred time is required.";
        else if (!validateAlphanumeric(formData.preferredTime)) newErrors.preferredTime = "Only alphanumeric characters and spaces allowed.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'callback',
                    formData: { ...formData, program: programName }
                })
            });
            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setFormData({ name: '', mobile: '', whatsapp: '', email: '', preferredTime: '' });
                    onClose();
                }, 3000);
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Drawer isOpen={isOpen} onClose={onClose} title={t.title.en}>
            {success ? (
                <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <p className="text-gray-600">{t.success.en}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <InputField name="name" value={formData.name} onChange={handleChange} error={errors.name} label={t.fields.name.label.en} />
                    <InputField name="mobile" value={formData.mobile} onChange={handleChange} error={errors.mobile} label={t.fields.mobile.label.en} type="tel" />
                    <InputField name="whatsapp" value={formData.whatsapp} onChange={handleChange} error={errors.whatsapp} label={t.fields.whatsapp.label.en} type="tel" />
                    <InputField name="email" value={formData.email} onChange={handleChange} error={errors.email} label={t.fields.email.label.en} type="email" />
                    <InputField name="preferredTime" value={formData.preferredTime} onChange={handleChange} error={errors.preferredTime} label={t.fields.time.label.en} />
                    <button type="submit" disabled={loading} className="w-full bg-[#7C0201] text-white font-semibold py-3 rounded-lg hover:bg-[#5C0000] mt-2 disabled:bg-red-400">
                        {loading ? "Submitting..." : t.submit.en}
                    </button>
                </form>
            )}
        </Drawer>
    );
}

export function ReserveSeatDrawer({ isOpen, onClose, selectedProgram }: DrawerCommonProps) {
    const t = content.drawers.reserve;
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form state
    const [formData, setFormData] = useState({ name: '', mobile: '', whatsapp: '', email: '' });
    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: any = {};
        if (!formData.name) newErrors.name = "Name is required.";
        else if (!validateName(formData.name)) newErrors.name = "Only text and spaces allowed.";

        if (!formData.mobile) newErrors.mobile = "Mobile number is required.";
        else if (!validateMobile(formData.mobile)) newErrors.mobile = "Must be a 10-digit number.";

        if (!validateWhatsApp(formData.whatsapp)) newErrors.whatsapp = "Must be a 10-digit number.";

        if (!formData.email) newErrors.email = "Email is required.";
        else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        try {
            const res = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'reserve',
                    // This is where "programName" caused reference errors because it wasn't defined.
                    formData: { ...formData, program: selectedProgram?.title || selectedProgram?.name?.en || '' }
                })
            });
            if (res.ok) {
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false);
                    setFormData({ name: '', mobile: '', whatsapp: '', email: '' });
                    onClose();
                }, 3000);
            } else {
                alert("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Submission failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (!selectedProgram) return null;

    const programName = selectedProgram.title || selectedProgram.name?.en || '';
    const programFee = selectedProgram.fee || 0;

    return (
        <Drawer isOpen={isOpen} onClose={onClose} title={t.title.en}>
            {success ? (
                <div className="text-center py-8">
                    <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Payment Successful!</h3>
                    <p className="text-gray-600">{t.success.message.en}</p>
                </div>
            ) : (
                <>
                    <div className="bg-red-50 p-4 rounded-lg mb-6 border border-red-100">
                        <div className="flex justify-between text-sm text-[#7C0201] font-medium mb-1">
                            <span>{t.summary.program.en}: {programName}</span>
                        </div>
                        <div className="flex justify-between text-sm text-[#7C0201] font-bold mb-1">
                            <span>{t.summary.fee.en}</span>
                            <span>₹{programFee.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="text-xs text-[#7C0201] mt-2">{t.helper.en}</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputField name="name" value={formData.name} onChange={handleChange} error={errors.name} label={t.fields.name.label.en} />
                        <InputField name="mobile" value={formData.mobile} onChange={handleChange} error={errors.mobile} label={t.fields.mobile.label.en} type="tel" />
                        <InputField name="whatsapp" value={formData.whatsapp} onChange={handleChange} error={errors.whatsapp} label={t.fields.whatsapp.label.en} type="tel" />
                        <InputField name="email" value={formData.email} onChange={handleChange} error={errors.email} label={t.fields.email.label.en} type="email" />
                        <button type="submit" disabled={loading} className="w-full bg-[#7C0201] text-white font-semibold py-3 rounded-lg hover:bg-[#5C0000] mt-2 disabled:bg-red-400">
                            {loading ? "Submitting..." : t.submit.en.replace('${amount}', `₹${programFee.toLocaleString('en-IN')}`)}
                        </button>
                    </form>
                </>
            )}
        </Drawer>
    );
}
