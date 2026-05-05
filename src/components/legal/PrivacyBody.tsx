import { bodyStyles } from './styles';
import type { LegalTheme } from './variants';

export default function PrivacyBody({ theme }: { theme: LegalTheme }) {
  const s = bodyStyles(theme);
  return (
    <>
      <p className={s.p}>
        This Privacy Policy describes how PawPolicy.pro (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares information about you when you visit or use our website located at https://pawpolicy.pro (the &quot;Site&quot;). By accessing or using our Site, you agree to this Privacy Policy.
      </p>

      <h2 className={s.h2}>1. Information We Collect</h2>
      <p className={s.p}>
        We collect information you provide directly to us, information collected automatically, and information from third parties.
      </p>
      <p className={s.pBold}>Information you provide:</p>
      <ul className={s.ul}>
        <li>Name, email address, and contact details when you fill out forms or contact us</li>
        <li>Comments, feedback, or other content you submit</li>
        <li>Any other information you choose to provide</li>
      </ul>
      <p className={s.pBold}>Information collected automatically:</p>
      <ul className={s.ul}>
        <li>Log data including your IP address, browser type, pages visited, and time spent</li>
        <li>Device information such as hardware model, operating system, and unique device identifiers</li>
        <li>Cookies and similar tracking technologies (see Section 5)</li>
        <li>Usage data including links clicked, search queries, and referral URLs</li>
      </ul>

      <h2 className={s.h2}>2. How We Use Your Information</h2>
      <p className={s.pTight}>We use the information we collect to:</p>
      <ul className={s.ul}>
        <li>Provide, maintain, and improve our Site and services</li>
        <li>Respond to your comments, questions, and requests</li>
        <li>Send you technical notices, updates, and administrative messages</li>
        <li>Monitor and analyze trends, usage, and activities in connection with our Site</li>
        <li>Detect, prevent, and address fraud and other illegal activities</li>
        <li>Comply with legal obligations</li>
        <li>Personalize your experience and deliver content relevant to your interests</li>
      </ul>

      <h2 className={s.h2}>3. Sharing of Information</h2>
      <p className={s.pTight}>We may share your information in the following circumstances:</p>
      <ul className={s.ul}>
        <li>With service providers who assist us in operating our Site and conducting our business, subject to confidentiality obligations</li>
        <li>In connection with a merger, sale, or acquisition of all or a portion of our business</li>
        <li>In response to a request for information if we believe disclosure is in accordance with applicable law</li>
        <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of us or others</li>
        <li>With your consent or at your direction</li>
      </ul>
      <p className={s.p}>We do not sell your personal information to third parties.</p>

      <h2 className={s.h2}>4. Data Retention</h2>
      <p className={s.p}>
        We retain personal information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we securely delete or anonymize it.
      </p>

      <h2 className={s.h2}>5. Cookies and Tracking Technologies</h2>
      <p className={s.p}>
        We use cookies and similar tracking technologies to collect and track information and to improve and analyze our Site. Cookies are small data files stored on your device. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our Site may not function properly.
      </p>
      <p className={s.pTight}>We use the following types of cookies:</p>
      <ul className={s.ul}>
        <li>Essential cookies: Required for the operation of our Site</li>
        <li>Analytics cookies: Help us understand how visitors interact with our Site</li>
        <li>Advertising cookies: Used to deliver relevant advertisements</li>
      </ul>

      <h2 className={s.h2}>6. Third-Party Links</h2>
      <p className={s.p}>
        Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review the privacy policies of any third-party sites you visit.
      </p>

      <h2 className={s.h2}>7. Children&apos;s Privacy</h2>
      <p className={s.p}>
        Our Site is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us at <a className={s.link} href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a> so we can promptly delete it.
      </p>

      <h2 className={s.h2}>8. Security</h2>
      <p className={s.p}>
        We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of your information.
      </p>

      <h2 className={s.h2}>9. Your Rights</h2>
      <p className={s.pTight}>
        Depending on your location, you may have certain rights regarding your personal information, including:
      </p>
      <ul className={s.ul}>
        <li>The right to access the personal information we hold about you</li>
        <li>The right to request correction of inaccurate personal information</li>
        <li>The right to request deletion of your personal information</li>
        <li>The right to opt out of the sale or sharing of your personal information</li>
        <li>The right to non-discrimination for exercising your privacy rights</li>
      </ul>
      <p className={s.p}>
        To exercise any of these rights, please contact us at <a className={s.link} href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>.
      </p>

      <h2 className={s.h2}>10. Changes to This Privacy Policy</h2>
      <p className={s.p}>
        We may update this Privacy Policy from time to time. If we make material changes, we will notify you by updating the effective date at the top of this policy. Your continued use of our Site after any changes constitutes your acceptance of the new Privacy Policy.
      </p>

      <h2 className={s.h2}>11. Contact Us</h2>
      <p className={s.pTight}>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p className="mb-1 leading-relaxed">PawPolicy.pro</p>
      <p className="mb-1 leading-relaxed">
        Email: <a className={s.link} href="mailto:contact@pawpolicy.pro">contact@pawpolicy.pro</a>
      </p>
      <p className={s.p}>Website: https://pawpolicy.pro</p>
    </>
  );
}
