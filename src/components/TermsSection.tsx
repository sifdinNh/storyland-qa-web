import React from 'react';
const TermsItem = ({
  title,
  content
}: {
  title: string;
  content: string;
}) => {
  return <div className="w-full mt-4">
      <h3 className="text-gray-900 text-xl font-bold max-md:max-w-full">
        {title}
      </h3>
      <div className="text-gray-900 text-lg font-normal mt-4 max-md:max-w-full">
        {content}
      </div>
    </div>;
};
const TermsSection = () => {
  return <section className="items-center flex w-full flex-col text-gray-900 bg-white px-28 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[800px] max-w-full flex-col overflow-hidden text-[44px] font-bold text-center tracking-[-1.1px] leading-none">
        <h2 className="text-gray-900 max-md:max-w-full">
          📜  Storyland Terms & Conditions
        </h2>
      </div>
      <article className="flex w-[786px] max-w-full flex-col overflow-hidden items-center mt-16 max-md:mt-10">
        <TermsItem title="Acceptance of Terms" content="By downloading, installing, or using Storyland, you agree to comply with these Terms & Conditions." />
        <TermsItem title="Use of the App" content="Storyland is intended for personal, non-commercial use only. All content generated within the app — including AI-generated stories and voice narrations — is licensed to you solely for private use. Redistribution, resale, or commercial use of this content is prohibited." />
        <TermsItem title="Subscription and Payment" content="Access to premium features requires a subscription. Subscription fees, tiers, and terms may vary and will be clearly stated within the app. Subscription payments are handled securely via the platform's payment system. You may cancel your subscription at any time according to the terms provided in the app." />
        <TermsItem title="Parental Supervision" content="Parents or legal guardians must supervise app usage by children under 13. By allowing a child to use Storyland, you confirm that you have consented to their use of the app." />
        <TermsItem title="User Conduct" content="Misuse of the app, including any harmful, abusive, or illegal behavior, may lead to suspension or termination of your account without refund." />
        <TermsItem title="Limitation of Liability" content='Storyland is provided "as is" without warranties. We are not responsible for any damages arising from use or inability to use the app.' />
        <TermsItem title="Changes to Terms" content="We reserve the right to update or modify these Terms & Conditions at any time. Continued use of Storyland constitutes acceptance of the revised terms." />
        <TermsItem 
          title="Licensed Application End User License Agreement" 
          content="Apps made available through the App Store are licensed, not sold, to you. Your license to each App is subject to your prior acceptance of either this Licensed Application End User License Agreement ('Standard EULA'), or a custom end user license agreement between you and the Application Provider ('Custom EULA'), if one is provided. The Application Provider or Apple as applicable ('Licensor') reserves all rights in and to the Licensed Application not expressly granted to you under this Standard EULA." 
        />
        
        <TermsItem 
          title="License Scope" 
          content="Licensor grants to you a nontransferable license to use the Licensed Application on any Apple-branded products that you own or control and as permitted by the Usage Rules. You may not distribute or make the Licensed Application available over a network where it could be used by multiple devices at the same time. You may not transfer, redistribute or sublicense the Licensed Application, and if you sell your Apple Device to a third party, you must remove the Licensed Application from the Apple Device before doing so." 
        />
        
        <TermsItem 
          title="Data Collection Consent" 
          content="You agree that Licensor may collect and use technical data and related information—including but not limited to technical information about your device, system and application software, and peripherals—that is gathered periodically to facilitate the provision of software updates, product support, and other services to you related to the Licensed Application. Licensor may use this information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you." 
        />
        
        <TermsItem 
          title="License Termination" 
          content="This Standard EULA is effective until terminated by you or Licensor. Your rights under this Standard EULA will terminate automatically if you fail to comply with any of its terms." 
        />
        
        <TermsItem 
          title="External Services" 
          content="The Licensed Application may enable access to Licensor's and/or third-party services and websites ('External Services'). You agree to use the External Services at your sole risk. Licensor is not responsible for examining or evaluating the content or accuracy of any third-party External Services. You will not use the External Services in any manner that is inconsistent with the terms of this Standard EULA or that infringes the intellectual property rights of Licensor or any third party." 
        />
        
        <TermsItem 
          title="No Warranty Disclaimer" 
          content="YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE LICENSED APPLICATION IS AT YOUR SOLE RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE LICENSED APPLICATION AND ANY SERVICES ARE PROVIDED 'AS IS' AND 'AS AVAILABLE,' WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND. LICENSOR HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE LICENSED APPLICATION, EITHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, QUIET ENJOYMENT, AND NONINFRINGEMENT OF THIRD-PARTY RIGHTS." 
        />
        
        <TermsItem 
          title="Liability Limitations" 
          content="TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL LICENSOR BE LIABLE FOR PERSONAL INJURY OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE LICENSED APPLICATION. In no event shall Licensor's total liability to you for all damages exceed the amount of fifty dollars ($50.00)." 
        />
        
        <TermsItem 
          title="Export Restrictions" 
          content="You may not use or otherwise export or re-export the Licensed Application except as authorized by United States law and the laws of the jurisdiction in which the Licensed Application was obtained. The Licensed Application may not be exported or re-exported into any U.S.-embargoed countries or to anyone on restricted government lists. You agree that you will not use these products for any purposes prohibited by United States law, including the development, design, manufacture, or production of nuclear, missile, or chemical or biological weapons." 
        />
        
        <TermsItem 
          title="Commercial Software Classification" 
          content="The Licensed Application and related documentation are 'Commercial Items', consisting of 'Commercial Computer Software' and 'Commercial Computer Software Documentation', as defined in applicable federal acquisition regulations. The Commercial Computer Software and Documentation are being licensed to U.S. Government end users only as Commercial Items and with only those rights as are granted to all other end users pursuant to the terms and conditions herein." 
        />
        
        <TermsItem 
          title="Governing Law & Jurisdiction" 
          content="This Agreement and the relationship between you and Apple shall be governed by the laws of the State of California, excluding its conflicts of law provisions. You and Apple agree to submit to the personal and exclusive jurisdiction of the courts located within the county of Santa Clara, California, to resolve any dispute or claim arising from this Agreement. If you are a citizen of any European Union country or Switzerland, Norway or Iceland, the governing law and forum shall be the laws and courts of your usual place of residence." 
        />
        <div className="w-full text-lg font-normal mt-4">
          <div className="text-gray-900 max-md:max-w-full">For any questions or concerns about these Terms or our services, please contact us at [support@storylandapp.ai].</div>
        </div>
      </article>
    </section>;
};
export default TermsSection;