"use client";

import { useState } from "react";

interface FormState {
  university: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  message: string;
}

const roleOptions = [
  "University Administrator",
  "Student Union Officer",
  "Faculty / Department Head",
  "IT / Technical Staff",
  "Other",
];

export default function PartnerForm() {
  const [form, setForm] = useState<FormState>({
    university: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.university.trim()) e.university = "Required";
    if (!form.name.trim()) e.name = "Required";
    if (!form.role) e.role = "Required";
    if (!form.email.trim()) {
      e.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address";
    }
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // TODO: Wire up to your backend / form service
    setSubmitted(true);
  };

  const field = (name: keyof FormState) => ({
    value: form[name],
    onChange: (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((f) => ({ ...f, [name]: e.target.value }));
      if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
    },
  });

  if (submitted) {
    return (
      <div className="bg-primary-light border border-primary-light rounded-2xl p-10 text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-light text-primary mb-5">
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Application received!
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Thanks for reaching out. Our partnerships team will review your
          application and be in touch within 2 working days.
        </p>
      </div>
    );
  }

  const inputClass = (name: keyof FormState) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition ${
      errors[name]
        ? "border-red-300 bg-red-50"
        : "border-gray-200 bg-white hover:border-gray-300"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* University */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            University name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. University of Manchester"
            className={inputClass("university")}
            {...field("university")}
          />
          {errors.university && (
            <p className="text-red-500 text-xs mt-1">{errors.university}</p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Full name"
            className={inputClass("name")}
            {...field("name")}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Your role <span className="text-red-500">*</span>
          </label>
          <select
            className={`${inputClass("role")} cursor-pointer`}
            {...field("role")}
          >
            <option value="">Select a role</option>
            {roleOptions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
          {errors.role && (
            <p className="text-red-500 text-xs mt-1">{errors.role}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Work email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="you@university.ac.uk"
            className={inputClass("email")}
            {...field("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone{" "}
            <span className="text-gray-400 font-normal">(optional)</span>
          </label>
          <input
            type="tel"
            placeholder="+44 7700 000000"
            className={inputClass("phone")}
            {...field("phone")}
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            How do you plan to use Yupzee?{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your university, your student body, and what you're hoping to achieve with Yupzee..."
            className={`${inputClass("message")} resize-none`}
            {...field("message")}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
      >
        Submit application
      </button>

      <p className="text-xs text-gray-400 text-center">
        By submitting, you agree to our{" "}
        <a href="/legal/privacy" className="underline hover:text-gray-600">
          Privacy Policy
        </a>
        . We&apos;ll be in touch within 2 working days.
      </p>
    </form>
  );
}
