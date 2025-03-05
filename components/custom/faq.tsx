/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wS1i6yAbqFJ
 */

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { motion } from "framer-motion"

export default function FAQ() {
  return (
    <section className="container py-12 md:py-24 mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl space-y-6 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">
          Got a question? We've got answers. Check out our FAQ to find out more about our product and services.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mx-auto mt-12 max-w-3xl space-y-4"
      >
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={item.value} value={item.value}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionMotionContent>
                  <p>{item.answer}</p>
                </AccordionMotionContent>
              </motion.div>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}

// Framer Motion Animated Accordion Content
const AccordionMotionContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="overflow-hidden mx-auto"
    >
      <AccordionContent>{children}</AccordionContent>
    </motion.div>
  )
}

const faqItems = [
  {
    value: "item-1",
    question: "What is the return policy for your products?",
    answer: "We offer a 30-day return policy on all of our products. If you're not satisfied with your purchase, you can return it for a full refund within 30 days of delivery. Please note that items must be in their original condition and packaging to be eligible for a return."
  },
  {
    value: "item-2",
    question: "How long does it take to receive my order?",
    answer: "We typically ship orders within 1-2 business days of receiving them. Delivery times can vary depending on your location, but most orders arrive within 3-5 business days for standard shipping. We also offer expedited shipping options for faster delivery."
  },
  {
    value: "item-3",
    question: "Do you offer any discounts or promotions?",
    answer: "Yes, we offer a variety of discounts and promotions throughout the year. You can find our current offers on our website or by signing up for our email newsletter. We also offer bulk discounts for larger orders, so feel free to reach out to our sales team if you have any questions."
  },
  {
    value: "item-4",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also accept PayPal and Apple Pay for added convenience. All of our payment transactions are secured with industry-standard encryption to protect your personal and financial information."
  },
  {
    value: "item-5",
    question: "Do you offer any warranty or guarantee on your products?",
    answer: "Yes, we offer a 1-year warranty on all of our products. If you experience any issues with your purchase, please contact our customer support team and we'll be happy to assist you. We stand behind the quality of our products and are committed to ensuring your satisfaction."
  }
]
