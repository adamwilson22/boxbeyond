'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Tier = {
  id: string;
  title: string;
  price: string;
  trucks: string;
  features: string[];
};

const defaultTiers: Tier[] = [
  { id: 'studio', title: 'Studio Apartment', price: '779', trucks: '1 Truck included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { id: '1bhk', title: '1 BHK Apartment', price: '1,299', trucks: '1 Truck included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { id: '2bhk', title: '2 BHK Apartment', price: '1,699', trucks: '2 Trucks included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { id: '3bhk', title: '3 BHK Apartment', price: '2,879', trucks: '2 Trucks included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { id: '2bhk-villa', title: '2 BHK Villa', price: '2,199', trucks: '2 Trucks included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { id: '3bhk-villa', title: '3 BHK Villa', price: '3,425', trucks: '3 Trucks included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
];

export default function AdminPricingPage() {
  const [tiers, setTiers] = useState<Tier[]>(defaultTiers);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [adminKey, setAdminKey] = useState('');

  useEffect(() => {
    fetch('/api/pricing')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) setTiers(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const update = (i: number, field: keyof Tier, value: string | string[]) => {
    const next = [...tiers];
    (next[i] as Record<string, unknown>)[field] = value;
    setTiers(next);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (adminKey) headers['x-admin-key'] = adminKey;
    try {
      const res = await fetch('/api/pricing', {
        method: 'PUT',
        headers,
        body: JSON.stringify(tiers),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed');
      setMessage('Saved successfully.');
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Save failed.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 600 }}>Admin — Pricing</h1>
        <Link href="/" style={{ fontSize: '0.9rem', color: 'var(--muted-gold)' }}>← Back to site</Link>
      </div>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Update pricing tiers. They appear on the homepage and service pages. Set <code>ADMIN_SECRET</code> in .env and enter it below to protect updates.
      </p>

      <form onSubmit={handleSave}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.25rem', color: '#666' }}>Admin key (optional)</label>
          <input
            type="password"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            placeholder="If ADMIN_SECRET is set"
            style={{ padding: '0.5rem 0.75rem', width: '240px', border: '1px solid #ddd', borderRadius: '6px' }}
          />
        </div>

        {tiers.map((tier, i) => (
          <div
            key={tier.id}
            style={{
              border: '1px solid #eee',
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '1rem',
              background: '#fafafa',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '0.75rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#666' }}>Title</label>
                <input
                  value={tier.title}
                  onChange={(e) => update(i, 'title', e.target.value)}
                  style={{ display: 'block', width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: '#666' }}>Price (AED)</label>
                <input
                  value={tier.price}
                  onChange={(e) => update(i, 'price', e.target.value)}
                  style={{ display: 'block', width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
                />
              </div>
            </div>
            <div style={{ marginBottom: '0.75rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#666' }}>Trucks</label>
              <input
                value={tier.trucks}
                onChange={(e) => update(i, 'trucks', e.target.value)}
                placeholder="e.g. 1 Truck included"
                style={{ display: 'block', width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px' }}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.8rem', color: '#666' }}>Features (one per line)</label>
              <textarea
                value={(tier.features || []).join('\n')}
                onChange={(e) => update(i, 'features', e.target.value.split('\n').filter(Boolean))}
                rows={3}
                style={{ display: 'block', width: '100%', padding: '0.5rem', border: '1px solid #ddd', borderRadius: '6px', resize: 'vertical' }}
              />
            </div>
          </div>
        ))}

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
          <button
            type="submit"
            disabled={saving}
            className="btn btn-primary"
            style={{ padding: '0.75rem 1.5rem' }}
          >
            {saving ? 'Saving…' : 'Save pricing'}
          </button>
          {message && (
            <span style={{ fontSize: '0.9rem', color: message.startsWith('Saved') ? 'green' : '#c53030' }}>{message}</span>
          )}
        </div>
      </form>
    </div>
  );
}
