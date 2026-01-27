#!/usr/bin/env node
/**
 * Test script: Ahsan Feedback pointers
 * Run against dev server: npm run dev (then node scripts/test-feedback-pointers.mjs)
 * BASE_URL defaults to http://localhost:3000
 */

const BASE = process.env.BASE_URL || 'http://localhost:3000';

async function fetchHtml(path) {
  const url = path.startsWith('http') ? path : `${BASE}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${path} ${res.status}`);
  return res.text();
}

function has(html, ...strings) {
  return strings.every((s) => html.includes(s));
}

function missing(html, ...strings) {
  return strings.every((s) => !html.includes(s));
}

const results = [];

async function run() {
  console.log('\n--- Ahsan Feedback Pointers — E2E checks ---\n');
  console.log(`Base URL: ${BASE}\n`);

  try {
    // === HOME PAGE ===
    const home = await fetchHtml('/');
    results.push({ ok: has(home, 'Quote in 30 Mins'), msg: 'Hero: "Quote in 30 Mins" CTA' });
    results.push({ ok: has(home, 'Schedule Inspection'), msg: 'Hero: "Schedule Inspection" CTA' });
    results.push({ ok: has(home, 'Permit-to-Placement'), msg: 'Hero: Permit-to-Placement Coordination' });
    results.push({ ok: has(home, 'Trusted by 500+'), msg: 'Hero/Footer: Trusted by 500+ residents' });
    results.push({ ok: has(home, 'Care-First Handling'), msg: 'TrustLayer: Care-First Handling' });
    results.push({ ok: has(home, 'Protection first packaging') || has(home, 'protection first'), msg: 'TrustLayer: protection first packaging' });
    results.push({ ok: has(home, 'Trained Teams'), msg: 'TrustLayer: Trained Teams' });
    results.push({ ok: has(home, 'standard packing checklist'), msg: 'TrustLayer: standard packing checklist' });
    results.push({ ok: has(home, 'On-Time Arrival'), msg: 'TrustLayer: On-Time Arrival' });
    results.push({ ok: has(home, 'Transparent Scope'), msg: 'TrustLayer: Transparent Scope' });
    results.push({ ok: has(home, 'Clear inclusions'), msg: 'TrustLayer: Clear inclusions/exclusions' });
    results.push({ ok: has(home, 'Services curated'), msg: 'Services: "Services curated for you"' });
    results.push({ ok: has(home, 'Single Item Movement'), msg: 'Services: Single Item Movement' });
    results.push({ ok: has(home, 'Concierge Add-ons'), msg: 'Services: Concierge Add-ons' });
    results.push({ ok: has(home, 'Every move is different'), msg: 'QuoteSection: Every move is different' });
    results.push({ ok: has(home, "t guess") && has(home, "Every move is different"), msg: 'QuoteSection: we don\'t guess' });
    results.push({ ok: has(home, 'Tell us about your move'), msg: 'QuoteSection: Tell us about your move' });
    results.push({ ok: has(home, 'Chat with a Concierge'), msg: 'QuoteSection: Chat with a Concierge' });
    results.push({ ok: has(home, 'A better way to move'), msg: 'ProcessSection: A better way to move' });
    results.push({ ok: has(home, 'Transparent Pricing'), msg: 'Pricing: Transparent Pricing heading' });
    results.push({ ok: has(home, '779') && has(home, 'Studio'), msg: 'Pricing: Studio AED 779' });
    results.push({ ok: has(home, '1,299') && has(home, '1 BHK'), msg: 'Pricing: 1 BHK AED 1,299' });
    results.push({ ok: has(home, '1,699') && has(home, '2 BHK'), msg: 'Pricing: 2 BHK AED 1,699' });
    results.push({ ok: has(home, '2,879') && has(home, '3 BHK'), msg: 'Pricing: 3 BHK AED 2,879' });
    results.push({ ok: has(home, '2,199') && has(home, '2 BHK Villa'), msg: 'Pricing: 2 BHK Villa AED 2,199' });
    results.push({ ok: has(home, '3,425') && has(home, '3 BHK Villa'), msg: 'Pricing: 3 BHK Villa AED 3,425' });
    results.push({ ok: has(home, 'Truck included'), msg: 'Pricing: Truck included' });
    results.push({ ok: has(home, 'Concierge add-ons'), msg: 'Mid-page: Concierge add-ons (not cities/countries)' });
    results.push({ ok: has(home, 'Build Your Move-In Package'), msg: 'Mid-page: Build Your Move-In Package CTA' });
    results.push({ ok: has(home, 'href="/concierge-add-ons-dubai"'), msg: 'Mid-page: link to /concierge-add-ons-dubai' });
    results.push({ ok: has(home, 'Trust is earned'), msg: 'Testimonials: Trust is earned' });
    results.push({ ok: has(home, 'View All Google Reviews'), msg: 'Testimonials: View All Google Reviews' });
    results.push({ ok: has(home, 'Our commitment'), msg: 'Commitment: Our commitment to you' });
    results.push({ ok: has(home, 'Care-First Handling'), msg: 'Commitment: Care-First (not Damage-Free)' });
    results.push({ ok: has(home, "what's included") || (has(home, 'inclusions') && has(home, 'exclusions')), msg: 'Commitment: check what\'s included & exclusions' });
    results.push({ ok: missing(home, 'Damage-Free Guarantee'), msg: 'Commitment: NO Damage-Free Guarantee' });
    results.push({ ok: has(home, 'Tell us about your move'), msg: 'LeadCapture: Tell us about your move' });
    results.push({ ok: has(home, 'id="contact"'), msg: 'LeadCapture: #contact section exists' });
    results.push({ ok: missing(home, 'Premium moving services'), msg: 'Footer: NO "Premium moving services"' });
    results.push({ ok: has(home, 'Moving services across Dubai'), msg: 'Footer: Moving services across Dubai' });
    results.push({ ok: has(home, '4.9/5'), msg: 'Footer: 4.9/5 Google Reviews' });
    results.push({ ok: has(home, 'Instagram'), msg: 'Footer: Social (Instagram)' });
    results.push({ ok: has(home, 'Help') && has(home, 'Guides'), msg: 'Nav: Help & Guides' });
    results.push({ ok: has(home, 'wa.me/') && has(home, '971500000000'), msg: 'WhatsApp links use config number' });
    results.push({ ok: has(home, 'People') && has(home, 'trucks') && has(home, 'behind your move'), msg: 'Human element section' });
  } catch (e) {
    console.error('Home fetch failed:', e.message);
    process.exit(1);
  }

  // === SERVICE PAGES ===
  const routes = [
    ['/services/home-moving', 'Home Moving in Dubai', 'WhatsApp for a Quote', 'Request Callback', '/#contact'],
    ['/single-item-move-dubai', 'Single Item Moving in Dubai', 'Dubai only', 'Single item per booking'],
    ['/office-relocation-dubai', 'Office', 'Commercial', 'Request Corporate Quote', '/#contact'],
    ['/international-relocation-dubai', 'International', 'Request a Survey', '/#contact'],
    ['/secure-storage-dubai', 'Secure Storage', 'WhatsApp for Storage Quote', 'Request Callback', '/#contact'],
    ['/concierge-add-ons-dubai', 'Concierge Add-ons', 'WhatsApp to Build Your Move-In Package', 'Request Callback', 'Deep Cleaning', 'Home Painting', 'Pest Control'],
    ['/insurance-claims', 'Insurance', 'Claims', 'fahadhussain.fh95@gmail.com', 'WhatsApp Claims Support', 'Email Claims Support', 'care-first'],
    ['/moving-permit-building-access-dubai', 'Moving Day Access', 'Building Permit', 'WhatsApp for Move-Day Guidance', 'Request Callback'],
    ['/moving-permit-emaar-dubai', 'Emaar', 'WhatsApp for Emaar Move Guidance', 'Copy-paste', 'responsibility'],
  ];

  for (const [path, ...checks] of routes) {
    try {
      const html = await fetchHtml(path);
      for (const c of checks) {
        results.push({ ok: has(html, c), msg: `${path}: "${c.slice(0, 40)}${c.length > 40 ? '...' : ''}"` });
      }
    } catch (e) {
      results.push({ ok: false, msg: `${path}: fetch failed (${e.message})` });
    }
  }

  // === SECURE STORAGE: no "premium" ===
  try {
    const storage = await fetchHtml('/secure-storage-dubai');
    results.push({ ok: missing(storage, 'premium warehouse'), msg: 'Storage: NO "premium warehouse"' });
    results.push({ ok: has(storage, 'vetted') && has(storage, 'partner'), msg: 'Storage: vetted partner facilities' });
  } catch (e) {
    results.push({ ok: false, msg: 'Storage premium check: fetch failed' });
  }

  // === INSURANCE: full structure ===
  try {
    const ins = await fetchHtml('/insurance-claims');
    results.push({ ok: has(ins, 'Coverage Overview'), msg: 'Insurance: Coverage Overview' });
    results.push({ ok: has(ins, 'Typically Covered'), msg: 'Insurance: What\'s Typically Covered' });
    results.push({ ok: has(ins, 'Not Covered'), msg: 'Insurance: What\'s Not Covered' });
    results.push({ ok: has(ins, 'Declared Value'), msg: 'Insurance: Declared Value' });
    results.push({ ok: has(ins, 'On-the-Day Damage Protocol'), msg: 'Insurance: On-the-Day Damage Protocol' });
    results.push({ ok: has(ins, 'How to File a Claim'), msg: 'Insurance: How to File a Claim' });
    results.push({ ok: has(ins, 'Resolution Standards'), msg: 'Insurance: Resolution Standards' });
    results.push({ ok: has(ins, 'Tips to Prevent Issues'), msg: 'Insurance: Tips to Prevent Issues' });
    results.push({ ok: has(ins, 'Frequently Asked Questions'), msg: 'Insurance: FAQs' });
  } catch (e) {
    results.push({ ok: false, msg: 'Insurance structure check: fetch failed' });
  }

  // === ACCESS / EMAAR ===
  try {
    const access = await fetchHtml('/moving-permit-building-access-dubai');
    results.push({ ok: has(access, 'Why access planning matters'), msg: 'Access: Why access planning matters' });
    results.push({ ok: has(access, 'checklist'), msg: 'Access: checklist' });
    results.push({ ok: has(access, 'Towers'), msg: 'Access: Towers (community types)' });
    results.push({ ok: has(access, 'Villas'), msg: 'Access: Villas (community types)' });
  } catch (e) {
    results.push({ ok: false, msg: 'Access checks: fetch failed' });
  }

  try {
    const emaar = await fetchHtml('/moving-permit-emaar-dubai');
    results.push({ ok: has(emaar, 'Step-by-step'), msg: 'Emaar: Step-by-step' });
    results.push({ ok: has(emaar, 'Copy-paste messages'), msg: 'Emaar: Copy-paste messages' });
    results.push({ ok: has(emaar, 'Box') && has(emaar, 'Beyond'), msg: 'Emaar: Customer vs Box & Beyond' });
  } catch (e) {
    results.push({ ok: false, msg: 'Emaar checks: fetch failed' });
  }

  // === API & Admin ===
  try {
    const apiRes = await fetch(`${BASE}/api/pricing`);
    const apiData = await apiRes.json().catch(() => null);
    results.push({ ok: apiRes.ok && Array.isArray(apiData), msg: 'GET /api/pricing returns JSON array' });
  } catch (e) {
    results.push({ ok: false, msg: 'GET /api/pricing failed' });
  }
  try {
    const admin = await fetch(`${BASE}/admin/pricing`);
    results.push({ ok: admin.ok, msg: 'GET /admin/pricing returns 200' });
  } catch (e) {
    results.push({ ok: false, msg: 'GET /admin/pricing failed' });
  }

  // === REPORT ===
  const passed = results.filter((r) => r.ok).length;
  const failed = results.filter((r) => !r.ok);

  console.log(`Total: ${results.length}  Passed: ${passed}  Failed: ${failed.length}\n`);

  if (failed.length) {
    console.log('--- FAILED ---');
    failed.forEach((r) => console.log(`  ✗ ${r.msg}`));
    console.log('');
  }

  console.log('--- ALL CHECKS ---');
  results.forEach((r) => console.log(`  ${r.ok ? '✓' : '✗'} ${r.msg}`));
  console.log('');
  console.log('--- MANUAL (viewport) ---');
  console.log('  • Navbar: logo size, “Quote in 30 Mins” CTA');
  console.log('  • Mobile: hamburger menu, overlay with Home / Services / Help & Guides / CTA');
  console.log('  • Layout: Pricing above Add-ons block; spacing.');
  console.log('');

  process.exit(failed.length > 0 ? 1 : 0);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
