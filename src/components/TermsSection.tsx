import React from 'react';

const TermsItem = ({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) => {
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

const TermsSection = () => {
  return (
    <section className="w-full flex flex-col items-center bg-white">
      {/* Hero Section */}
      <div className="w-full px-5 lg:px-20 py-5">
        <div className="w-full bg-rose-50 rounded-[50px] px-8 lg:px-16 py-16 flex flex-col items-center gap-5">
          <div className="text-6xl text-center">📜</div>
          <h1 className="text-black text-4xl lg:text-6xl font-semibold font-omnes text-center leading-tight">
            Terms & Conditions
          </h1>
          <p className="text-black text-base lg:text-lg font-medium font-inter text-center max-w-lg">
            These Terms & Conditions outline the rules for using Storyland and keeping our community safe.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <article className="w-full max-w-3xl px-5 lg:px-0 py-20 flex flex-col gap-4">
        <TermsItem title="Acceptance of Terms">
          <p>By downloading, installing, or using Storyland, you agree to comply with these Terms & Conditions.</p>
        </TermsItem>

        <TermsItem title="Use of the App">
          <p>Storyland is intended for personal, non-commercial use only. All content generated within the app — including AI-generated stories and voice narrations — is licensed to you solely for private use. Redistribution, resale, or commercial use of this content is prohibited.</p>
        </TermsItem>

        <TermsItem title="Subscription and Payment">
          <p>Access to premium features requires a subscription. Subscription fees, tiers, and terms may vary and will be clearly stated within the app. Subscription payments are handled securely via the platform's payment system. You may cancel your subscription at any time according to the terms provided in the app.</p>
        </TermsItem>

        <TermsItem title="Parental Supervision">
          <p>Parents or legal guardians must supervise app usage by children under 13. By allowing a child to use Storyland, you confirm that you have consented to their use of the app.</p>
        </TermsItem>

        <TermsItem title="User Conduct">
          <p>Misuse of the app, including any harmful, abusive, or illegal behavior, may lead to suspension or termination of your account without refund.</p>
        </TermsItem>

        <TermsItem title="Limitation of Liability">
          <p>Storyland is provided "as is" without warranties. We are not responsible for any damages arising from use or inability to use the app.</p>
        </TermsItem>

        <TermsItem title="Changes to Terms">
          <p>We reserve the right to update or modify these Terms & Conditions at any time. Continued use of Storyland constitutes acceptance of the revised terms.</p>
        </TermsItem>

        <TermsItem title="Contact Information">
          <p>If you have any questions or concerns about this Privacy Policy or how Storyland handles your data, you can reach us at:</p>
          <br />
          <p className="font-medium">
            Storyland<br />
            Meydan Grandstand, 6th Floor<br />
            Meydan Road, Nad Al-Sheba<br />
            Dubai, U.A.E.
          </p>
          <br />
          <p className="font-medium">support@storylandapp.ai</p>
        </TermsItem>
      </article>
    </section>
  );
};

export default TermsSection;