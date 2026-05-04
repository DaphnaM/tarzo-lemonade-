import Footer from '@/components/shared/Footer';

export const metadata = {
  title: 'Contact Us — Paw Policy',
  description: 'Get in touch with PawPolicy.pro for general inquiries, privacy requests, editorial questions, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-12 text-[#4A4A4A]">
        <p className="text-sm text-[var(--lemonade-gray)] mb-2">PawPolicy.pro</p>
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-sm text-[var(--lemonade-gray)] mb-8">Effective Date: May 3, 2026</p>

        <p className="mb-4 leading-relaxed">
          Thank you for visiting PawPolicy.pro. We value your feedback, questions, and concerns. Please use the information below to get in touch with us.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">General Inquiries</h2>
        <p className="mb-2 leading-relaxed">
          For general questions about our website, content, or services, please reach out to us:
        </p>
        <p className="mb-2 leading-relaxed">
          Email: <a className="text-[var(--accent)] hover:underline" href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
        </p>
        <p className="mb-4 leading-relaxed">Website: https://pawpolicy.pro</p>
        <p className="mb-4 leading-relaxed">We aim to respond to all inquiries within 2–3 business days.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Privacy &amp; Data Requests</h2>
        <p className="mb-2 leading-relaxed">
          If you have questions or requests related to your personal data, including requests to access, correct, delete, or opt out of the sale of your personal information, please contact our Privacy Team:
        </p>
        <p className="mb-4 leading-relaxed">
          Email: <a className="text-[var(--accent)] hover:underline" href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
        </p>
        <p className="mb-2 leading-relaxed">Please include the following information in your request:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>Your full name</li>
          <li>Your email address</li>
          <li>A description of your request</li>
          <li>The state or country you reside in (for applicable privacy law requests)</li>
        </ul>
        <p className="mb-4 leading-relaxed">
          We will respond to verifiable consumer requests within 45 days, or as required by applicable law.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Content &amp; Editorial Inquiries</h2>
        <p className="mb-4 leading-relaxed">
          For questions related to our pet policy content, editorial matters, or corrections, please email us with the subject line &quot;Editorial Inquiry&quot;:
        </p>
        <p className="mb-4 leading-relaxed">
          Email: <a className="text-[var(--accent)] hover:underline" href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Business &amp; Partnership Inquiries</h2>
        <p className="mb-4 leading-relaxed">
          Interested in partnering with us, advertising opportunities, or other business arrangements? We&apos;d love to hear from you:
        </p>
        <p className="mb-4 leading-relaxed">
          Email: <a className="text-[var(--accent)] hover:underline" href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
        </p>
        <p className="mb-4 leading-relaxed">Please include &quot;Partnership Inquiry&quot; in your subject line.</p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Technical Support</h2>
        <p className="mb-4 leading-relaxed">
          Experiencing a technical issue with our Site? Please describe the problem, your browser, device type, and any steps to reproduce the issue:
        </p>
        <p className="mb-4 leading-relaxed">
          Email: <a className="text-[var(--accent)] hover:underline" href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Mailing Address</h2>
        <p className="mb-1 leading-relaxed">PawPolicy.pro</p>
        <p className="mb-1 leading-relaxed">https://pawpolicy.pro</p>
        <p className="mb-4 leading-relaxed">
          Email: <a className="text-[var(--accent)] hover:underline" href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">Response Times</h2>
        <p className="mb-2 leading-relaxed">We make every effort to respond to all messages promptly. Please allow:</p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>General Inquiries: 2–3 business days</li>
          <li>Privacy &amp; Data Requests: Up to 45 days (as required by law)</li>
          <li>Editorial &amp; Technical: 3–5 business days</li>
          <li>Business &amp; Partnership: 5–7 business days</li>
        </ul>

        <p className="text-sm text-[var(--lemonade-gray)] mt-12">Last Updated: May 3, 2026</p>
      </article>
      <Footer />
    </main>
  );
}
