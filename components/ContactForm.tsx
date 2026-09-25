"use client";

import { useState, FormEvent, ChangeEvent } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function validate(): boolean {
    const newErrors: Partial<FormValues> = {};

    if (!values.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!values.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!values.message.trim()) {
      newErrors.message = "Please enter a message.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!validate()) {
      return;
    }

    console.log("Contact form submitted:", values);

    setSubmitted(true);
    setValues(initialValues);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {submitted && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg text-sm font-medium">
          Thank you! Your message has been received. We will get back to you
          soon.
        </div>
      )}

      <div>
        <label htmlFor="name" className="block font-semibold text-primary mb-2 text-sm">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          className="w-full px-3.5 py-3 border border-border-ui rounded-lg font-body text-base text-dark bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
        />
        {errors.name && <p className="text-red-600 text-xs md:text-sm mt-1.5 font-medium">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold text-primary mb-2 text-sm">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          className="w-full px-3.5 py-3 border border-border-ui rounded-lg font-body text-base text-dark bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
        />
        {errors.email && <p className="text-red-600 text-xs md:text-sm mt-1.5 font-medium">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block font-semibold text-primary mb-2 text-sm">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          className="w-full px-3.5 py-3 border border-border-ui rounded-lg font-body text-base text-dark bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
        />
        {errors.phone && <p className="text-red-600 text-xs md:text-sm mt-1.5 font-medium">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold text-primary mb-2 text-sm">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className="w-full px-3.5 py-3 border border-border-ui rounded-lg font-body text-base text-dark bg-white focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
        />
        {errors.message && <p className="text-red-600 text-xs md:text-sm mt-1.5 font-medium">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center py-3.5 px-8 rounded-lg font-semibold tracking-wide bg-secondary text-white hover:bg-secondary-dark hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
