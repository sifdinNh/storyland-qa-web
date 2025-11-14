import React from 'react';

const PolicySection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h3 className="text-gray-900 text-xl font-semibold font-omnes">
        {title}
      </h3>
      <div className="text-gray-900 text-base font-normal font-inter">
        {children}
      </div>
    </div>
  );
};

const PrivacySection = () => {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full px-5 lg:px-20 py-5 bg-white">
        <div className="w-full bg-rose-50 rounded-[50px] px-8 lg:px-16 py-16 flex flex-col items-center gap-5">
          <div className="text-6xl text-center">📜</div>
          <h1 className="text-black text-4xl lg:text-6xl font-semibold font-omnes text-center leading-tight">
            Privacy Policy
          </h1>
          <p className="text-black text-base lg:text-lg font-medium font-inter text-center max-w-lg">
            Your trust matters to us. This Privacy Policy explains how Storyland collects, uses, and protects your data.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <article className="w-full max-w-3xl px-5 lg:px-0 py-20 flex flex-col gap-4 bg-white">
        <PolicySection title="Privacy Policy">
          <p>At Storyland, protecting your privacy and your child's safety is our highest priority. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.</p>
        </PolicySection>

        <PolicySection title="Information We Collect">
          <div>
            <p>To create personalized, magical stories for your child, we collect only the necessary information, including:</p>
            <br />
            <p>Your child's name, age, and interests.<br />Voice data if you choose to use our narration cloning feature.</p>
          </div>
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          <p>We use this data solely to customize story content and provide the narration experience. Voice data is securely encrypted and stored only to enable the narration feature and is never shared with third parties.</p>
        </PolicySection>

        <PolicySection title="Parental Consent & Children's Privacy">
          <p>Storyland is designed for children under 13 and complies with COPPA and GDPR-K regulations. We require parental consent before collecting any personal information from children and provide mechanisms for parents or guardians to review, update, or delete their child's data at any time.</p>
        </PolicySection>

        <PolicySection title="No Advertising or Selling of Data">
          <p>We do not display ads or sell any personal user data to third parties.</p>
        </PolicySection>

        <PolicySection title="Your Rights">
          <p>You can request access, correction, or deletion of your account and personal data by contacting our support team at <span className="font-medium">support@storylandapp.com</span>. We will respond to your request promptly within 30 days.</p>
        </PolicySection>

        <PolicySection title="Data Retention">
          <p>We retain personal data only as long as necessary to provide our services or as required by law.</p>
        </PolicySection>

        <PolicySection title="Third-Party Services">
          <p>If we use third-party services (such as cloud storage providers), they are carefully selected and contractually bound to protect your data according to this policy.</p>
        </PolicySection>

        <PolicySection title="Privacy Policy Updates">
          <p>We may update this Privacy Policy from time to time. The most current version is always available at <span className="font-medium">www.storylandapp.ai/privacy</span></p>
        </PolicySection>

        <div className="w-full flex flex-col gap-4">
          <p className="text-gray-900 text-base font-normal font-inter">
            By using Storyland, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </article>
    </section>
  );
};

export default PrivacySection;
