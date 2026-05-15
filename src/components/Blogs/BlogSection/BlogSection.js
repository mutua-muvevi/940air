import React from 'react'
import { useNavigate } from 'react-router-dom'
import theTruck from "../../../assets/truck.jpg"
import harborOne from "../../../assets/harbor.jpg"
import harborTwo from "../../../assets/harbor1.jpg"
import harborThree from "../../../assets/harbor2.jpg"
import planeImage from "../../../assets/model-planes-1566822_1920.jpg"
import containerImage from "../../../assets/container.jpg"
import './BlogSection.css'

export const blogPostsData = [
    {
        slug: 'science-of-temperature-controlled-logistics',
        title: 'The Science of Temperature-Controlled Logistics',
        date: '15-05-2026',
        tag: 'LOGISTICS INSIGHTS',
        image: theTruck,
        excerpt: "Maintaining a constant temperature of -180°C across continents is no small feat. It requires a blend of advanced technology, meticulous planning, and specialized handling. At 940 Air Cargo, we've mastered this art...",
        content: "Temperature-controlled logistics is the backbone of the global medical and perishable goods supply chain. When it comes to transporting sensitive materials like IVF gametes, vaccines, or fresh produce, even a minor fluctuation in temperature can result in total loss.\n\nAt 940 Air Cargo, we utilize state-of-the-art cryogenic containers and real-time thermal tracking systems. Our dedicated handlers are trained specifically to manage transitions between ground and air transport with zero exposure to ambient conditions.\n\nThis level of precision is why leading healthcare providers across East Africa trust us with their most critical deliveries."
    },
    {
        slug: 'expanding-our-reach-in-east-africa',
        title: 'Expanding our Reach in East Africa',
        date: '10-04-2026',
        tag: 'COMPANY NEWS',
        image: harborOne,
        excerpt: "We are proud to announce the opening of our new distribution hubs, further strengthening our ground transportation network...",
        content: "As trade volumes across the African continent continue to surge, the demand for robust, reliable ground logistics has never been higher. 940 Air Cargo is thrilled to announce the strategic expansion of our trucking fleet and the opening of two new distribution hubs in key border towns.\n\nThese new hubs will significantly reduce transit times for cross-border shipments, streamlining the customs clearing process and providing secure, monitored warehousing capabilities. Our expansion underscores our commitment to being the leading logistics provider connecting African businesses to the global market."
    },
    {
        slug: 'chargeable-weight-explained',
        title: 'Chargeable Weight Explained: A Guide for Shippers',
        date: '22-03-2026',
        tag: 'GUIDES',
        image: harborTwo,
        excerpt: "Understanding how freight costs are calculated can save your business thousands. We break down the concept of volumetric weight...",
        content: "One of the most common points of confusion for new importers and exporters is the concept of 'Chargeable Weight'. Why does a box of feathers cost the same to ship as a box of lead?\n\nAirlines and sea carriers calculate freight charges based on whichever is greater: the actual gross weight of the cargo, or its volumetric (dimensional) weight. Volumetric weight is a calculation that reflects the density of a package—the amount of space it occupies in relation to its actual weight.\n\nBy understanding this formula, shippers can optimize their packaging. Using smaller, tighter boxes for lightweight goods can drastically reduce volumetric weight, directly saving your business money on shipping costs."
    },
    {
        slug: 'sustainable-shipping-solutions',
        title: 'Sustainable Shipping Solutions for 2026',
        date: '05-02-2026',
        tag: 'SUSTAINABILITY',
        image: harborThree,
        excerpt: "At 940 Air Cargo, we are committed to reducing our carbon footprint through optimized routing and eco-friendly logistics...",
        content: "The logistics industry is evolving, and sustainability is no longer just a buzzword—it is an operational imperative. At 940 Air Cargo, we recognize our responsibility to minimize the environmental impact of global shipping.\n\nWe are actively implementing sustainable shipping solutions across our network. This includes optimizing flight paths to reduce fuel consumption, upgrading our trucking fleet to modern, low-emission vehicles, and utilizing recyclable packaging materials for consolidated shipments.\n\nPartnering with 940 Air Cargo means choosing a logistics provider that cares about the future of our planet as much as the success of your business."
    },
    {
        slug: 'navigating-customs-in-kenya',
        title: 'Navigating Customs: A Guide for Importers in Kenya',
        date: '18-01-2026',
        tag: 'GUIDES',
        image: containerImage,
        excerpt: "Customs clearance can be a daunting process. Learn the essential documentation and regulations required to import goods seamlessly into JKIA...",
        content: "Clearing cargo through customs at Jomo Kenyatta International Airport (JKIA) or the Port of Mombasa requires meticulous preparation. Delays are often caused by missing documentation or incorrect tariff classifications.\n\nTo ensure a smooth clearance process, importers must prepare the Import Declaration Form (IDF), a Certificate of Conformity (CoC) from the country of origin, commercial invoices, and packing lists well in advance.\n\nOur dedicated customs brokerage team at 940 Air Cargo handles these complexities daily. We leverage our local expertise and strong relationships with regulatory bodies to clear your cargo swiftly, avoiding costly demurrage charges."
    },
    {
        slug: 'future-of-air-freight',
        title: 'The Future of Air Freight: Speed vs Capacity',
        date: '02-12-2025',
        tag: 'INDUSTRY TRENDS',
        image: planeImage,
        excerpt: "As e-commerce booms, the aviation logistics sector faces new challenges balancing rapid delivery times with aircraft payload capacities...",
        content: "The surge in global e-commerce has fundamentally shifted the dynamics of air freight. Consumers now expect rapid, door-to-door delivery, placing immense pressure on cargo airlines to prioritize speed.\n\nHowever, this demand for speed must be balanced against aircraft payload capacities. The industry is seeing a rise in the conversion of passenger planes to freighters (P2F) to meet capacity demands. At 940 Air Cargo, we navigate this dynamic environment by leveraging block space agreements with major carriers, ensuring that our clients' cargo gets priority boarding even during peak seasons."
    }
];

const BlogSection = ({ isFullPage = false }) => {
    const navigate = useNavigate();

    return (
        <div className="dedicated-blog-section">
            {!isFullPage && (
                <div className="dedicated-blog-header">
                    <h2>Our Articles</h2>
                </div>
            )}
            
            <div className="dedicated-blog-grid">
                {blogPostsData.map((post, index) => (
                    <div 
                        className="dedicated-blog-card" 
                        key={index}
                        onClick={() => navigate(`/blogs/${post.slug}`)}
                    >
                        <div className="dedicated-blog-img-wrapper">
                            <img src={post.image} alt={post.title} />
                            <span className="dedicated-blog-tag">{post.tag}</span>
                        </div>
                        <div className="dedicated-blog-content">
                            <span className="dedicated-blog-date">{post.date}</span>
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                            <span className="dedicated-blog-readmore">Read Article &#8594;</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogSection
