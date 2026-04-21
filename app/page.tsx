import Hero from "@/components/home/Hero";
import EditorialGrid from "@/components/home/EditorialGrid";
import StudioGrid from "@/components/home/StudioGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import FeaturedAccessories from "@/components/home/FeaturedAccessories";
import MailingList from "@/components/home/MailingList";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialGrid />
      <StudioGrid />
      <AboutTeaser />
      <FeaturedAccessories />
      <MailingList />
    </>
  );
}
