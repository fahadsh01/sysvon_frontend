import React from "react";
import AllCaseStudies from "./AllCaseStudies";
import Blogs from "./Blogs";
import { useParams } from "react-router-dom";

export default function Insight() {
  const { slug } = useParams();

  return <>{slug === "blogs" ? <Blogs /> : <AllCaseStudies />}</>;
}
