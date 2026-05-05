import { bodyStyles } from './styles';
import type { LegalTheme } from './variants';

export default function ContactBody({ theme }: { theme: LegalTheme }) {
  const s = bodyStyles(theme);
  return (
    <>
      <p className={s.p}>
        Thank you for visiting PawPolicy.pro. We value your feedback, questions, and concerns. Please use the information below to get in touch with us.
      </p>

      <h2 className={s.h2}>General Inquiries</h2>
      <p className={s.pTight}>
        For general questions about our website, content, or services, please reach out to us:
      </p>
      <p className={s.pTight}>
        Email: <a className={s.link} href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
      </p>
      <p className={s.p}>Website: https://pawpolicy.pro</p>
      <p className={s.p}>We aim to respond to all inquiries within 2–3 business days.</p>

      <h2 className={s.h2}>Privacy &amp; Data Requests</h2>
      <p className={s.pTight}>
        If you have questions or requests related to your personal data, including requests to access, correct, delete, or opt out of the sale of your personal information, please contact our Privacy Team:
      </p>
      <p className={s.p}>
        Email: <a className={s.link} href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
      </p>
      <p className={s.pTight}>Please include the following information in your request:</p>
      <ul className={s.ul}>
        <li>Your full name</li>
        <li>Your email address</li>
        <li>A description of your request</li>
        <li>The state or country you reside in (for applicable privacy law requests)</li>
      </ul>
      <p className={s.p}>
        We will respond to verifiable consumer requests within 45 days, or as required by applicable law.
      </p>

      <h2 className={s.h2}>Content &amp; Editorial Inquiries</h2>
      <p className={s.p}>
        For questions related to our pet policy content, editorial matters, or corrections, please email us with the subject line &quot;Editorial Inquiry&quot;:
      </p>
      <p className={s.p}>
        Email: <a className={s.link} href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
      </p>

      <h2 className={s.h2}>Business &amp; Partnership Inquiries</h2>
      <p className={s.p}>
        Interested in partnering with us, advertising opportunities, or other business arrangements? We&apos;d love to hear from you:
      </p>
      <p className={s.p}>
        Email: <a className={s.link} href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
      </p>
      <p className={s.p}>Please include &quot;Partnership Inquiry&quot; in your subject line.</p>

      <h2 className={s.h2}>Technical Support</h2>
      <p className={s.p}>
        Experiencing a technical issue with our Site? Please describe the problem, your browser, device type, and any steps to reproduce the issue:
      </p>
      <p className={s.p}>
        Email: <a className={s.link} href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
      </p>

      <h2 className={s.h2}>Mailing Address</h2>
      <p className="mb-1 leading-relaxed">PawPolicy.pro</p>
      <p className="mb-1 leading-relaxed">https://pawpolicy.pro</p>
      <p className={s.p}>
        Email: <a className={s.link} href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
      </p>

      <h2 className={s.h2}>Response Times</h2>
      <p className={s.pTight}>We make every effort to respond to all messages promptly. Please allow:</p>
      <ul className={s.ul}>
        <li>General Inquiries: 2–3 business days</li>
        <li>Privacy &amp; Data Requests: Up to 45 days (as required by law)</li>
        <li>Editorial &amp; Technical: 3–5 business days</li>
        <li>Business &amp; Partnership: 5–7 business days</li>
      </ul>

      <p className={`text-sm mt-12 ${s.meta}`}>Last Updated: May 3, 2026</p>
    </>
  );
}
