import React,{useEffect} from 'react';
import '../styles/terms.css'; 

const Terms = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      })
    return (
        <div className="terms-conditions">
            <h1 className='tandcheading'>Terms and Conditions</h1>
            <p className='tandc_p'><strong>Effective Date:</strong> 20th April, 2025 to 20th April, 2030</p>

            <h2 className='tandc_h2'>1. Acceptance of Terms</h2>
            <p>By accessing or using the Globetrotter website (the “Site”), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with these terms, please do not use the Site.</p>

            <h2 className='tandc_h2'>2. Use of the Site</h2>
            <ul className='tandc_ul'>
                <li className='tandc_li'><strong>Eligibility:</strong> You must be at least 18 years old to use this Site or have parental consent if you are under 18.</li>
                <li className='tandc_li'><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</li>
                <li className='tandc_li'><strong>Prohibited Activities:</strong>  You agree not to use the Site for any unlawful purpose, to impersonate any person or entity, or to disrupt the Site’s functionality.</li>
            </ul>

            <h2 className='tandc_h2'>3. Travel Information</h2>
            <ul className='tandc_ul'>
                <li className='tandc_li'><strong>Accuracy:</strong> We strive to provide accurate details for tours, packages, accommodations, and travel guides. However, we do not guarantee the completeness or reliability of this information.</li>
                <li className='tandc_li'><strong>Availability:</strong> All travel packages are subject to availability and may change without notice.</li>
            </ul>

            <h2 className='tandc_h2'>4. Bookings and Payment</h2>
            <ul className='tandc_ul'>
                <li className='tandc_li'><strong>Booking Acceptance:</strong> All bookings are subject to availability and confirmation. We reserve the right to cancel or modify bookings at our discretion.</li>
                <li className='tandc_li'><strong>Payment:</strong> You agree to provide accurate payment information and authorize us to charge you for all booked services.</li>
            </ul>

            <h2 className='tandc_h2'>5. Cancellations and Refunds</h2>
            <ul className='tandc_ul'>
                <li className='tandc_li'><strong>Cancellations:</strong> Cancellation policies vary per package and will be disclosed at the time of booking.</li>
                <li className='tandc_li'><strong>Refunds:</strong>  Refunds, if applicable, will be processed according to the specific policy associated with each booking.</li>
            </ul>

            <h2 className='tandc_h2'>6. Intellectual Property</h2>
            <ul className='tandc_ul'>
                <li className='tandc_li'><strong>Ownership:</strong> All content on the Site, including logos, itineraries, designs, and software, is the property of Globetrotter or its licensors.</li>
                <li className='tandc_li'><strong>Usage:</strong> You may not copy, distribute, or create derivative works without our written consent.</li>
            </ul>

            <h2 className='tandc_h2'>7. Third-Party Services</h2>
            <p>Globetrotter may integrate third-party services (e.g., hotel, flight, or activity providers). We are not responsible for the acts or omissions of these third parties.</p>

            <h2 className='tandc_h2'>8. Limitation of Liability</h2>
            <p>The Site is provided "as is" without warranties of any kind. Globetrotter shall not be liable for any indirect or incidental damages arising from your use of the Site.</p>

            <h2 className='tandc_h2'>9. Changes to Terms</h2>
            <p>We may update these Terms and Conditions at any time. Continued use of the Site constitutes your agreement to the updated terms.</p>

            <h2 className='tandc_h2'>10. Contact Us</h2>
            <p className='tandc_p'>For questions or concerns about these Terms, contact us at <a href="mailto:support@globetrotter.com" className='tandc_link'>ardnss@globetrotter.com</a>.</p>
        </div>
    );
};

export default Terms;
