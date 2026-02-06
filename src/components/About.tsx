import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";
import about3 from "@/assets/about-3.jpg";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
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
            <img
              src={about3}
              alt="Ambiente da barbearia"
              className="col-span-2 mx-auto w-full md:w-1/2 h-64 object-cover rounded-lg"
            />
          </div>
          <div className="text-text-white -mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              Sobre
            </h2>
            <p className="mb-4 text-white/80 leading-relaxed">
              A barbearia é um espaço voltado ao cuidado masculino, oferecendo
              serviços como corte de cabelo e barba, além de proporcionar um
              ambiente de convivência e bem-estar.
            </p>
            <p className="mb-6 text-white/80 leading-relaxed">
              A barbearia é um espaço voltado ao cuidado masculino, oferecendo
              serviços como corte de cabelo e barba, além de proporcionar um
              ambiente de convivência e bem-estar.
            </p>
            <p className="font-semibold text-white">
              Horário de funcionamento: 09:00 às 18:00
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
