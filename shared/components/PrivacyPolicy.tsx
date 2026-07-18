'use client'

/**
 * Privacy Policy page component
 * Features:
 * - Clean, readable layout matching platform aesthetics
 * - Structured sections with proper typography
 * - Responsive design
 */
export function PrivacyPolicy() {
  return (
    <div>
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Card */}
          <div className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 xl:p-12 shadow-sm">
            {/* Header */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h1 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                Privacy Notice
              </h1>
              <p className="text-sm text-gray-600 font-body">
                Last updated on August 18, 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                ValoraPay takes care of your personal data and does everything possible to protect it. This Privacy Notice is written to help you understand what your personal data is collected, stored and used, and what happens to it when you use our website at valorapay.com ("Website").
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                <p className="text-sm text-gray-800 font-semibold font-body mb-2">
                  Pay your attention!
                </p>
                <p className="text-sm text-gray-700 leading-relaxed font-body">
                  UK leaves the EU by 31 December 2020. Till that time, the whole data processing process will be handled as it goes. After leaving the EU, the UK will become a third country pending a decision on the adequacy of jurisdiction. We will continue to be GDPR compliant and comply with the data processing and transmission requirements, taking into account the GDPR requirements for third countries that are not recognised as an adequate jurisdiction.
                </p>
              </div>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                By using our software, services, and website, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 bg-gray-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                In this Privacy Notice we answer the following questions:
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 font-body">
                <li>Who are we?</li>
                <li>What is the Privacy Notice covered by?</li>
                <li>What data do we collect and why?</li>
                <li>How long do we keep your data?</li>
                <li>How do we protect your Data?</li>
                <li>Do we share data with third parties?</li>
                <li>Do we do data transfer outside the European Economic Zone?</li>
                <li>Do we use cookies?</li>
                <li>What rights do I have regarding my data?</li>
                <li>How do we update Privacy Notice?</li>
                <li>California privacy rights.</li>
                <li>Do-not-track requests.</li>
                <li>California residents data protection rights.</li>
              </ol>
            </div>

            {/* Section 1: Who are we? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                1. Who are we?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                We are ValoraPay Limited (the Company), company number 11654625, with a registered address at 37th floor, One Canada Square, Canary Wharf, London, E14 5AA, United Kingdom.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                In relation to your personal data, we are the controller and processor at the same time. We are the controller of your personal data of our clients and users, which means that we determine what, for what purpose and how your personal data will be processed.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                If you have any questions, you can contact us by sending an email to{' '}
                <a href="mailto:info@valorapay.com" className="text-primary hover:text-primary/80 underline font-body">
                  info@valorapay.com
                </a>
                . You can also send us a letter at ValoraPay Limited, 37th floor, One Canada Square, Canary Wharf, London, E14 5AA, United Kingdom.
              </p>
            </div>

            {/* Section 2: What is the Privacy Notice covered by? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                2. What is the Privacy Notice covered by?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                This Privacy Notice applies to our website and our services. Our websites are valorapay.com and ValoraPay.io.
              </p>
            </div>

            {/* Section 3: What data do we collect and why? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                3. What data do we collect and why?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                For the purposes of this Privacy Policy, "Personal Data" or "Personal Information" means any information relating to an identified or identifiable natural person, as defined under Article 4(1) of the General Data Protection Regulation (GDPR). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, identification number, location data, online identifier, or one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                The data we process is divided into two categories: technical information and data that is provided to us by a user, consumer and client.
              </p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  Technical information.
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                  When you visit our website, some data is collected automatically. We need technical data to operate, maintain, and improve our website. This includes data such as an IP address, UTM parameters, geolocation, device type, browser type, cookies, and data about your interaction with the website - session ID.
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  The <strong>session ID</strong> includes your interaction with the website, the name of the website from which you went to our website, the functions you use, the pages viewed on our website, the way you use our website, and the actions you take if such actions are present.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  Data provided by the client.
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  To perform a contract, we need the following data: full name, date of birth, email, passport details (tax number, address), gender, phone number, position, company name, payment information (bank details, bank card details), and merchant ID credentials.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  Data provided by the consumer.
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                  In cases where ValoraPay processes personal data of end users of our clients (consumers), ValoraPay acts strictly as a Data Processor under the GDPR. The client (our business partner) acts as the Data Controller and determines the purposes and means of processing. Processing is carried out on behalf of and under the lawful instructions of the Data Controller (Art. 28 GDPR). For detailed information about the processing of such personal data, data subjects should contact the relevant controller directly. As a processor, we may process the following data: name, surname, geolocation, address, device hash, email, phone number, tax number, payment information incl. but not limited to bank ID, bank details, payment card details, electronic wallet ID.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  Data provided by the user.
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  For full interaction with our website, we may collect your name, phone number, email, and company name.
                </p>
              </div>

              {/* Data Collection Table */}
              <div className="mt-8 overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-heading">Type of data</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-heading">Description of data</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-heading">Legal basis</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-heading">Reasons of processing</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Data provided by a client</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Full name, gender, date of birth, email, phone number, passport details, position, company name, payment information, merchant ID credentials</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Performance of a contract</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Registering an account; Providing a service; Customer support</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Data provided by a client</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Position, company name</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Legitimate interest</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Analytics; Statistics</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Data provided by a client</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Full name, date of birth, email, phone number</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Consent</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Marketing</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Data provided by a consumer</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Name, surname, geolocation, address, device hash, email, phone number, tax number, payment information, bank ID</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Performance of the contract</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Registering an account; Providing a service; Customer support</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Data provided by a consumer</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Device hash, payment information</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Legitimate interest</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">Security; Analytics; Statistics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 4: How long do we keep your data? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                4. How long do we keep your data?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Notice, unless a longer retention period is required or permitted by law. The retention period depends on the type of data and the purpose for which it was collected.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                When personal data is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies and applicable legal requirements.
              </p>
            </div>

            {/* Section 5: How do we protect your Data? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                5. How do we protect your Data?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 leading-relaxed font-body mb-4 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and audits</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Compliance with industry standards such as PCI DSS</li>
              </ul>
            </div>

            {/* Section 6: Do we share data with third parties? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                6. Do we share data with third parties?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                We may share your personal data with third parties only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 leading-relaxed font-body mb-4 ml-4">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or respond to lawful requests</li>
                <li>With service providers who assist us in operating our business (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or merger</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                We do not sell, rent, or trade your personal data to third parties for their marketing purposes.
              </p>
            </div>

            {/* Section 7: Do we do data transfer outside the European Economic Zone? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                7. Do we do data transfer outside the European Economic Zone?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                Some of our service providers may be located outside the European Economic Area (EEA). When we transfer your personal data outside the EEA, we ensure that appropriate safeguards are in place to protect your data, such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 leading-relaxed font-body mb-4 ml-4">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions by the European Commission</li>
                <li>Other legally recognized transfer mechanisms</li>
              </ul>
            </div>

            {/* Section 8: Do we use cookies? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                8. Do we use cookies?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                Yes, we use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small text files stored on your device that help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 leading-relaxed font-body mb-4 ml-4">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website. For more information, please see our Cookie Policy.
              </p>
            </div>

            {/* Section 9: What rights do I have regarding my data? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                9. What rights do I have regarding my data?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                Under the GDPR and applicable data protection laws, you have the following rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-3 text-base text-gray-700 leading-relaxed font-body mb-4 ml-4">
                <li>
                  <strong>Right of access:</strong> You have the right to obtain confirmation as to whether or not personal data concerning you is being processed, and to access that data.
                </li>
                <li>
                  <strong>Right to rectification:</strong> You have the right to have inaccurate personal data corrected and incomplete data completed.
                </li>
                <li>
                  <strong>Right to erasure:</strong> You have the right to request the deletion of your personal data under certain circumstances.
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> You have the right to request the restriction of processing of your personal data in certain situations.
                </li>
                <li>
                  <strong>Right to data portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format.
                </li>
                <li>
                  <strong>Right to object:</strong> You have the right to object to the processing of your personal data for direct marketing purposes or on grounds relating to your particular situation.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> Where processing is based on consent, you have the right to withdraw your consent at any time.
                </li>
              </ul>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                To exercise your rights, please contact us at{' '}
                <a href="mailto:info@valorapay.com" className="text-primary hover:text-primary/80 underline font-body">
                  info@valorapay.com
                </a>
                . We will respond to your request within one month, or inform you if we need additional time.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority or the Information Commissioner's Office (ICO) in the UK.
              </p>
            </div>

            {/* Section 10: How do we update Privacy Notice? */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                10. How do we update Privacy Notice?
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                This privacy policy and the relationships falling under its effect are regulated by the GDPR.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                The Company reserves the right to modify, update, or amend this Privacy Policy at any time, in its sole discretion, to reflect changes in legal requirements, business practices, or technological advancements.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                Any changes to this Privacy Policy will be communicated to Data Subjects through appropriate means, such as by posting a notice on the website, sending an email notification, or other reasonable methods.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                You as a Data Subject are encouraged to review this Privacy Policy regularly for any updates or changes. Any questions or concerns regarding changes to this Privacy Policy should be directed to the Company using the contact information provided in this Privacy Policy.
              </p>
            </div>

            {/* Section 11: California privacy rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                11. California privacy rights
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                We make these disclosures to those visiting our websites who reside in California which supersede and replace any conflicting disclosures found elsewhere on our websites as well as reflect your privacy rights granted by the California Consumer Privacy Act (CCPA).
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  Opt-out of disclosure for direct marketing purposes.
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                  The California laws allow its residents to learn the identities of entities that received their personal data for marketing purposes and the categories of information disclosed. You may request such information by contacting us by email at{' '}
                  <a href="mailto:info@valorapay.com" className="text-primary hover:text-primary/80 underline font-body">
                    info@valorapay.com
                  </a>
                  .
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  Please be aware that this opt-out does not prohibit our disclosure of personal data for any purpose other than direct marketing. The data we process and share may include your name, address, email address, and telephone number.
                </p>
              </div>
            </div>

            {/* Section 12: Do-not-track requests */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                12. Do-not-track requests.
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                California residents visiting our websites may request that we do not automatically gather and track information pertaining to their online browsing movements across the Internet. Such requests are typically made through web browser settings that control signals or other mechanisms that provide consumers the ability to exercise choice regarding the collection of personal data about an individual consumer's online activities over time and across third-party websites or online services. We currently do not have the ability to honour these requests. We may modify this Notice as our abilities change.
              </p>
            </div>

            {/* Section 13: California residents' data protection rights */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                13. California residents' data protection rights.
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                The CCPA has extended California residents' data protection rights. However, we have already guaranteed all these rights and described them precisely in this Notice as well as a means of rights exercising. Please refer below to investigate.
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  Right to be informed.
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  Please find a list of personal data we collect about you and your activity, sources and business purposes of personal data collection, and third parties we may share your personal data within Section 3 - 6 of the Notice.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  Right of access, Data portability, and Right to delete.
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                  Your Right of access, Data portability, and Right to delete are prescribed by Section 9 of the Notice.
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                  You can exercise these rights any time by contacting us via email at{' '}
                  <a href="mailto:info@valorapay.com" className="text-primary hover:text-primary/80 underline font-body">
                    info@valorapay.com
                  </a>
                  .
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                  Notice, the CCPA envisages some specific requirements related to the exercising of these data protection rights. Considering them we may:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base text-gray-700 leading-relaxed font-body mb-4 ml-4">
                  <li>respond to your request within forty-five (45) days of receiving the request;</li>
                  <li>provide you with personal data we collected about you no more than twice in a 12-months period;</li>
                  <li>NOT provide you with personal data if we cannot verify your identity;</li>
                  <li>NOT transmit your personal data to another entity.</li>
                </ul>
                <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                  Also, please be aware that we are allowed to maintain personal data after deletion request is received as permitted by the CCPA (for instance, for the purposes of detection of security incidents, repair errors, comply with legal obligations, transaction completion).
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  We want to draw your special attention that ValoraPay does not sell, rent, or trade your personal data to anyone.
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-heading">
                  Non-discrimination right.
                </h3>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  We definitely will not discriminate (including, by denying Services, charging different prices for Services, providing different quality of Services) against you for exercising any of your CCPA data protection rights.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Contact Us
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Notice or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-base text-gray-700 leading-relaxed font-body mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@valorapay.com" className="text-primary hover:text-primary/80 underline font-body">
                    info@valorapay.com
                  </a>
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  <strong>Address:</strong> ValoraPay Limited, 37th floor, One Canada Square, Canary Wharf, London, E14 5AA, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

