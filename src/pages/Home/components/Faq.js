import { FaqAccess } from "./FaqAccess";
export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why eBook instead of a real book?",
          "answer": "If these paper printed books were to be replaced with a digital book, it could save all those trees from being chopped down. Apart from cutting trees, it also adds to the carbon footprint by transporting the raw materials, production process in the mill, and the final shipping."
        },
        {
          "id": 2,
          "question": "Do you offer protection against fraud?",
          "answer": "Yes, eBookStore provides protection against fraud through the buyer Protection Fund (BPF) program."
        },
        {
          "id": 3,
          "question": "Can customers leave feedback and why is customer feedback important?",
          "answer": "Yes, customers can leave feedback and ratings for the products they purchase. Customer feedback is important as it helps build trust and credibility for the seller. Positive feedback and high ratings enhance the seller's reputation, attracting more customers and increasing sales. It also provides valuable insights for sellers to improve their products and services."
        },
        {
          "id": 4,
          "question": "I am having trouble during registration. Can I get some help?",
          "answer": "If you are facing any issues during the registration process, please provide your details in the form at the end of this section. Our team will promptly assist you with your registration."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="faqaccess-flush" data-faqaccess="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              {faqs.map((faq) => (
                <FaqAccess key={faq.id} faq={faq}/>
              ))}
                          
            </div>
      </section>
  )
}
