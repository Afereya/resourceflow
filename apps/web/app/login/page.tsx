"use client";
import { type SubmitEvent, useState } from "react";

type LoginFormErrors = {
  email?: string;
  password?: string;
};

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginFormErrors>({});

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: LoginFormErrors = {};
    const normalizedEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!normalizedEmail) {
      nextErrors.email = "Email is required";
    } else if (!normalizedEmail.includes("@")) {
      nextErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      nextErrors.password = "Password is required";
    } else if (password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters long";
    } else if (!emailPattern.test(normalizedEmail)) {
      nextErrors.email = "Please enter a valid email address";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-950">
      <section className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">Sign in to ResourceFlow</h1>
        <p className="mt-2 text-sm text-slate-600">
          Manage team capacity and project allocation.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="email">Email</label>
            <input
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={errors.password ? "password-error" : undefined}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p id="password-error" className="mt-1 text-sm text-red-600">
                {errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-slate-900 px-4 py-2 text-white"
          >
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
