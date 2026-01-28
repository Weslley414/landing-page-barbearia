import logo from "@/assets/logo.png";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal = ({ isOpen, onClose }: SuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div
        className="modal-content text-center animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={logo} alt="Barber" className="h-20 mx-auto mb-8" />
        <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
          Agendamento realizado<br />com sucesso
        </h2>
        <button onClick={onClose} className="btn-gold px-12">
          Voltar
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
