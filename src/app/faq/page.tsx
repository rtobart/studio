import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ShieldQuestion } from "lucide-react";

// Sample FAQ data - this could also come from siteConfig.ts
const faqs = [
  {
    id: "faq-1",
    question: "What kind of ingredients do you use in your products?",
    answer: "At Herbazal, we pride ourselves on using high-quality, natural ingredients. This includes plant-based oils, butters, essential oils, and botanical extracts. We avoid harsh chemicals, synthetic fragrances, parabens, and sulfates. You can find a full list of ingredients on each product page."
  },
  {
    id: "faq-2",
    question: "Are your products suitable for sensitive skin?",
    answer: "Many of our products are formulated to be gentle and are suitable for sensitive skin. We recommend checking the ingredient list for any known allergens and performing a patch test before full use. Our 'Oatmeal & Honey Soother' soap is particularly popular for sensitive skin types."
  },
  {
    id: "faq-3",
    question: "How long does shipping take?",
    answer: "We typically process and ship orders within 1-2 business days. Standard shipping within the country usually takes 3-5 business days. You will receive a tracking number once your order has shipped. Please see our Shipping Policy page for more details."
  },
  {
    id: "faq-4",
    question: "What is your return policy?",
    answer: "We want you to be happy with your purchase! We accept returns of unused and unopened products within 30 days of purchase. Please contact our customer service to initiate a return. For more details, please visit our Returns Policy page."
  },
  {
    id: "faq-5",
    question: "Are your products vegan and cruelty-free?",
    answer: "Most of our products are vegan. Some products may contain ingredients like honey or goat milk; these will be clearly marked. We are 100% cruelty-free and do not test our products on animals, nor do we source ingredients from suppliers who test on animals."
  },
  {
    id: "faq-6",
    question: "How should I store my handmade soaps?",
    answer: "To prolong the life of your handmade soap, keep it dry between uses. We recommend using a draining soap dish and keeping it away from direct streams of water. Store unused soaps in a cool, dry place."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <section className="text-center mb-12">
        <ShieldQuestion className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our products, shipping, and policies.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-b border-border">
              <AccordionTrigger className="text-left hover:no-underline py-4 text-lg font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

       <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-foreground mb-3">Still have questions?</h2>
        <p className="text-muted-foreground mb-6">
          If you can't find the answer you're looking for, please don't hesitate to contact us.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
