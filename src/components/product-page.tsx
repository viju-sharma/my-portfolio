import Header from "./header";
import Footer from "./footer";
import ProductHero from "./product-hero";
import ProductDetails from "./product-details";
import ProductFeatures from "./product-features";
import Testimonials from "./testimonials";
import CallToAction from "./call-to-action";
import TechSpecs from "./tech-specs";
import Comparison from "./comparison";
import FAQ from "./faq";

export default function ProductPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-50 to-indigo-100">
      <Header />
      <main>
        <ProductHero />
        <ProductDetails />
        <ProductFeatures />
        <TechSpecs />
        <Comparison />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
