import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Sonia Buddy" },
      { name: "description", content: "Terms governing your use of the Sonia Buddy travel app and website." },
      { property: "og:title", content: "Terms & Conditions — Sonia Buddy" },
      { property: "og:description", content: "User responsibilities, accuracy of bus timings, and disclaimers." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms & Conditions"
      intro="Welcome to Sonia Buddy. By accessing our website or using our mobile application, you agree to comply with and be bound by the following terms and conditions."
    >
      <h2>1. Acceptance of Terms</h2>
      <p>By downloading and using the Sonia Buddy app, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, please do not use our services.</p>

      <h2>2. Use of Services</h2>
      <ul>
        <li><strong>Eligibility:</strong> You must be at least 18 years old to use this app.</li>
        <li><strong>Accuracy of Data:</strong> While we strive to provide the most estimated bus timings and locations, transportation schedules in West Bengal can change without notice. Sonia Buddy is not responsible for delays caused by bus operators or traffic.</li>
        <li><strong>Geofence Alerts:</strong> The proximity alerts depend on your device's GPS accuracy and network connection. We do not guarantee 100% accuracy in every environmental condition.</li>
      </ul>

      <h2>3. Prohibited Activities</h2>
      <p>Users are strictly prohibited from:</p>
      <ul>
        <li>Using the app for any illegal purposes.</li>
        <li>Attempting to hack, decompile, or copy the Sonia Buddy database or app structure.</li>
        <li>Providing false information regarding bus routes or tour bookings.</li>
      </ul>

      <h2>4. Third-Party Services (Tour Packages)</h2>
      <p>Sonia Buddy acts as a platform to connect users with local travel agencies.</p>
      <ul>
        <li>We are not responsible for the quality of service provided by third-party tour operators.</li>
        <li>Any financial transactions or disputes regarding tours must be settled directly with the respective agency.</li>
      </ul>

      <h2>5. Limitation of Liability</h2>
      <p>Sonia Buddy and its developers shall not be liable for any missed buses, lost time, or personal travel inconveniences caused by technical errors, GPS inaccuracies, or incorrect schedule data. Users are advised to reach bus stands 10–15 minutes before the scheduled time.</p>

      <h2>6. Intellectual Property</h2>
      <p>All content, including the app name "Sonia Buddy," logo, custom bus route data, and UI design, is the intellectual property of the app owner. Unauthorized reproduction is prohibited.</p>

      <h2>7. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. Your continued use of the app after changes are posted constitutes your acceptance of the new terms.</p>

      <h2>8. Governing Law</h2>
      <p>These terms are governed by the laws of India, specifically under the jurisdiction of West Bengal courts.</p>

      <h2>9. Contact Information</h2>
      <p>For any queries regarding these terms, please reach out to <a href="mailto:zisakhoofficial@gmail.com">zisakhoofficial@gmail.com</a>.</p>
    </LegalPage>
  ),
});
