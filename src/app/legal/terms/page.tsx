import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing your use of the Yupzee app and website.",
};

const sections = [
  {
    title: "1. About these terms",
    content:
      'These Terms & Conditions (\u201cTerms\u201d) govern your access to and use of Yupzee, operated by Yupzee Ltd (\u201cwe\u201d, \u201cus\u201d, \u201cour\u201d). By creating an account or using Yupzee, you agree to be bound by these Terms. If you do not agree, please do not use the service.',
  },
  {
    title: "2. Eligibility",
    content:
      "You must be at least 16 years old and a current or prospective student, staff member, or official representative of a university to use Yupzee. You must provide a valid university email address to register. You are responsible for ensuring that your use of Yupzee complies with any policies set by your university.",
  },
  {
    title: "3. Your account",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately if you suspect unauthorised access to your account. We reserve the right to suspend or terminate accounts that violate these Terms.",
  },
  {
    title: "4. Acceptable use",
    content:
      "You agree not to: post content that is illegal, harmful, threatening, abusive, defamatory, or invasive of another's privacy; impersonate any person or entity; spam, harass, or harm other users; use the service for commercial purposes without our consent; attempt to gain unauthorised access to any part of the service; or violate any applicable laws or regulations.",
  },
  {
    title: "5. User content",
    content:
      "You retain ownership of content you post on Yupzee. By posting content, you grant Yupzee a non-exclusive, royalty-free, worldwide licence to use, display, and distribute that content in connection with operating the service. You are solely responsible for the content you post and its compliance with applicable laws.",
  },
  {
    title: "6. Intellectual property",
    content:
      "The Yupzee name, logo, app, and website are owned by Yupzee Ltd and protected by intellectual property laws. You may not copy, modify, distribute, or create derivative works from our intellectual property without our prior written consent.",
  },
  {
    title: "7. Third-party links and content",
    content:
      "Yupzee may contain links to third-party websites or services. We are not responsible for the content or privacy practices of those third parties. Links do not imply endorsement.",
  },
  {
    title: "8. Disclaimers",
    content:
      "Yupzee is provided 'as is' without warranties of any kind, express or implied. We do not guarantee that the service will be uninterrupted, error-free, or secure. Job listings and events are provided by third parties and we make no warranties regarding their accuracy.",
  },
  {
    title: "9. Limitation of liability",
    content:
      "To the maximum extent permitted by law, Yupzee Ltd shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability to you for any claims shall not exceed £100.",
  },
  {
    title: "10. Governing law",
    content:
      "These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
  },
  {
    title: "11. Changes to these terms",
    content:
      "We may update these Terms from time to time. We will notify you of significant changes via the app or email. Your continued use of Yupzee after changes are posted constitutes acceptance of the updated Terms.",
  },
  {
    title: "12. Contact",
    content:
      "For any questions about these Terms, please contact us at hello@yupzee.com.",
  },
];

export default function TermsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">
            Legal
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-500 text-sm">Last updated: 1 March 2026</p>
        </div>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-10 text-base">
            Please read these Terms carefully before using Yupzee. These Terms
            form a legally binding agreement between you and Yupzee Ltd.
          </p>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  {s.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-base">
                  {s.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
