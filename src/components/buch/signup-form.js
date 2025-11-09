'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SignupForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!email) {
      setError('Bitte gib deine E-Mail-Adresse ein.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/brevo/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message =
          data?.error ||
          data?.message ||
          'Etwas ist schief gelaufen. Bitte versuche es später erneut.';
        setError(message);
        return;
      }

      setIsSuccess(true);
    } catch (submitError) {
      setError('Etwas ist schief gelaufen. Bitte versuche es später erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-primary">
        Vielen Dank, dass du dabei bist! Wir melden uns bald mit Neuigkeiten in deinem Postfach.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <div className="w-full sm:w-auto">
          <Label htmlFor="subscribe-input" className="sr-only">
            E-mail Adresse
          </Label>
          <Input
            autoComplete="off" data-1p-ignore data-lpignore="true" data-protonpass-ignore="true"
            type="email"
            id="subscribe-input"
            name="subscribe-input"
            className="h-12 w-full rounded-md px-4 text-base sm:w-80"
            placeholder="Deine E-Mail-Adresse"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          className="h-12 w-full px-8 text-base sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Wird gesendet…' : 'Jetzt anmelden'}
        </Button>
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </form>
  );
}

