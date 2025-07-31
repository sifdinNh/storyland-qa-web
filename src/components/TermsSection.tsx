import React from 'react';

const TermsItem = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="w-full mt-4">
      <h3 className="text-gray-900 text-xl font-bold max-md:max-w-full">
        {title}
      </h3>
      <div className="text-gray-900 text-lg font-normal mt-4 max-md:max-w-full">
        {content}
      </div>
    </div>
  );
};

const TermsSection = () => {
  return (
    <section className="items-center flex w-full flex-col text-gray-900 bg-white px-28 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[800px] max-w-full flex-col overflow-hidden text-[44px] font-bold text-center tracking-[-1.1px] leading-none">
        <h2 className="text-gray-900 max-md:max-w-full">
          📜  Storyland Terms & Conditions
        </h2>
      </div>
      <article className="flex w-[786px] max-w-full flex-col overflow-hidden items-center mt-16 max-md:mt-10">
        <TermsItem
          title="Acceptance of Terms"
          content="By downloading, installing, or using Storyland, you agree to comply with these Terms & Conditions."
        />
        <TermsItem
          title="Use of the App"
          content="Storyland is intended for personal, non-commercial use only. All content generated within the app — including AI-generated stories and voice narrations — is licensed to you solely for private use. Redistribution, resale, or commercial use of this content is prohibited."
        />
        <TermsItem
          title="Subscription and Payment"
          content="Access to premium features requires a subscription. Subscription fees, tiers, and terms may vary and will be clearly stated within the app. Subscription payments are handled securely via the platform's payment system. You may cancel your subscription at any time according to the terms provided in the app."
        />
        <TermsItem
          title="Parental Supervision"
          content="Parents or legal guardians must supervise app usage by children under 13. By allowing a child to use Storyland, you confirm that you have consented to their use of the app."
        />
        <TermsItem
          title="User Conduct"
          content="Misuse of the app, including any harmful, abusive, or illegal behavior, may lead to suspension or termination of your account without refund."
        />
        <TermsItem
          title="Limitation of Liability"
          content='Storyland is provided "as is" without warranties. We are not responsible for any damages arising from use or inability to use the app.'
        />
        <TermsItem
          title="Changes to Terms"
          content="We reserve the right to update or modify these Terms & Conditions at any time. Continued use of Storyland constitutes acceptance of the revised terms."
        />
        <div className="w-full text-lg font-normal mt-4">
          <div className="text-gray-900 max-md:max-w-full">
            For any questions or concerns about these Terms or our services, please contact us at [support@storylandapp.com].
          </div>
        </div>
      </article>
    </section>
  );
};

export default TermsSection;
