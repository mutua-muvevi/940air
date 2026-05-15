import React, { useEffect } from 'react'
import Mainnav from '../../mainnav/Mainnav'
import Footer from '../../main/footer/Footer'
import './TermsAndConditions.css'

const TermsAndConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            <Mainnav />
            <div className="terms-hero">
                <h1>Terms and Conditions</h1>
                <p>Standard Trading Conditions and Operational Framework</p>
            </div>

            <div className="terms-content-container">
                <section>
                    <h2>1. Conclusion of Contract</h2>
                    <div className="term-block">
                        <h3>Electronic Communication</h3>
                        <p><strong>1.1</strong> Customer and Nine Forty Air Cargo Limited communicate with each other electronically and acknowledge and agree that electronic communication (e.g., by Email, Fax, Internet) is a proper means for concluding contracts and agree not to contest the validity of contracts on the basis that they were concluded electronically.</p>
                        
                        <h3>Offer and Acceptance</h3>
                        <p><strong>1.2</strong> Pricing and booking information provided via the quotation does not constitute binding offers on the part of Nine Forty Air Cargo Limited.</p>
                        <p><strong>1.3</strong> Quotes are the result of ad-hoc calculations based on the Services requested by Customer in accordance with the Shipment information provided. The pricing shown is valid for the period stated during the quoting process.</p>
                        <p><strong>1.4</strong> The Shipment information provided by Customer during the quotation and booking process equally has no legally binding effect, until Customer places the booking which will complete the Customer’s order.</p>
                        <p><strong>1.5</strong> In due course Nine Forty Air Cargo Limited will send via email an acceptance or rejection of the offer. An acceptance will lead to a legally binding contract.</p>
                    </div>
                </section>

                <section>
                    <h2>2. Transportation and Hindrances</h2>
                    <div className="term-block">
                        <p><strong>3.1</strong> Nine Forty Air Cargo Limited shall carry out its Services with skill and care and in accordance with Customer’s instructions as agreed. If Customer’s instructions are inaccurate or incomplete, Nine Forty Air Cargo Limited may act as it reasonably deems fit at Customer’s risk and expense.</p>
                        <p><strong>3.2</strong> If at any time Nine Forty Air Cargo Limited’s performance is affected by any hindrance or risk not arising from neglect, Nine Forty Air Cargo Limited shall be exempt from its obligations and may make the Shipment available at a place deemed safe and convenient.</p>
                        <p><strong>3.3</strong> Quotes apply to stackable general cargo only and exclude dangerous goods, perishables, valuables, temperature controlled, oversized, or any special cargo unless explicitly mentioned.</p>
                        <p><strong>3.5</strong> Quotes include air freight charges which are based on actual or dimensional weight, whichever is greater. Dimensional weight is based on the industry standard volume ratio 1:6 (1:167 factor).</p>
                        <p><strong>3.9</strong> Any fee or charge, whether new or existing, imposed by any government agency, carrier, or third party will be passed on in full to the Customer, plus duties and taxes.</p>
                    </div>
                </section>

                <section>
                    <h2>3. Customer's Undertaking</h2>
                    <div className="term-block">
                        <p><strong>4.1</strong> It is a condition of the contract that the Customer warrants:</p>
                        <ul>
                            <li>It is the owner of the Shipment or is authorized by the owner.</li>
                            <li>The Shipment shall be securely and properly packed in compliance with statutory regulations.</li>
                            <li>None of the Shipments are considered illegal under any applicable laws.</li>
                            <li>Customer will inform Nine Forty Air Cargo Limited in writing of any relevant matters, including special precautions necessitated by the nature or weight of the Shipment.</li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2>4. Liability</h2>
                    <div className="term-block">
                        <p><strong>5.1</strong> Nine Forty Air Cargo Limited’s liability is based on its general obligation to perform Services in a professional manner.</p>
                        <p><strong>5.2</strong> We are not liable for acts and omissions by third parties such as carriers, warehousemen, and port authorities unless we failed to exercise due diligence in selecting them.</p>
                        <p><strong>5.7</strong> In no event shall we be liable for loss or damage to the Shipment in an amount exceeding the equivalent of 2 SDR per kilogram of gross weight of the Shipment lost or damaged.</p>
                        <p><strong>5.9</strong> Exclusions of Liability: We shall in no event be liable for valuables/dangerous goods not declared, loss following from delay, or indirect/consequential loss such as loss of profit.</p>
                    </div>
                </section>

                <section>
                    <h2>5. Insurance</h2>
                    <div className="term-block">
                        <p><strong>6.1</strong> Unless so otherwise instructed in writing and reimbursed for by Customer, Nine Forty Air Cargo Limited does not insure the Shipment and Customer shall self-insure or make arrangements to cover the Shipment against all insurable risks to their full insurable value.</p>
                    </div>
                </section>

                <section>
                    <h2>6. Confidentiality</h2>
                    <div className="term-block">
                        <p><strong>10.1</strong> The contents of this contract and any information on our business is sensitive and confidential. Customer will ensure its directors, employees, agents, and subcontractors shall not disclose any confidential information.</p>
                    </div>
                </section>

                <section>
                    <h2>7. Governing Law and Jurisdiction</h2>
                    <div className="term-block">
                        <p><strong>13.1</strong> The relationship between Customer and Nine Forty Air Cargo Limited shall be governed by the laws of the country in which Nine Forty Air Cargo Limited is incorporated, and the courts at the location of Nine Forty Air Cargo Limited’s registered office shall have exclusive jurisdiction.</p>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default TermsAndConditions
