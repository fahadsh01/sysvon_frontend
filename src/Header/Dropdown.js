import { label, link, title } from "framer-motion/client";
import pic from "../assets/bg.jpg";
import insight from "../assets/insight.jpeg";
import industries from "../assets/industry.jpg";
const dropdownData = {
  services: {
    title: "Services",
    image: pic,
    description: "We provide the best solutions to help your business grow.",
    links1: [
      {
        slug: "web-developement",
        label: "Web Development",
      },
      {
        slug: "mobile-developement",
        label: "Mobile Development",
      },
      {
        slug: "ui-ux-design",
        label: "UI/UX Design",
      },

      { slug: "", label: "Support" },
      { slug: "", label: "SEO Services" },
      { slug: "", label: "Cloud Services" },
    ],
    links2: [
      { slug: "", label: "E-commerce" },
      { slug: "", label: "AI Solutions" },
      { slug: "", label: "Blockchain" },
      { slug: "", label: "DevOps" },
      { slug: "", label: "Data Analytics" },
      { slug: "", label: "Consulting" },
    ],
  },
  insights: {
    title: "Insights",
    image: insight,
    description:
      "Sysvon Arabia unveils AI innovations at LEAP 2025 as the Bronze Sponsor",

    links1: [
      { slug: "blogs", label: "Blogs" },
      {
        slug: "all-case-studies",
        label: "Research",
      },
    ],
    links2: [],
  },

  industries: {
    title: "Industries",
    image: industries,
    description: "Perfecting the art of financial consolidation",
    links1: [
      { slug: "commiunication", label: "Communications" },
      {
        slug: "banking-and-FinancialServices",
        label: "Banking &FinancialServices",
      },
      { slug: "public-sector", label: "Public Sector" },
    ],
    links2: [
      { slug: "health", label: "Health" },
      { slug: "retail", label: "Retail" },
    ],
  },
  company: {
    title: "Company",
    links1: [{ slug: "about", label: "Who we are" }],
    links2: [],
  },
};
export default dropdownData;
