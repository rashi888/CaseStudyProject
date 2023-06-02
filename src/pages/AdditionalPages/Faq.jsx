import React from 'react'
import "./Faq.css"

function Faq() {
  return (
    <>
      <div className="faq" style={{ backgroundColor: 'white', width: '1000px', margin: '30px auto', padding: '30px 80px', boxShadow: '0px 5px 10px lightgray' }}>
       
          <h3 style={{marginBottom:'40px',marginTop:'10px'}}>Frequently Asked Questions(FAQs)</h3>
    <div className="cardy-div">
      <h5>1. How can I create an account on Shopease?</h5>
      <p>Creating an account on Shopease is simple. Just click on the "Sign Up" or "Create Account" button on the top right corner of the website and follow the instructions to provide your details and set up your account.</p>
    </div>

    <div className="cardy-div">
      <h5>2.How can I place an order?</h5>
      <p>To place an order, browse through our product catalog, select the item you wish to purchase, choose the desired quantity, and click on the "Add to Cart" or "Buy Now" button. Follow the prompts to provide your shipping information and complete the payment process.</p>
    </div>

    <div className="cardy-div">
      <h5>3. What payment methods are accepted on Shopease?</h5>
      <p>We accept various payment methods, including credit/debit cards, net banking, and popular digital wallets. During the checkout process, you will see the available payment options.</p>
    </div>

    <div className="cardy-div">
      <h5>4. What payment methods are accepted on Shopease?</h5>
      <p>The delivery time depends on your location and the specific product. We strive to process orders as quickly as possible, and estimated delivery times are mentioned on the product pages. You can also track your order through the "Order History" section of your account.</p>
    </div>

    <div className="cardy-div">
      <h5>5. What is your return and refund policy?</h5>
      <p>We have a hassle-free return and refund policy. If you receive a defective or damaged product, or if you are not satisfied with your purchase for any reason, you can initiate a return request within a specified period. Please refer to our "Return Policy" page for detailed information.</p>
    </div>

    <div className="cardy-div">
      <h5>6. Can I cancel or modify my order after placing it?</h5>
      <p>If you need to cancel or modify your order, please reach out to our customer support team as soon as possible. While we cannot guarantee that changes can be made once the order is processed, we will do our best to assist you.</p>
    </div>

    <div className="cardy-div">
      <h5>7. How can I track my order?</h5>
      <p>Once your order is shipped, you will receive a confirmation email or SMS with a tracking number. You can use this tracking number to monitor the progress of your delivery through our website or the courier company's tracking portal.</p>
    </div>

    <div className="cardy-div">
      <h5>8. Do you offer international shipping?</h5>
      <p>Currently, we only offer shipping within [insert country or region]. We do not provide international shipping services. Please check our website or contact our customer support for more details.</p>
    </div>

    <div className="cardy-div">
      <h5>9. How can I contact customer support?</h5>
      <p>Our customer support team is here to assist you. You can reach us through the "Contact Us" page on our website, where you'll find options to email us or submit a support ticket. We strive to respond to inquiries promptly.</p>
    </div>

    <div className="cardy-div">
      <h5>10. Are my personal and payment details secure?</h5>
      <p>Yes, we take your privacy and security seriously. We employ industry-standard encryption technologies to protect your personal information and payment details. Rest assured that your data is handled securely and confidentially.</p>
    </div>
      </div>
    </>
  )
}

export default Faq