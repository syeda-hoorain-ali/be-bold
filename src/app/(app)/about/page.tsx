import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Be Bold",
  description: "Learn more about Be Bold, our mission, and the amazing team behind our seamless shopping experience. We aim to provide high-quality products and the best customer service.",
  keywords: "about Be Bold, e-commerce platform, shopping, Be Bold mission"
}

const page = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">About Be Bold</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Be Bold is an e-commerce platform designed to deliver an exceptional shopping experience.
          Whether you&apos;re looking for the latest fashion, beauty products, or everyday essentials, Be Bold
          aims to provide high-quality products with a seamless purchasing process. Our mission is to empower
          our customers to explore and shop with confidence, knowing that they&apos;re getting the best value for their money.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Features of Be Bold</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-2">
            <strong>Easy Cart Management:</strong> Add products to your cart, adjust quantities, and review items before checkout.
          </li>
          <li className="mb-2">
            <strong>Real-Time Stock Updates:</strong> Ensure that the products you&apos;re ordering are in stock and available for delivery.
          </li>
          <li className="mb-2">
            <strong>Seamless Checkout:</strong> Our simple and secure checkout process allows you to complete your purchases in minutes.
          </li>
          <li className="mb-2">
            <strong>LocalStorage Integration:</strong> Your cart is saved locally, so you never lose your items, even when you close your browser.
          </li>
          <li className="mb-2">
            <strong>Personalized Recommendations:</strong> Based on your shopping history, we recommend products that match your preferences.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
        <p className="text-gray-700 leading-relaxed">
          At Be Bold, we believe in providing value beyond just products. We are committed to ensuring your shopping experience
          is smooth, enjoyable, and hassle-free. Our app offers a variety of high-quality products, competitive prices, and a streamlined
          user interface that helps you find what you&apos;re looking for quickly and easily.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Our Technology</h2>
        <p className="text-gray-700 leading-relaxed">
          Be Bold is built using modern web technologies such as React for the frontend, Tailwind CSS for styling, and Node.js
          with MongoDB for the backend. The platform leverages localStorage to ensure that your shopping cart data is saved across sessions,
          so you can always pick up where you left off. Our API handles real-time stock updates, ensuring the product availability data
          is always current.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-gray-700 leading-relaxed">
          Have questions, feedback, or need support? We&apos;re here to help! You can reach out to our support team at{' '}
          <Link href="mailto:support@beboldcart.com" className="text-blue-500 underline">support@beboldcart.com</Link>. We strive to provide
          timely responses to all inquiries and ensure that your shopping experience is a positive one.
        </p>
      </section>
    </div>
  );
};

export default page;
