import SectionHeader from '../../components/SectionHeader';

export const metadata = {
  title: 'Terms and Conditions | BE ACT Foundation'
};

export default function TermsAndConditions() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <SectionHeader
        title="Terms and Conditions"
        eyebrow="Legal"
        subtitle="Guidelines for using the BE ACT Foundation website."
      />

      <div className="space-y-8 bg-white shadow-lg rounded-3xl p-8 text-act-green">
        <p className="leading-relaxed text-lg">
          These Terms and Conditions govern the use of the BE ACT Foundation website, operated under Bhagwati Educational and Charitable
          Trust. By accessing or using the website, you agree to comply with these Terms. If you do not agree, please discontinue use of the
          site.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">1. Acceptance of Terms</h2>
          <p className="leading-relaxed text-lg">
            By visiting, accessing or using this website, you acknowledge that you have read, understood and accepted these Terms and
            Conditions. These terms apply to all users, including visitors, beneficiaries, donors, volunteers, partners and any individual
            interacting with the website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">2. Purpose of the Website</h2>
          <p className="leading-relaxed text-lg">The website serves as an informational and engagement platform for:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>Sharing details about the foundation’s programs and initiatives</li>
            <li>Providing updates, announcements and reports</li>
            <li>Offering ways to participate, volunteer or contribute</li>
            <li>Facilitating communication with the organisation</li>
          </ul>
          <p className="leading-relaxed text-lg">The website is not intended for commercial use.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">3. Eligibility</h2>
          <p className="leading-relaxed text-lg">
            You must be at least 18 years of age to engage in activities such as donations, volunteer registrations or form submissions. Users
            below 18 may access the website only under parental or guardian supervision.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">4. User Responsibilities</h2>
          <p className="leading-relaxed text-lg">By using this website, you agree that:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>You will provide accurate and authentic information</li>
            <li>You will not engage in any activity that harms the website or its users</li>
            <li>You will not attempt to hack, disrupt or misuse any system or data</li>
            <li>You will not upload unlawful, abusive or misleading content</li>
            <li>You will comply with local, state and national laws</li>
            <li>Any misuse may result in restricted access or legal action.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">5. Donations and Payments</h2>
          <p className="leading-relaxed text-lg">If donations or contributions are accepted through this website:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>All transactions must be made using genuine and authorised payment methods</li>
            <li>Donation receipts may be issued as per existing tax norms</li>
            <li>The foundation is not liable for payment failures caused by banks, payment gateways or user error</li>
            <li>Refunds, if permitted, will follow the foundation’s donation policy</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">6. Intellectual Property Rights</h2>
          <p className="leading-relaxed text-lg">All content on the website, including:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>Text</li>
            <li>Images</li>
            <li>Graphics</li>
            <li>Logos</li>
            <li>Program descriptions</li>
            <li>Reports</li>
            <li>Layout and design</li>
          </ul>
          <p className="leading-relaxed text-lg">
            is the property of BE ACT Foundation or its licensors.
            <br />
            Users may not copy, reproduce, distribute or modify any content without written permission.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">7. Third Party Links</h2>
          <p className="leading-relaxed text-lg">The website may contain links to external websites for reference or convenience.</p>
          <p className="leading-relaxed text-lg">We are not responsible for:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>The content</li>
            <li>Privacy practices</li>
            <li>Security</li>
            <li>Accuracy</li>
          </ul>
          <p className="leading-relaxed text-lg">of any third party website. Users are advised to review their terms independently.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">8. Data Privacy</h2>
          <p className="leading-relaxed text-lg">
            Any personal information submitted through the website will be handled in accordance with our Privacy Policy.
            <br />
            By using the website, you consent to the collection and processing of data as described.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">9. Website Availability</h2>
          <p className="leading-relaxed text-lg">We strive to keep the website functional at all times. However, we do not guarantee:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>Uninterrupted access</li>
            <li>Error-free performance</li>
            <li>Immediate rectification of technical issues</li>
          </ul>
          <p className="leading-relaxed text-lg">The foundation is not responsible for downtime, server errors, or technical limitations beyond our control.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">10. Limitation of Liability</h2>
          <p className="leading-relaxed text-lg">BE ACT Foundation is not responsible for:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>Any loss of data</li>
            <li>Technical failures</li>
            <li>Damages resulting from use or inability to use the website</li>
            <li>Inaccuracies or omissions in content</li>
            <li>Actions taken based on website information</li>
          </ul>
          <p className="leading-relaxed text-lg">Users access the website at their own risk.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">11. Indemnification</h2>
          <p className="leading-relaxed text-lg">
            By using this website, you agree to indemnify and hold harmless:
            <br />
            BE ACT Foundation
            <br />
            Bhagwati Educational and Charitable Trust
            <br />
            Its trustees, employees, volunteers and partners
            <br />
            from any claims, damages, losses or liabilities arising from your misuse of the website or violation of these Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">12. Changes to Terms</h2>
          <p className="leading-relaxed text-lg">
            The foundation reserves the right to update or modify these Terms and Conditions at any time without prior notice.
            <br />
            Continued use of the website after updates constitutes acceptance of the revised Terms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">13. Governing Law</h2>
          <p className="leading-relaxed text-lg">
            These Terms and Conditions are governed by the laws applicable in India.
            <br />
            Any disputes shall be subject to the jurisdiction of the courts located in the relevant district of registration.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">14. Contact Information</h2>
          <p className="leading-relaxed text-lg">For questions or concerns regarding these Terms, contact:</p>
          <p className="leading-relaxed text-lg">
            BE ACT Foundation
            <br />
            Bhagwati Educational and Charitable Trust
            <br />
            Email: beacthazaribagh@gmail.com
            <br />
            Phone: 9122289578
            <br />
            Address: Hazaribagh ,Jharkhand
          </p>
        </section>
      </div>
    </div>
  );
}
