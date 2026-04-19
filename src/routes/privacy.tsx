import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sonia Buddy" },
      { name: "description", content: "How Sonia Buddy collects, uses and protects your personal information and location data." },
      { property: "og:title", content: "Privacy Policy — Sonia Buddy" },
      { property: "og:description", content: "How we handle location, background tracking, and personal data." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro="At Sonia Buddy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and website."
    >
      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Location Data:</strong> To provide real-time bus tracking and "Smart Geofence Alerts," our app requires access to your device's location. This includes background location access to alert you even when the screen is off or the app is not in active use.</li>
        <li><strong>Personal Information:</strong> We may collect basic details such as your name, phone number, or email address if you register an account or book a tour through our partners.</li>
        <li><strong>Device Information:</strong> We collect technical data like device model, OS version, and unique identifiers to improve app performance and notification delivery.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To trigger <strong>Sound and Vibration alerts</strong> as you reach your destination.</li>
        <li>To provide accurate bus route and timing information based on your current position.</li>
        <li>To connect you with verified local travel agencies for tour bookings.</li>
        <li>To improve our Sonia Buddy database and regional transportation tracking in West Bengal.</li>
      </ul>

      <h2>3. Background Location Usage</h2>
      <p>Our app's core feature is to notify you before you miss your stop. To do this accurately, the app tracks your location in the <strong>background</strong>. You can enable or disable this permission at any time through your device settings.</p>

      <h2>4. Data Sharing & Third Parties</h2>
      <p>We do not sell your personal data. We only share information with:</p>
      <ul>
        <li><strong>Verified Tour Partners:</strong> Only when you explicitly request a booking or inquiry.</li>
        <li><strong>Service Providers:</strong> Like Google Maps or Cloudflare for technical operations.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We use industry-standard encryption (including Supabase and Cloudflare security protocols) to protect your data from unauthorized access or leaks.</p>

      <h2>6. Your Rights</h2>
      <p>You have the right to access, update, or delete your personal information at any time. You can also withdraw location permissions, although this will disable the smart alert features.</p>

      <h2>7. Changes to This Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

      <h2>8. Contact Us</h2>
      <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:zisakhoofficial@gmail.com">zisakhoofficial@gmail.com</a></li>
        <li><strong>Location:</strong> West Bengal, India</li>
      </ul>
    </LegalPage>
  ),
});
