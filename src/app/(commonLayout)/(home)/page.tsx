import OurFeatures from "@/components/HomePage/OurFeatures/OurFeatures";
import OurInfluencers from "@/components/HomePage/OurInfluencers/OurInfluencers";
import Testimonials from "@/components/HomePage/Testimonials/Testimonials";
import TrackingMetrics from "@/components/HomePage/TrackingMetrics/TrackingMetrics";
import FAQ from "@/components/Shared/FAQ/FAQ";



export default function Home() {
  return (
    <div className="">
      <TrackingMetrics />
      <OurInfluencers/>
      <OurFeatures/>
      <Testimonials/>
      <FAQ/>
    </div>
  );
}
