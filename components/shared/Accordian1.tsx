import { useState } from 'react';

export default function Accordion1() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const advatageLists = [
    {
    title: "Financial Losses",
    desc: " ",
    isChild: true,
    childrenArr:[
        {
        title:"Product Damage",
        description:"Poor packaging, especially for fragile or large durable goods like electronics, appliances, and furniture, can lead to damage during transit or storage. This results in",
        lists:[
            "Increased return rates",
            "Repair or replacement costs* borne by manufacturers.",
            "Financial strain due to *product recalls."
        ]},
    {
        title:"Logistical Costs",
        description:"Improperly packaged products may require **additional protective measures* later in the supply chain, raising *transportation costs* due to",
        lists:[
            "Bulkier or less optimized packaging requiring more space.",
            "Products requiring repacking or special handling.",
        ]
    }
]
  },

  {
    title: "Reputation Damage",
    isChild: true,
    childrenArr:[
        {
        title:"Customer Dissatisfaction",
        description:" Broken, damaged, or poorly packaged goods lead to negative customer experiences, damaging **brand loyalty* and resulting in poor reviews. This could also lead to:",
        lists:[
            "Loss of potential future sales.",
            "Higher customer service and complaint resolution costs.",
        ]},
    {
        title:"Retailer Relationships",
        description:" Retailers receiving damaged products face **inventory issues, leading to strained relationships with manufacturers, potential **cancellations of future orders, and **lost shelf space* in major retail outlets.",
        lists:[]
    }
]
  },
  {
    title: "Increased Returns and Warranty Claims",
    isChild: true,
    childrenArr:[
        {
        title:"",
        description:"",
        lists:[
            "Many consumer durables, like televisions, refrigerators, and washing machines, come with warranties. Bad packaging increases the risk of *shipping damages*, prompting customers to file warranty claims that:",
            "Add to the manufacturers operational expenses.",
            "Lead to an increase in handling of returns and replacements, which can disrupt supply chain management."
        ]},
   
]
  },
  {
    title: "Higher Environmental Costs",
    isChild: true,
    childrenArr:[
        {
        title:"",
        description:"",
        lists:[
            "*Excessive or non-recyclable packaging* can increase environmental compliance costs for companies.",
            "Manufacturers that fail to adhere to environmentally sustainable packaging practices face pressure from both regulators and environmentally conscious consumers.",
            "The use of *low-quality materials* in packaging not only leads to damaged products but also results in packaging waste, contributing to *environmental fines* and loss of market appeal for eco-conscious buyers."
        ]},
   
]
  },
  {
    title: "Supply Chain Disruptions",
    isChild: true,
    childrenArr:[
        {
        title:"",
        description:"",
        lists:[
            "Bad packaging increases the risk of *supply chain bottlenecks*. Damaged goods have to be returned, repacked, or replaced, causing delays in the delivery of new orders, which:",
            "Leads to *stock-outs* and lost sales opportunities.",
            "Impacts production schedules if materials or components are damaged during shipment."
        ]},
   
]
  },
  {
    title: "Legal & Regulatory Penalties",
    isChild: true,
    childrenArr:[
        {
        title:"",
        description:"",
        lists:[
            "In some cases, poor packaging may not meet *industry safety standards* or *regulatory requirements*. Non-compliance can result in:",
            "*Fines* from regulatory bodies.",
            "Legal challenges, especially if packaging failures cause injury or pose a hazard to consumers."
        ]},
   
]
  },
  {
    title: "Case Studies and Examples",
    isChild: true,
    childrenArr:[
        {
        title:"Electronics Industry",
        description:"In the case of electronics, where items like **smartphones, TVs, and computers* are sensitive to impact and moisture, bad packaging leads to high returns and replacements, costing manufacturers millions annually.",
        lists:[
        ]
    },  {
        title:"Furniture and Appliances",
        description:" Large consumer durables like furniture and home appliances often face damage during transit due to **insufficient cushioning* or improper loading and unloading procedures, causing high financial losses.",
        lists:[
        ]
    },
   
]
  },
  {
    title: "Preventive Measures",
    isChild: true,
    description:"To minimize losses, companies can adopt the following strategies:",
    childrenArr:[
        {
        title:"Improved Packaging Design",
        description:"Using more durable, eco-friendly materials with better shock absorption for large or delicate items.",
        lists:[
        ]
    },  {
        title:"Smart Packaging Technologies",
        description:"RFID tags or sensors to track product conditions during shipment.",
        lists:[
        ]
    },  {
        title:"Training for Packaging and Handling Staff",
        description:"Proper handling techniques can reduce damage during loading and transportation.",
        lists:[
        ]
    },{
        title:"Sustainable Packaging",
        description:"Using recyclable materials that reduce both damage risk and environmental impact.",
        lists:[
        ]
    },
   
]
  }
];

  return (
    <div id="accordion-flush">
      {advatageLists.map((advantage, index) => (
        <div key={index}>  {/* Add key for mapped elements */}
          <h2 id={`accordion-flush-heading-${index + 1}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full pt-3 rtl:text-right  border-b border-gray-200 dark:border-gray-70 gap-3"
              onClick={() => toggleAccordion(index + 1)}
              aria-expanded={activeIndex === index + 1}
              aria-controls={`accordion-flush-body-${index + 1}`}
            >
                <h2 className='text-md text-left font-krona mb-3'>{index+1}. {advantage?.title}:-</h2>
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
            className={`mt-5 ${activeIndex === index + 1 ? 'block' : 'hidden'}`}
            aria-labelledby={`accordion-flush-heading-${index + 1}`}
          >
            
              {
              advantage?.childrenArr.length > 0 && advantage.childrenArr.map((child) => (  // Fixed the condition and changed to map
                <div className='mb-5' key={child.title}> 
                    <p className='mb-1 pl-3'> <span className='text-md font-krona'>{child.title && "-"} {child.title || ""}{child.title && ":-"}</span> <span className='info-text'>{child.description ||  ""}</span></p>
                    <ul className='info-text mb-2 pl-3'>

                        {
                            child?.lists.length >0 && child?.lists.map((list)=>{
                               return  <li key={list}>- {list}</li>
                            })
                        }

                    </ul>
                   
                </div>
              ))
            }
        
     
          </div>
        </div>
      ))}
    </div>
  );
}
