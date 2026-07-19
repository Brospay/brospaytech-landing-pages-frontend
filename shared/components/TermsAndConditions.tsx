'use client'

/**
 * Terms and Conditions page component
 * Features:
 * - Clean, readable layout matching platform aesthetics
 * - Structured sections with proper typography
 * - Responsive design
 */
export function TermsAndConditions() {
  return (
    <div>
      <section className="w-full bg-[#EFEFEF] py-16 sm:py-20 lg:py-24 relative z-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Card */}
          <div className="bg-white border border-gray-200 rounded-[30px] p-6 lg:p-8 xl:p-12 shadow-sm">
            {/* Header */}
            <div className="mb-8 pb-8 border-b border-gray-200">
              <h1 className="text-[2.4rem] font-medium text-[#000] mb-4 leading-[3.05563rem] tracking-[-0.075rem] font-body">
                Website Terms of Use
              </h1>
              <p className="text-sm text-gray-600 font-body">
                Last updated on November 1, 2020
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-10">
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                These terms of use (the Agreement) form a legal agreement between you (You) and BrosPay LIMITED, a legal entity under the laws of England and Wales, doing business as BrosPay (the Company, We or Us). The effective date of this Agreement is when You accept or are deemed to accept this Agreement. You are deemed to have accepted and agreed to this Agreement, and all terms herein including the Limitation of Liability and Indemnification provisions, when you access this website. If You are accessing this website on behalf of a business, your access constitutes the business acceptance of these terms.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                By accessing https://valorapay.com/ and all subsidiary web pages within the Website, you agree to this Agreement in full, together with any additional or specific terms and conditions we may draw to your attention prior to your purchasing any products or services from or via this Website. You hereby consent to the exchange of information and documents between You and Us electronically over the Internet or by email and agree this electronic Agreement shall be the equivalent of a written paper agreement between You and Us. Capitalised terms in this Agreement are defined in the section headed "Definitions and interpretation" at the end of this Agreement if not otherwise defined in the provisions below.
              </p>
            </div>

            {/* Section 1: Ownership and Copyright */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                1. Ownership and Copyright
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                You acknowledge that any and all information, content, reports, data, databases, graphics, interfaces, web pages, text, files, software, product names, company names, trademarks, logos and trade names contained on this Website (collectively the Content), including the manner in which the Content is presented or appears and all information relating thereto, are the property of their respective owners as indicated, the Company or its licensors, as the case may be. You shall have no right, title or interest, ownership or otherwise, in the Content.
              </p>
            </div>

            {/* Section 2: Permitted Use */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                2. Permitted Use
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                Without prejudice to any other clauses of the Agreement, The Company hereby grants to You a limited, revocable, personal, non-transferable and non-exclusive license limited to right of access, read and download one copy of the Content solely for the purpose of evaluating the services offered by Us (Services).
              </p>
            </div>

            {/* Section 3: Restrictions On Use */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                3. Restrictions On Use
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                You agree that You will not:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-base text-gray-700 leading-relaxed font-body ml-4">
                <li>
                  <strong>a)</strong> distribute the Content for any purpose, including, without limitation, compiling an internal database, redistributing or reproducing the Content by way of the press or media or through any commercial network, cable or satellite system; or
                </li>
                <li>
                  <strong>b)</strong> create derivative works of, reverse engineer, decompile, disassemble, adapt, translate, transmit, arrange, modify, copy, bundle, sell, sublicense, export, merge, transfer, adapt, loan, rent, lease, assign, share or distribute in any way, encode, post, upload, publicly displayed, outsource, host, publish, republish, reproduce, make available to any person or otherwise use, either directly or indirectly, the Content in whole or in part, in any form or by any means whatsoever, be they physical, electronic or otherwise. You shall not permit, allow or do anything that would infringe or otherwise prejudice the proprietary rights of the Company or its licensors or allow any third party to access the Content. The restrictions set out in this Agreement shall not apply to the limited extent the restrictions are prohibited by applicable law; or
                </li>
                <li>
                  <strong>c)</strong> use any "deep-link", "page-scrape", "robot", "spider", or another automatic device, program algorithm, or methodology, or any similar or equivalent manual process, to access, acquire, copy or monitor any portion of the Content, or in any way reproduce or circumvent the navigational structure or presentation of the Website or any Content, to obtain or attempt to obtain any materials, documents, or information through any means not purposely made available through the Website. We reserve the right to block any such activity.
                </li>
              </ol>
            </div>

            {/* Section 4: License to Use Your Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                4. License to Use Your Information
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                With the exception of your non-public personal information, You hereby grant to the Company a perpetual, unlimited, royalty-free, worldwide, non-exclusive, irrevocable, transferable license to run, display, copy, reproduce, publish, bundle, distribute, market, create derivative works of, adapt, translate, transmit, arrange, modify, sublicense, export, merge, transfer, loan, rent, lease, assign, share, outsource, host, make available to any person or otherwise use any information or other content You provide on or through this website or which is sent to the Company by email or other correspondence, including, without limitation, any ideas, concepts, inventions, know-how, techniques contained therein, for any purpose whatsoever. The Company shall not be subject to any obligations of confidentiality regarding any such information unless specifically agreed to by the Company in writing or required by law. You represent and warrant that you have the right to grant the license set out above.
              </p>
            </div>

            {/* Section 5: Personal Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                5. Personal Information
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                The Company may from time to time, but is not obligated to, monitor your use of the website and collect, store, use and disclose information concerning You to solicit or offer You its Services, and You hereby consent to such collection, storage, use and disclosure and waive any right of privacy You may have in it. We only collect personal data that is necessary to form a legal agreement with You to offer You our Services and to comply with applicable Know-Your-Customer regulations applicable to Us.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                You may request us to delete your information and deactivate your account at any time. We will delete all the information that is not necessary to comply with applicable Know-Your-Customer regulations applicable to Us. You may contact us regarding the handling of your information at any time at:{' '}
                <a href="mailto:info@valorapay.com" className="text-primary hover:text-primary/80 underline font-body">
                  info@valorapay.com
                </a>
                .
              </p>
            </div>

            {/* Section 6: Service Agreement */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                6. Service Agreement
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                If You procure Services from the Company or one of its suppliers or sponsors, then such Services shall be delivered pursuant to a separate agreement and are not provided hereunder, and You shall have no rights or claims in respect of such Services hereunder.
              </p>
            </div>

            {/* Section 7: Links to third-party websites and services */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                7. Links to third-party websites and services
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                The Website may contain links, buttons and banners that redirect you to third-party resources and websites that may be of interest. The inclusion of any link does not mean we endorse the site or have any association with its operators, nor should the inclusion of any link be viewed as an encouragement to purchase or use any third-party products or services - we provide these links to you for information purposes and convenience only.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                8. Linked Websites
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                Linked Websites are not under our control and we are not responsible for the contents of any Linked Website including, without limitation, any link contained in a Linked Website, or any changes or updates to a Linked Website. We do not accept responsibility or liability for the privacy of your personal information on any Linked Website. We are providing these links to you only as a convenience, and the inclusion of any link does not imply endorsement by us of the Linked Website or any association with its operators.
              </p>
            </div>

            {/* Section 9: Disclaimer of Warranties */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                9. Disclaimer of Warranties
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                THE CONTENT AND THIS WEBSITE ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE COMPANY DISCLAIMS ALL WARRANTIES, REPRESENTATIONS AND CONDITIONS OF ANY KIND WITH RESPECT TO THE CONTENT AND THIS WEBSITE WHETHER EXPRESS, IMPLIED OR COLLATERAL, INCLUDING, WITHOUT LIMITATION:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base text-gray-700 leading-relaxed font-body mb-4 ml-4">
                <li>THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR USE, TITLE, NON-INFRINGEMENT, SECURITY, ACCURACY OR RELIABILITY;</li>
                <li>THAT THE CONTENT OR THIS WEBSITE WILL BE AVAILABLE, ACCURATE, RELIABLE, TIMELY, SECURE, UNINTERRUPTED OR ERROR-FREE;</li>
                <li>THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED;</li>
                <li>THAT THE CONTENT OR THIS WEBSITE WILL BE FREE FROM VIRUSES, MALICIOUS CODE, OR HARMFUL COMPONENTS; AND</li>
                <li>THAT THE CONTENT OR THIS WEBSITE WILL MEET YOUR REQUIREMENTS.</li>
              </ul>
            </div>

            {/* Section 10: Limitation of Liability */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                10. Limitation of Liability
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, AGENTS, LICENSORS, SUPPLIERS OR THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, CONSULTANTS, AGENTS OR OTHER REPRESENTATIVES (COLLECTIVELY, THE "RELEASED PARTIES") BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR AGGRAVATED DAMAGES, OR ANY OTHER DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF DATA, LOSS OF PROFITS OR LOSS OF OPPORTUNITIES, ARISING OUT OF OR IN CONNECTION WITH THIS WEBSITE, THE CONTENT, OR ANY LINKED WEBSITE, REGARDLESS OF THE CAUSE OF ACTION (INCLUDING BUT NOT LIMITED TO BREACH OF CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, BREACH OF WARRANTIES, OR FAILURE OF ESSENTIAL PURPOSE), AND EVEN IF ONE OR MORE OF THE RELEASED PARTIES HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSS.
              </p>
            </div>

            {/* Section 11: Indemnification */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                11. Indemnification
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                You agree to defend, indemnify and hold harmless the Released Parties from and against any and all claims, demands, liabilities, damages, losses, costs and expenses whatsoever (including legal and other fees and disbursements) arising out of, sustained, incurred or paid by any of the Released Parties directly or indirectly in respect of:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-base text-gray-700 leading-relaxed font-body ml-4">
                <li><strong>a)</strong> any information or other content You provide on or through this website or which is sent to the Company by email or other correspondence;</li>
                <li><strong>b)</strong> your use or misuse of the Content or this Website, including without limitation infringement claims;</li>
                <li><strong>c)</strong> your violation or your failure to comply with any of your obligations set forth in this Agreement;</li>
                <li><strong>d)</strong> the inaccuracy or falsity of any representation or warranty made by You in relation to this Agreement; or</li>
                <li><strong>e)</strong> your violation or your fail to comply with any applicable laws or regulations; or</li>
                <li><strong>f)</strong> your alleged or actual negligence or wilful misconduct.</li>
              </ol>
            </div>

            {/* Section 12: Governing Law */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                12. Governing Law
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                Any dispute, controversy or claim arising out of or in connection with this Agreement, or the breach, termination or invalidity thereof, shall be finally settled by arbitration in accordance with the Rules of London Court of International Arbitration (the "LCIA"). The arbitral tribunal shall be composed of a sole arbitrator. The seat of arbitration shall be Stockholm, Sweden. The language to be used in the arbitral proceedings shall be English. This Agreement shall be governed by the substantive law of England.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                You agree to waive any right You may have to the commencement of or participation in any class action against Company related to this website. You also agree to opt out of any class proceedings against Company or its licensors.
              </p>
            </div>

            {/* Section 13: Interpretation */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                13. Interpretation
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                In this Agreement, unless the context requires a different interpretation:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-base text-gray-700 leading-relaxed font-body ml-4">
                <li><strong>a)</strong> the singular includes the plural and vice versa;</li>
                <li><strong>b)</strong> references to sub-clauses, clauses, schedules or appendices are to sub-clauses, clauses, schedules or appendices of this Agreement;</li>
                <li><strong>c)</strong> a reference to a person includes firms, companies, government entities, trusts and partnerships;</li>
                <li><strong>d)</strong> reference to any statutory provision includes any modification or amendment of it;</li>
                <li><strong>e)</strong> the headings and sub-headings do not form part of this Agreement.</li>
              </ol>
            </div>

            {/* Section 14: Entire Agreement */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                14. Entire Agreement
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                This Agreement, as it may be amended from time to time in accordance with the provisions of Section 15, and any and all other legal notices and policies on this website, constitute the entire agreement between You and the Company with respect to the use of this website and the Content.
              </p>
            </div>

            {/* Section 15: Amendment and Waiver */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                15. Amendment and Waiver
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                The Company reserves the right, in its discretion, to amend this Agreement at any time by posting amendments on this website. You are responsible for periodically reviewing the amendments on this website, and You are deemed to be aware of such amendments. If You do not agree to the amended terms and conditions, You shall immediately stop using this website. Access to this website or use of this website after any amendments have been posted shall constitute your acknowledgement and acceptance of the amended terms and conditions.
              </p>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                No supplement, modification or amendment to this Agreement and no waiver of any provision of this Agreement shall be binding on the Company unless executed by the Company in writing or posted by the Company to the website. No waiver of any of the provisions of this Agreement shall be deemed to be or shall constitute a waiver of any other provision (whether or not similar) in this Agreement or any other agreement between You and the Company nor shall such waiver constitute a continuing waiver unless otherwise expressly provided.
              </p>
            </div>

            {/* Section 16: Severability */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                16. Severability
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                Any provision of this Agreement which is held by an arbitrator to be illegal, invalid or unenforceable in such jurisdiction shall, as to that jurisdiction, be ineffective to the extent of such illegality, invalidity or unenforceability and shall otherwise be enforced to the maximum extent permitted by law, all without affecting the remaining provisions of this Agreement or affecting the legality, validity or enforceability of such provision in any other jurisdiction.
              </p>
            </div>

            {/* Section 17: Inurement */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                17. Inurement
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                This Agreement shall inure to the benefit of and be binding upon You and the Company and our respective successors and permitted assigns. You acknowledge having read this Agreement before accepting it and using the website, having the authority to accept this Agreement and having received a copy of this Agreement.
              </p>
            </div>

            {/* Section 18: Assignment */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                18. Assignment
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                This Agreement and any rights and licenses granted hereunder may not be transferred or assigned by You and any attempted transfer or assignment shall be null and void.
              </p>
            </div>

            {/* Section 19: Language */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                19. Language
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body">
                The parties hereto agree that this Agreement is drafted and executed in the English language.
              </p>
            </div>

            {/* Section 20: Definitions and interpretation */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
                20. Definitions and interpretation
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-6">
                In these Website Terms of Use, the following definitions are used:
              </p>
              
              {/* Definitions Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-heading">Definition</th>
                      <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-900 font-heading">Interpretation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body font-semibold">"Customer"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">means the customer to whom BrosPay is providing the Services.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body font-semibold">"Website Terms of Use"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">means these Website Terms of Use.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body font-semibold">"Linked Website"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">means a website or entity other than BrosPay, which are linked through a hyperlink, or through another means (including text, image, and moving image) to or from this Website.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body font-semibold">"User" or "you"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">any third party that accesses the Website and is not either (i) employed by BrosPay Limited and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to BrosPay and accessing the Website in connection with the provision of such services.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body font-semibold">"we", "us", "our" and "ourselves", or "the Company"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">refers to BrosPay Limited, a company incorporated in England and Wales with registered number 11654625 whose registered office is at 37th floor, One Canada Square, Canary Wharf, London, E14 5AA, United Kingdom.</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body font-semibold">"Website", "Web site" or "Site"</td>
                      <td className="border border-gray-300 px-4 py-3 text-sm text-gray-700 font-body">the Website that you were browsing when you clicked on a link to these Terms of Use, including all subsidiary pages, https://valorapay.com/, and any sub-domains of this site unless expressly excluded by their own terms and conditions.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 font-heading">
                Contact Us
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-body mb-4">
                If you have any questions, concerns, or requests regarding these Terms of Use, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-base text-gray-700 leading-relaxed font-body mb-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:info@valorapay.com" className="text-primary hover:text-primary/80 underline font-body">
                    info@valorapay.com
                  </a>
                </p>
                <p className="text-base text-gray-700 leading-relaxed font-body">
                  <strong>Address:</strong> BrosPay Limited, 37th floor, One Canada Square, Canary Wharf, London, E14 5AA, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

