import service1 from "@/assets/service-1.jpg";
import service2 from "@/assets/service-2.jpg";
import service3 from "@/assets/service-3.jpg";

const services = [
  {
    id: 1,
    name: "Corte de cabelo",
    price: "R$ 35,00",
    image: service1,
  },
  {
    id: 2,
    name: "Corte completo",
    price: "R$ 55,00",
    image: service2,
  },
  {
    id: 3,
    name: "Corte e barba",
    price: "R$ 65,00",
    image: service3,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-background">SERVIÇOS</h2>
        <p className="text-center text-background/70 mb-12 max-w-2xl mx-auto">
          Oferecemos cortes de cabelo, barba, sobrancelha, hidratação capilar e tratamentos para a pele, com
          atendimento profissional garantimos estilo e conforto e um atendimento personalizado.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-background font-medium">{service.name}</span>
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                  {service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
