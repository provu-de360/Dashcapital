"use client";

// ContactForm needs "use client" because it uses useState to manage
// form input values and validation errors.
// This is a frontend-only form: it does not send data anywhere yet.
// To connect it to email/a backend later, edit the handleSubmit function below.

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

    // NOTE: This form is frontend-only for now.
    // To actually send this data, connect it to an API route or a
    // third-party form service here.
    console.log("Contact form submitted:", values);

    setSubmitted(true);
    setValues(initialValues);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {submitted && (
        <p className="form-success">
          Thank you! Your message has been received. We will get back to you
          soon.
        </p>
      )}

      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p className="form-error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="form-error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="form-error">{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>

      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}
