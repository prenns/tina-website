import { NextResponse } from 'next/server';

const BREVO_API_URL = 'https://api.brevo.com/v3/contacts';
const apiKey = process.env.BREVO_API_KEY;

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'E-Mail-Adresse wird benötigt.' },
        { status: 400 }
      );
    }

    if (!apiKey) {
      console.error('BREVO_API_KEY is not configured.');
      return NextResponse.json(
        { error: 'Server-Konfiguration ist unvollständig.' },
        { status: 500 }
      );
    }

    const brevoResponse = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
      }),
    });

    if (brevoResponse.status === 204) {
      return NextResponse.json({ status: 'updated' }, { status: 200 });
    }

    if (!brevoResponse.ok) {
      const errorPayload = await brevoResponse.json().catch(() => null);
      return NextResponse.json(
        {
          error:
            errorPayload?.message ||
            'Die Erstellung des Kontakts bei Brevo ist fehlgeschlagen.',
          details: errorPayload ?? undefined,
        },
        { status: brevoResponse.status }
      );
    }

    const data = await brevoResponse.json().catch(() => ({}));

    return NextResponse.json({ status: 'created', data }, { status: 201 });
  } catch (error) {
    console.error('Brevo contact creation failed:', error);
    return NextResponse.json(
      { error: 'Interner Serverfehler.' },
      { status: 500 }
    );
  }
}

