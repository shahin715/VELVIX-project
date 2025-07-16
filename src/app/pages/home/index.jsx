import React from "react";
// import Test from "../../../components/Header/navbar/test";
import Banner from "../../../components/Banner";
import PromotionalCampaign from "../../../components/Promotional__Campaign/promotional";
import DealsToday from "../../../components/Deals_Today/DealsToday";
import FeaturedCPU from "../../../components/Featured_CPU/FeaturedCPU";
import FeaturedBrandsName from "../../../components/Featured_Brands/FeaturedBrandsName";
import LowerNavbar from "../../../components/Header/navbar/lowerNavbar";
import LowerBanner from "../../../components/Lower_Banner/lowerBanner";
import FeaturedCategories from "../../../components/FeaturedCategoriesSection/featuredCategoriesSection";

function Home() {
  return (
    <>
    {/* <Test/> */}
    <LowerNavbar/>
      <Banner />
      <PromotionalCampaign />
      <FeaturedCategories/>
      <DealsToday />
      <FeaturedCPU />
      <FeaturedBrandsName />
      <LowerBanner/>
      
    </>
  );
}

export default Home;
