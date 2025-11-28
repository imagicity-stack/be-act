import SectionHeader from '../../components/SectionHeader';

export const metadata = {
  title: 'Donation and Refund Policy | BE ACT Foundation'
};

export default function DonationRefundPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <SectionHeader
        title="Donation and Refund Policy"
        eyebrow="Legal"
        subtitle="How contributions are handled with transparency and care."
      />

      <div className="space-y-8 bg-white shadow-lg rounded-3xl p-8 text-act-green">
        <p className="leading-relaxed text-lg">
          BE ACT Foundation, under Bhagwati Educational and Charitable Trust, is committed to maintaining transparency, accountability and
          ethical handling of all donations. This Donation and Refund Policy outlines the terms under which contributions are received,
          processed and, where applicable, refunded.
        </p>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">1. Nature of Donations</h2>
          <p className="leading-relaxed text-lg">All donations made to BE ACT Foundation are treated as voluntary contributions toward charitable and developmental activities.</p>
          <p className="leading-relaxed text-lg">Donations may support programs across:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>Education</li>
            <li>Healthcare</li>
            <li>Livelihood &amp; skill development</li>
            <li>Rural development</li>
            <li>Women empowerment</li>
            <li>Environmental initiatives</li>
            <li>Disaster relief</li>
            <li>Other community welfare projects</li>
          </ul>
          <p className="leading-relaxed text-lg">Donations may be received through:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>Online payment gateways</li>
            <li>Bank transfers</li>
            <li>Cheques</li>
            <li>Cash contributions (as permitted by law)</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">2. Use of Funds</h2>
          <p className="leading-relaxed text-lg">Funds received are utilised solely for charitable purposes. Based on project priorities and community needs, the foundation reserves the right to allocate donations to the most suitable and urgent initiatives.</p>
          <p className="leading-relaxed text-lg">Donors may specify a cause, but the foundation may reassign funds if required for operational efficiency or emergency relief.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">3. Donation Receipts</h2>
          <p className="leading-relaxed text-lg">Upon receiving a donation, the foundation will issue:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>An acknowledgment</li>
            <li>A tax-compliant receipt (if applicable)</li>
            <li>Details of the transaction</li>
          </ul>
          <p className="leading-relaxed text-lg">Donors must provide valid contact information for the issuance of receipts.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">4. Non Refundable Donations</h2>
          <p className="leading-relaxed text-lg">In general, all donations made to BE ACT Foundation are final and non refundable. This is because:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>Funds are immediately allocated to ongoing programs</li>
            <li>Operational planning depends on committed contributions</li>
            <li>Legal compliance requires accurate financial statements</li>
          </ul>
          <p className="leading-relaxed text-lg">Once a donation is processed, the foundation cannot reverse or withdraw the contribution.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">5. Exceptional Refund Cases</h2>
          <p className="leading-relaxed text-lg">Refunds may be considered only in the following specific circumstances:</p>
          <div className="space-y-3">
            <div>
              <h3 className="font-heading text-xl">a. Duplicate Payment</h3>
              <p className="leading-relaxed text-lg">If a donor accidentally makes more than one payment for the same contribution.</p>
            </div>
            <div>
              <h3 className="font-heading text-xl">b. Technical Payment Error</h3>
              <p className="leading-relaxed text-lg">If a payment gateway or banking error results in an unauthorised or incorrect transaction.</p>
            </div>
            <div>
              <h3 className="font-heading text-xl">c. Wrong Amount Debited</h3>
              <p className="leading-relaxed text-lg">If the amount deducted does not match the donor’s intended donation amount.</p>
            </div>
            <div>
              <h3 className="font-heading text-xl">d. Fraudulent or Unauthorised Transaction</h3>
              <p className="leading-relaxed text-lg">If the donor did not initiate or approve the transaction.</p>
            </div>
          </div>
          <p className="leading-relaxed text-lg">In such cases, donors must notify the foundation within 7 working days of the transaction.</p>
          <p className="leading-relaxed text-lg">Refund approval is subject to verification by the foundation and, if necessary, the payment gateway or bank.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">6. Refund Process</h2>
          <p className="leading-relaxed text-lg">To request a refund, donors must provide:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>Full name</li>
            <li>Registered email address</li>
            <li>Transaction date</li>
            <li>Amount donated</li>
            <li>Mode of payment</li>
            <li>Proof of duplicate or erroneous transaction</li>
          </ul>
          <p className="leading-relaxed text-lg">The foundation will review the request and respond within 10–15 working days.</p>
          <p className="leading-relaxed text-lg">If approved, refunds will be processed through the same mode of payment, subject to bank and gateway timelines.</p>
          <p className="leading-relaxed text-lg">The foundation is not responsible for delays outside its control.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">7. Cancellation of Recurring Donations</h2>
          <p className="leading-relaxed text-lg">If recurring donations are introduced and a donor wishes to cancel them:</p>
          <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
            <li>A written request is required</li>
            <li>The cancellation will take effect from the next billing cycle</li>
            <li>Previous contributions will remain non refundable</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">8. Confidentiality and Data Security</h2>
          <p className="leading-relaxed text-lg">All donor information is kept secure and confidential as per our Privacy Policy.</p>
          <p className="leading-relaxed text-lg">We do not sell, trade or share donor details with any external organisation for commercial use.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">9. Changes to the Policy</h2>
          <p className="leading-relaxed text-lg">BE ACT Foundation reserves the right to modify, update or amend this policy at any time.</p>
          <p className="leading-relaxed text-lg">Changes will be posted on the website with an updated revision date.</p>
          <p className="leading-relaxed text-lg">Continued donations after policy updates indicate acceptance of the revised terms.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-heading">10. Contact Information</h2>
          <p className="leading-relaxed text-lg">For donation support, refund requests or transaction-related queries, contact:</p>
          <p className="leading-relaxed text-lg">
            BE ACT Foundation
            <br />
            Bhagwati Educational and Charitable Trust
            <br />
            Email: beacthazaribagh@gmail.com
            <br />
            Phone: 9122289578
            <br />
            Address: Hazaribagh , Jharkhand
          </p>
        </section>
      </div>
    </div>
  );
}
