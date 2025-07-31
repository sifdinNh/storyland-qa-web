import React from 'react';

const PolicySection = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="w-full mt-4">
      <h3 className="text-gray-900 text-xl font-bold max-md:max-w-full">
        {title}
      </h3>
      <div className="text-gray-900 text-lg font-normal mt-4 max-md:max-w-full">
        {content.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            {index < content.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const PrivacySection = () => {
  return (
    <section className="items-center flex w-full flex-col text-gray-900 bg-white px-28 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[800px] max-w-full flex-col overflow-hidden text-[44px] font-bold text-center tracking-[-1.1px] leading-none">
        <h2 className="text-gray-900 max-md:max-w-full">
          📜  Storyland Privacy Policy
        </h2>
      </div>
      <article className="flex w-[786px] max-w-full flex-col overflow-hidden items-center mt-16 max-md:mt-10">
        <PolicySection
          title="Privacy Policy"
          content="At Storyland, protecting your privacy and your child's safety is our highest priority. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data."
        />
        <PolicySection
          title="Information We Collect"
          content="To create personalized, magical stories for your child, we collect only the necessary information, including:\n\nYour child's name, age, and interests.\nVoice data if you choose to use our narration cloning feature."
        />
        <PolicySection
          title="How We Use Your Information"
          content="We use this data solely to customize story content and provide the narration experience. Voice data is securely encrypted and stored only to enable the narration feature and is never shared with third parties."
        />
        <PolicySection
          title="Parental Consent & Children's Privacy"
          content="Storyland is designed for children under 13 and complies with COPPA and GDPR-K regulations. We require parental consent before collecting any personal information from children and provide mechanisms for parents or guardians to review, update, or delete their child's data at any time."
        />
        <PolicySection
          title="No Advertising or Selling of Data"
          content="We do not display ads or sell any personal user data to third parties."
        />
        <PolicySection
          title="Your Rights"
          content="You can request access, correction, or deletion of your account and personal data by contacting our support team at [support@storylandapp.ai]. We will respond to your request promptly within 30 days."
        />
        <PolicySection
          title="Data Retention"
          content="We retain personal data only as long as necessary to provide our services or as required by law."
        />
        <PolicySection
          title="Third-Party Services"
          content="If we use third-party services (such as cloud storage providers), they are carefully selected and contractually bound to protect your data according to this policy."
        />
        <PolicySection
          title="Privacy Policy Updates"
          content="We may update this Privacy Policy from time to time. The most current version is always available at [www.storylandapp.ai/privacy]."
        />
        <div className="w-full text-lg font-normal mt-4">
          <div className="text-gray-900 max-md:max-w-full">
            By using Storyland, you acknowledge that you have read and understood this Privacy Policy.
          </div>
        </div>
      </article>
    </section>
  );
};

export default PrivacySection;
