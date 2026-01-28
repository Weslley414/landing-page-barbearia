import unit1 from "@/assets/unit-1.jpg";
import unit2 from "@/assets/unit-2.jpg";

const units = [
  {
    id: 1,
    address: "Rua Aguiar, n 252",
    city: "Campo Grande - MS",
    image: unit1,
  },
  {
    id: 2,
    address: "Rua sergio, n 420",
    city: "Campo Grande - MS",
    image: unit2,
  },
];

const Units = () => {
  return (
    <section id="contatos" className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-background">NOSSAS UNIDADES</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
          {units.map((unit) => (
            <div key={unit.id} className="relative group overflow-hidden rounded-lg">
              <img
                src={unit.image}
                alt={unit.address}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-foreground font-semibold">{unit.address}</p>
                <p className="text-foreground/70 text-sm">{unit.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Units;
