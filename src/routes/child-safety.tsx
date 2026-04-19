import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/PageShell";

export const Route = createFileRoute("/child-safety")({
  head: () => ({
    meta: [
      { title: "Child Safety Policy — Sonia Buddy" },
      { name: "description", content: "Sonia Buddy's child safety policy. Our app is for users 18+ and complies with Google Play Families Policy." },
      { property: "og:title", content: "Child Safety Policy — Sonia Buddy" },
      { property: "og:description", content: "Strict 18+ travel app. We do not knowingly collect data from minors." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Child Safety Policy"
      intro="At Sonia Buddy, we are committed to ensuring a safe digital environment. Since our application is designed specifically for travel services and mature audiences, we have strict policies regarding child safety."
    >
      <h2>1. Age Restriction</h2>
      <p>Our app and services are strictly intended for users who are <strong>18 years of age or older</strong>. We do not knowingly target or attract children under the age of 18. By using this application, users confirm that they meet this age requirement.</p>

      <h2>2. Data Collection from Minors</h2>
      <p>We do not knowingly collect, store, or process any personal identifiable information (PII) from children under the age of 18. If we become aware that a minor has provided us with personal information without parental consent, we take immediate steps to delete such information from our servers.</p>

      <h2>3. Content Moderation (PGC)</h2>
      <p>All content on our platform is <strong>Professionally Generated Content (PGC)</strong>. We ensure that trending topics and travel information are curated for an adult audience. We do not host User Generated Content (UGC) that could bypass our safety filters.</p>

      <h2>4. Parental Control & Reporting</h2>
      <p>If you are a parent or guardian and believe that your child has provided us with personal data, please contact us immediately. We will work with you to remove the data and close any associated accounts.</p>

      <h2>5. Contact Us</h2>
      <p>For any questions regarding our Child Safety Policy, you can reach us at:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:zisakhoofficial@gmail.com">zisakhoofficial@gmail.com</a></li>
        <li><strong>Website:</strong> https://soniabuddy.in</li>
      </ul>
    </LegalPage>
  ),
});
