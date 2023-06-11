// import "./Faq.css"
import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';

function Faq() {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <div className="faq" style={{ backgroundColor: 'white', width: '1000px', margin: '30px auto', padding: '30px 80px', boxShadow: '0px 5px 10px lightgray' }}>
      <h3 style={{ marginBottom: '40px', marginTop: '10px',color: 'gray' }}>Frequently Asked Questions(FAQs)</h3>
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">1. How can I create an account on Shopease?</AccordionHeader>
          <AccordionBody accordionId="1">
            Creating an account on Shopease is simple. Just click on the "Sign Up" or "Create Account" button on the top right corner of the website and follow the instructions to provide your details and set up your account. 
            does limit overflow.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">2. How can I place an order?</AccordionHeader>
          <AccordionBody accordionId="2">
           To place an order, browse through our product catalog, select the item you wish to purchase, choose the desired quantity, and click on the "Add to Cart" or "Buy Now" button. Follow the prompts to provide your shipping information and complete the payment process.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">3. What payment methods are accepted on Shopease?</AccordionHeader>
          <AccordionBody accordionId="3">
          We provide payment methods, such as Cash On Delivery and Online Payment. During the checkout process, you will see the available payment options.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="4">4. How long does it take to receive my order?</AccordionHeader>
          <AccordionBody accordionId="4">
          The delivery time depends on your location and the specific product. We strive to process orders as quickly as possible, and estimated delivery times are mentioned on the product pages. You can also track your order through the "Order History" section of your account.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="5">5. What is your return and refund policy?</AccordionHeader>
          <AccordionBody accordionId="5">
          We have a hassle-free return and refund policy. If you receive a defective or damaged product, or if you are not satisfied with your purchase for any reason, you can initiate a return request within a specified period. Please refer to our "Return Policy" page for detailed information.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="6">6. Can I cancel or modify my order after placing it?</AccordionHeader>
          <AccordionBody accordionId="6">
          If you need to cancel or modify your order, please reach out to our customer support team as soon as possible. While we cannot guarantee that changes can be made once the order is processed, we will do our best to assist you.
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="7">7. How can I track my order?</AccordionHeader>
          <AccordionBody accordionId="7">
            (To be implemented later)
          Once your order is shipped, you will receive a confirmation email or SMS with a tracking number. You can use this tracking number to monitor the progress of your delivery through our website or the courier company's tracking portal.
          </AccordionBody>
        </AccordionItem>


        <AccordionItem>
          <AccordionHeader targetId="8">8. Do you offer international shipping?</AccordionHeader>
          <AccordionBody accordionId="8">
          Currently, we only offer shipping within India. We do not provide international shipping services. Please check our website or contact our customer support for more details.
          </AccordionBody>
        </AccordionItem>


        <AccordionItem>
          <AccordionHeader targetId="9">9. How can I contact customer support?</AccordionHeader>
          <AccordionBody accordionId="9">
          Our customer support team is here to assist you. You can reach us through the "About Us" page on our website, where you'll find options to email us or submit a support ticket. We strive to respond to inquiries promptly.
          </AccordionBody>
        </AccordionItem>


        <AccordionItem>
          <AccordionHeader targetId="10">10. Are my personal and payment details secure?</AccordionHeader>
          <AccordionBody accordionId="10">
          Yes, we take your privacy and security seriously. We employ industry-standard encryption technologies to protect your personal information and payment details. Rest assured that your data is handled securely and confidentially.
          </AccordionBody>
        </AccordionItem>


      </Accordion>
      </div>
    </>
  )
}

export default Faq