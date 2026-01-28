import logo from "@/assets/logo.png";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header = ({ onOpenModal }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <img src={logo} alt="Barber" className="h-12 w-auto" />
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("contatos")}
              className="text-foreground/80 hover:text-foreground transition-colors text-sm font-medium"
            >
              Contatos
            </button>
          </nav>
        </div>
        <button
          onClick={onOpenModal}
          className="btn-gold-outline text-sm"
        >
          Agendar horário
        </button>
      </div>
    </header>
  );
};

export default Header;
