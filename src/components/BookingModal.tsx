import { useState } from "react";
import { X, Calendar } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const BookingModal = ({ isOpen, onClose, onSuccess }: BookingModalProps) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [unit, setUnit] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && date && unit && selectedTime) {
      onSuccess();
      setName("");
      setDate("");
      setUnit("");
      setSelectedTime("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div
        className="modal-content animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <h2 className="text-2xl font-bold text-center mb-8 font-serif">
          Agendar horário
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Nome completo
            </label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-dark"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Selecione a data
            </label>

            <div className="relative">
              <input
                id="date-input"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input-dark pr-12"
                required
              />

              {/* Calendário branco custom */}
              <button
                type="button"
                onClick={() => {
                  const input = document.getElementById(
                    "date-input",
                  ) as HTMLInputElement;
                  input?.showPicker();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white/80"
              >
                <Calendar className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Selecione uma unidade
            </label>
            <div className="relative">
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="select-dark"
                required
              >
                <option value="">Selecione</option>
                <option value="campo-grande-1">Campo grande - ms</option>
                <option value="campo-grande-2">
                  Campo grande - ms (Rua Sergio)
                </option>
              </select>
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Selecione um horário
            </label>
            <div className="flex flex-wrap gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setSelectedTime(time)}
                  className={`time-slot ${selectedTime === time ? "selected" : ""}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button type="submit" className="btn-gold w-full">
            Agendar horário
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
