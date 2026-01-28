import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Units from "@/components/Units";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import SuccessModal from "@/components/SuccessModal";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const handleBookingSuccess = () => {
    setIsBookingOpen(false);
    setIsSuccessOpen(true);
  };

  const handleCloseSuccess = () => {
    setIsSuccessOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenModal={handleOpenBooking} />
      <Hero onOpenModal={handleOpenBooking} />
      <About />
      <Services />
      <Team />
      <Units />
      <Footer />
      <WhatsAppButton />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        onSuccess={handleBookingSuccess}
      />
      <SuccessModal isOpen={isSuccessOpen} onClose={handleCloseSuccess} />
    </div>
  );
};

export default Index;
