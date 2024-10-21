import { facebook, instagram, twitter } from "../assets/icons";
import { customer1, customer2, EPE1, AIRBUBBLE2,AIRBUBBLE1 } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: EPE1,
        bigShoe: EPE1,
    },
    {
        thumbnail: AIRBUBBLE2,
        bigShoe: AIRBUBBLE2,
    },
    {
        thumbnail: AIRBUBBLE1,
        bigShoe: AIRBUBBLE1,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: "",
        name: "Nike Air Jordan-01",
        price: "$200.20",
    },
    {
        imgURL: "",
        name: "Nike Air Jordan-10",
        price: "$210.20",
    },
    {
        imgURL: "",
        name: "Nike Air Jordan-100",
        price: "$220.20",
    },
    {
        imgURL: "",
        name: "Nike Air Jordan-001",
        price: "$230.20",
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Bubble", link: "/" },
            { name: "EPE", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "Contact Us", link: "/" },
            { name: "Why EPE", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "joe@m&aindustries.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];


// contact page data

export const officeLocations = [
    {
        title:"Corporate",
        emailAddress:"test@gmail.com",
        mobilenumber:"+919218100126",
        address:"Morpen road mulkumanjra baddi 130401"
    },
    {
        title:"Residence",
        emailAddress:"test@gmail.com",
        mobilenumber:"+919218100126",
        address:"Morpen road mulkumanjra baddi 130401"
    }
]

export const managementContacts = [
    {
        title:"Management",
        email: "test@gmail.com",
        phoneNumber: "+919218100126"
    },
     {
        title:"Finanace",
        email: "test@gmail.com",
        phoneNumber: "+919218100126"
    }, 
    {
        title:"Help Desk",
        email: "test@gmail.com",
        phoneNumber: "+919218100126"
    },

];