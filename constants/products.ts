import { 
    EPE1,
    AIRBUBBLE2,
    AIRBUBBLE1
  } from "@/assets/images"

  import {
    AirBubblePouch1,
    AirBubblePouch2,
    AirBubblePouch3,
    AirBubblePouch4,

    AirBubbleRoll1,
    // AirBubbleRoll2,
    // AutomobilePacking,

    EPESheet1,
    // EPESheet2,
    // EPESheet3,
    // EPESheet4,
    EPESheet5,

    EPEPackaging1,
    EPEPackaging2,
    // EPEPackaging3,
    EPEPackaging4,
    // EPEPackaging5,

    Airbubble1,
    Airbubble2

  } from "@/assets/images/product-images"


export const navProducts = [
  { name: 'Fragile Items',  img: EPE1 },
  { name: 'Sensitive Products', img: AIRBUBBLE1 },
  { name: 'Automotive',   img: EPE1 },
  { name: 'Furniture', img: AIRBUBBLE2 },
  { name: 'Automations', img: EPE1 },
  { name: 'Automations', img: AIRBUBBLE1 },
]


export const productLists = [
  { 
    name: 'Air Bubble Pouch',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum eveniet molestias reiciendis, praesentium dignissimos fugit accusantium, repellat beatae, quidem distinctio tempore sunt omnis ut.",
    thumbnail: AirBubblePouch1 
  },
  { 
    name: 'Expanded Polyethylene Foam',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum eveniet molestias reiciendis, praesentium dignissimos fugit accusantium, repellat beatae, quidem distinctio tempore sunt omnis ut.",
    thumbnail: EPEPackaging1 
  },
  { 
    name: 'Analytics',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum eveniet molestias reiciendis, praesentium dignissimos fugit accusantium, repellat beatae, quidem distinctio tempore sunt omnis ut.",
    thumbnail: AIRBUBBLE2 
  }, { 
    name: 'Analytics',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum eveniet molestias reiciendis, praesentium dignissimos fugit accusantium, repellat beatae, quidem distinctio tempore sunt omnis ut.",
    thumbnail: EPE1 
  },
  { 
    name: 'Analytics',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum eveniet molestias reiciendis, praesentium dignissimos fugit accusantium, repellat beatae, quidem distinctio tempore sunt omnis ut.",
    thumbnail: EPE1 
  },
  { 
    name: 'Analytics',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum eveniet molestias reiciendis, praesentium dignissimos fugit accusantium, repellat beatae, quidem distinctio tempore sunt omnis ut.",
    thumbnail: EPE1 
  }, { 
    name: 'Analytics',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum eveniet molestias reiciendis, praesentium dignissimos fugit accusantium, repellat beatae, quidem distinctio tempore sunt omnis ut.",
    thumbnail: EPE1 
  }, { 
    name: 'Analytics',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum eveniet molestias reiciendis, praesentium dignissimos fugit accusantium, repellat beatae, quidem distinctio tempore sunt omnis ut.",
    thumbnail: EPE1 
  },
  { 
    name: 'Analytics',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum eveniet molestias reiciendis, praesentium dignissimos fugit accusantium, repellat beatae, quidem distinctio tempore sunt omnis ut.",
    thumbnail: EPE1 
  },
]

export const airBubbleData = {
    desc:"Air bubble film better known as bubble wrap is a Low Density Polyethylene Film (LDPE) based film commonly used for packaging and protecting delicate products. This multilayer film encloses air within a bubble shaped hemispherical outer layer of film providing cushioning effect to fragile products. The added advantages of Air Bubble Film is that it isolates vibration and shock, thus reducing damages during transit to the minimal",
    images:[Airbubble1, Airbubble2],
    categories:[
      {
        name:"General purpose Air bubble film",
        imgURL: AirBubblePouch1
      },
      {
        name:"Anti-Static Air Bubble Film",
        imgURL: AirBubblePouch2
      },
      {
        name:"VCI (Anti-Rust) Air Bubble Film",
        imgURL: AirBubblePouch3
      },
      {
        name:"Air Bubble Film Laminated with EPE Foam",
        imgURL: AirBubblePouch4
      },
      {
        name:"Air Bubble Film Laminated with Aluminium Foil",
        imgURL: AirBubbleRoll1
      }
    ],
    applictions:[
      "Packing and cushioning material for electrical applicants and precision machine parts, glass and ceramics.",
      "Surface protective material for stainless steel product, plated product and aluminium construction material.",
      "hermal insulating for roof and air condition."
    ],
    examples:[
      {
        name:"Fragile Items",
        imgURL: EPEPackaging2,
        desc:"The precious chinaware, glasses, mirrors, artworks such as paintings, and figurines, and vases fall under the category of fragile items. These are delicate and are susceptible to damage. Therefore, bubble wraps are advised as the packaging film to provide the best protection."
      },
      {
        name:"Sensitive Products",
        imgURL:EPESheet1,
        desc:"Electronics and electrical items are delicate and can be compromised if they are not well protected. Even a gentle fall can result in irreversible damage. Again, these items have to be protected from static-induced electric charge. Wrapping these products in anti-static bubble wrap will ensure that the products are safe even if they happen to fall down and also it will protect the items from electro-static discharge."
      },
      {
        name:"AUTOMOTIVE",
        imgURL:EPEPackaging4,
        desc:"Starting from small parts of the vehicle to the whole vehicle bubble wrap packaging is an efficient, safe and easy packing option to consider. Wrapping small products into Air Bubble pouches ensures the safety of the product and bubble wrap laminated with epe foam ensures the safety of the whole vehicle."
      },
      {
        name:"Furniture",
        imgURL:EPESheet5,
        desc:"These days with mushrooming of e-commerce stores, you can buy your furniture online. The online shops ensure that the product no matter small reaches the customers intact. To ensure that there is no damage to the products delivered, they wrap the items in bubble wrappers. For instance, the glass table tops, glass cabinet doors or any other glass furniture parts that are very fragile are usually wrapped in several layers of air bubble packaging films to provide the much-required cushioning against vibrations and shocks at the time of transit."
      }
    ]
}
