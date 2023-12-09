import FAQAccordions from "./FAQAccordions";

const FAQSection = () => {
  return (
    <section className="flex flex-row justify-center items-center flex-wrap max-w-fit sm:px-0 px-6 sm:space-x-20 lg:space-y-0 space-y-10">
      {/* FAQ logo at the left */}
      <div className="flex items-center justify-center">
        <img src="/faq-logo.svg" alt="faq logo" className="max-w-[300px]"></img>
      </div>

      {/* Content at the right */}

      {/* Text 1 */}
      <div>
        <div className="w-fit">
          <div className="relative flex flex-row">
            <span className="absolute w-full flex justify-end items-end -translate-y-6 translate-x-10">
              <img src="/rays.svg" alt="red rays" className="w-12"></img>
            </span>
            <p className="text-xl font-bold font-sans">
              Frequently Asked Questions
            </p>
          </div>
        </div>

        {/* Text 2 */}
        <div className="flex flex-col md:flex-row ">
          <p className="flex items-center ">
            <span className="mr-2">
              Interesting questions you might ask about
            </span>
            <img
              src="/devfest-logo.svg"
              alt="devfest logo"
              className="w-[71px] pt-1"
            />
          </p>
        </div>

        {/* Accordion */}
        <FAQAccordions />
      </div>
    </section>
  );
};

export default FAQSection;
