import React, { useEffect } from 'react'
import Mainnav from '../../mainnav/Mainnav'
import Footer from '../../main/footer/Footer'
import './ResourceFormula.css'

const ResourceFormula = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="resource-page">
            <Mainnav />
            <div className="resource-hero">
                <h1>Resource Formula</h1>
                <p>Calculate Chargeable Weight for Air & Sea Freight Shipments</p>
            </div>

            <div className="resource-content-container">
                <section>
                    <h2>What is Chargeable Weight?</h2>
                    <p>As Freight forwarders we do not use gross weight or volume weight of the cargo but the chargeable weight when calculating freight cost.</p>
                    <p>To help us answer this question, we must look at what nature of goods are shipped. Is it not true that some goods are heavy but take very limited space; whereas others are light but take lots of space in the room during transportation.</p>
                    <p>Imagine a shipment of cotton and steel. It is obvious that a cotton shipment will occupy more space compared to a steel shipment. However, a steel shipment will be weighing more. Should both be charged using volume Weight?</p>
                </section>

                <section>
                    <h2>What is the Industry practice?</h2>
                    <p>They choose the higher value between the volumetric weight and the actual weight of the cargo. This is fair enough because cotton shipments will occupy more space while steel shipments will weigh more. In both cases, shippers will be choosing the measurement with greater value.</p>
                </section>

                <section>
                    <h2>How do we calculate the Chargeable Weight?</h2>
                    <p>To understand the definition of light goods and heavy goods, we need to know what is the actual gross weight, volume weight, and chargeable weight.</p>
                    
                    <div className="formula-definitions">
                        <div className="definition-card">
                            <h3>1. Actual Weight</h3>
                            <p>Actual Weight, which is the weight obtained from weighing (overweight), including Gross Weight (G.W.) and Net Weight (N.W.). The most common is the actual gross weight.</p>
                            <p>In air cargo transportation, the actual gross weight is often compared to the calculated volumetric weight, whichever is calculated and charged.</p>
                        </div>

                        <div className="definition-card">
                            <h3>2. Volume Weight</h3>
                            <p>Volume Weight, also named as Volumetric Weight or Dimensions Weight, which is the weight calculated from the volume of the cargo according to a certain conversion factor or calculation formula.</p>
                            <p>In air cargo transportation, the calculation factor for calculating the volumetric weight is generally 1:167, that is, one cubic meter is equal to about 167 kilograms.</p>
                            <div className="example-box">
                                <strong>Example 1 (Light Cargo):</strong>
                                <p>Actual gross weight = 95 kg, Volume = 1.2 CBM. Calculated according to the coefficient of air transportation 1:167, the volume weight is 1.2 * 167 = 200.4 kg. Since 200.4 kg &gt; 95 kg, this cargo (Light Weight Cargo/Measurement Cargo) is charged by volume.</p>
                            </div>
                            <div className="example-box">
                                <strong>Example 2 (Heavy Cargo):</strong>
                                <p>Actual gross weight = 560 kg, Volume = 1.5 CBM. Calculated according to the coefficient of air transport 1:167, the volume weight is 1.5 * 167 = 250.5 kg. Since 250.5 kg &lt; 560 kg, this cargo (Heavy Cargo/High Density Cargo) is charged according to actual gross weight.</p>
                            </div>
                        </div>

                        <div className="definition-card">
                            <h3>3. Chargeable Weight</h3>
                            <p>Chargeable Weight, referred to as C.W., which is used to calculate the weight of freight or other miscellaneous charges.</p>
                            <p>The chargeable weight is either the actual gross weight or the volume weight. Chargeable weight = Actual weight VS Volume weight, and the larger one is the weight for calculating the shipping cost.</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2>How does air freight calculate volumetric weight?</h2>
                    <ul>
                        <li><strong>Regular items:</strong> Length (cm) x width (cm) x height (cm) ÷ 6000 = volumetric weight (KG), ie 1 CBM ≈ 166.6666 KG.</li>
                        <li><strong>Irregularly Shaped:</strong> The longest (cm) x widest (cm) x highest (cm) ÷ 6000 = volumetric weight (KG), ie 1 CBM ≈ 166.666667 KG. This is an internationally accepted algorithm.</li>
                    </ul>
                    <p>In short, 1 cubic meter of weight greater than 166.67 kilograms is called heavy cargo, and less than 166.67 kilograms is called foam cargo. Heavy goods are charged according to actual gross weight, foamed goods according to volumetric weight.</p>
                </section>

                <section>
                    <h2>Precautions</h2>
                    <div className="precautions-box">
                        <ol>
                            <li>CBM is the abbreviation of Cubic Meter.</li>
                            <li>Only express companies (DHL, FedEx, TNT, UPS, Aramex) use the algorithm: <code>Length (cm) × width (cm) × height (cm) ÷ 5000</code> to calculate the volume weight.</li>
                            <li>In order to make full use of the space and load capacity of the airplane, the heavy cargo and the light cargo will generally be reasonably matched. Air cargo loading is a technical activity – well matched, it can greatly increase extra profit. Too many heavy goods waste space (overweight before filling). Too much light cargo wastes load capacity.</li>
                            <li>What customers often overlook is the design of the box itself. The size indicated on the box is the inner diameter, but actual shipment is measured by the outer dimensions.</li>
                        </ol>
                    </div>
                </section>

                <section>
                    <h2>Sea Shipping Calculation Method</h2>
                    <p>The division of heavy goods and light goods by sea is much simpler than that of air transportation. China’s sea freight consolidation business basically divides heavy goods and light goods according to the standard of <strong>1 cubic meter equal to 1 ton.</strong></p>
                    <ol>
                        <li>In LCL ocean freight, heavy goods are rare, basically light goods, and shipping LCL is calculated according to the volume of freight.</li>
                        <li>According to the stowage of the ship, any cargo with a cargo stowage factor less than the ship’s capacity factor is called Heavy Weight Cargo; any cargo with a cargo stowage factor greater than the ship’s tank capacity is called Measurement Cargo/Light Goods.</li>
                        <li>According to international shipping business practices, any cargo with a stowage factor of less than 1.1328 m³/ton or 40 cubic feet/ton is called heavy cargo; where the cargo stowage factor is greater than 1.1328 m³/ton, it is called light/foam goods.</li>
                        <li>The carrier or freight forwarder distinguishes heavy goods and light goods according to certain standards closely related to stowage, transportation, storage, and billing.</li>
                    </ol>
                </section>

                <div className="cta-box">
                    <h3>Need assistance moving your cargo via air or sea?</h3>
                    <p>We are happy to help you navigate these calculations and get you the best rates.</p>
                    <a href="/contact" className="cta-button">Contact Us Now</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ResourceFormula
