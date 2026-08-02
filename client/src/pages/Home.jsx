import Hero from "../components/Hero/Hero";
import OfferBanner from "../components/OfferBanner/OfferBanner";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import BestSellers from "../components/BestSellers/BestSellers";
import Testimonials from "../components/Testimonials/Testimonials";

function Home() {
  return (
    <>
     <Hero />

<OfferBanner />

<Categories />

<BestSellers />

<FeaturedProducts />

<WhyChooseUs />

<Testimonials />
    </>
  );
}

export default Home;