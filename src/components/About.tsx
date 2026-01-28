import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={about1}
              alt="Barbeiro cortando cabelo"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src={about2}
              alt="Serviço de barba"
              className="w-full h-64 object-cover rounded-lg mt-8"
            />
          </div>
          <div className="text-background">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Sobre</h2>
            <p className="mb-4 text-background/80 leading-relaxed">
              A barbearia é um espaço voltado ao cuidado masculino, oferecendo
              serviços como corte de cabelo e barba, além de proporcionar um
              ambiente de convivência e bem-estar.
            </p>
            <p className="mb-6 text-background/80 leading-relaxed">
              A barbearia é um espaço voltado ao cuidado masculino, oferecendo
              serviços como corte de cabelo e barba, além de proporcionar um
              ambiente de convivência e bem-estar.
            </p>
            <p className="font-semibold text-background">
              Horário de funcionamento: 09:00 às 18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
