import heroBg from "@/assets/hero-bg.jpg";

interface HeroProps {
  onOpenModal: () => void;
}

const Hero = ({ onOpenModal }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="overlay-dark" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
          ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.
        </h1>
        <p className="text-muted-foreground mb-8 text-sm md:text-base">
          HORÁRIO DE FUNCIONAMENTO: 09:00 às 18:00
        </p>
        <button onClick={onOpenModal} className="btn-gold">
          Agendar Horário
        </button>
      </div>
    </section>
  );
};

export default Hero;
