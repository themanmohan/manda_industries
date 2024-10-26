import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const advatageLists = [
    {
    title: "Bubble wrap is an excellent insulator against impacts.",
    desc: "Bubble wrap is exceedingly good at its primary function: to keep goods safe and secure during transit. Freight transit unfortunately often includes rough handling or bumps in the road—thus, shippers protect their goods with bubble wrap. Its bubbles of sealed air provide a flexible but durable cushion that forms a surprisingly sturdy barrier against impact. When doubled or tripled up in layers and combined with a sturdy corrugated shipping box, it can protect goods from even severe impacts."
  },
  {
    title: "Bubble wrap is reusable.",
    desc: "When you’re done with your bubble wrap, don’t throw it away! Bubble wrap can almost always be reused unless it’s been significantly damaged. As long as most of the bubbles are intact, you’re good to use your bubble wrap, again and again, to protect your most valuable goods in transit. This makes bubble wrap a much more eco-friendly option compared to some types of packaging that are difficult to reuse, and it can offer big potential cost savings as well. It’s also great for companies that offer easy customer returns, as it’s simple to set up as part of a ready-to-go returns box."
  },{
    title: "Bubble wrap is lightweight.",
    desc: "Bubble wrap is among the lightest void fill packaging materials. Its structure is mostly air, with a few layers of ultra-lightweight plastic for durability. That makes a seriously light packaging material that can translate to savings in shipping costs, especially if you’re shipping in bulk. Less packaging means lower costs when shipping by weight, as well as potentially lower fuel costs when shipping large amounts of goods."
  },{
    title: "Bubble wrap is cost-effective.",
    desc: "Bubble wrap isn’t just reusable—it’s actually a better deal to begin with! Businesses that ship a lot of individual goods should also look into our individual bubble wrap bags—bubble wrap and a bag, all in one! Any way you slice it, bubble wrap is a bargain."
  },{
    title: "Bubble wrap is versatile. ",
    desc: "Bubble wrap can insulate and protect almost any kind of small cargo. It can easily be cut with scissors into almost any form you need, and large sheets of it are malleable enough to effectively wrap and protect many kinds of oddly-shaped cargo. And its applications outside shipping are wide as well. Some people even use it to insulate their windows in the summer. With a little bit of creativity, the possibilities are almost limitless!"
  }
];

  return (
    <div id="accordion-flush">

      {advatageLists.map((advantage, index) => (
        <div key={index}>  {/* Add key for mapped elements */}
          <h2 id={`accordion-flush-heading-${index + 1}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 rtl:text-right info-text border-b border-gray-200 dark:border-gray-70 gap-3"
              onClick={() => toggleAccordion(index + 1)}
              aria-expanded={activeIndex === index + 1}
              aria-controls={`accordion-flush-body-${index + 1}`}
            >
              <span className="font-krona">{index+1}. {advantage?.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${activeIndex === index + 1 ? 'rotate-180' : ''} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-flush-body-${index + 1}`}
            className={`${activeIndex === index + 1 ? 'block' : 'hidden'}`}
            aria-labelledby={`accordion-flush-heading-${index + 1}`}
          >
            <div className="py-5 border-b border-gray-200 dark:border-gray-700">
              <p className="mb-2 info-text">{advantage.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
