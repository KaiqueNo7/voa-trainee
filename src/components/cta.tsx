"use client";
import { useState } from "react";

type FormData = {
  nome: string;
  celular: string;
  email: string;
  curso: string;
  trainee: string;
  periodo: string;
};

export default function Cta({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    celular: "",
    email: "",
    curso: "",
    trainee: "",
    periodo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.nome || !formData.celular || !formData.email) {
      alert("Por favor, preencha os campos obrigatórios: Nome, Celular e Email.");
      return;
    }

    const message = `
    *Nova inscrição via site*

    *Nome:* ${formData.nome}
    *Celular:* ${formData.celular}
    *Email:* ${formData.email}
    *Curso:* ${formData.curso || "-"}
    *Trainee desejado:* ${formData.trainee || "-"}
    *Período de formação:* ${formData.periodo || "-"}
    `.trim();

    const phone = "5511921825233";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-full cursor-pointer bg-linear-to-r from-orange-400 to-orange-500 px-6 py-3 font-semibold text-white transition-all hover:brightness-110 active:scale-95"
      >
        {text}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 text-white shadow-xl w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              🚀 Comece sua jornada
            </h2>

            <div className="flex flex-col gap-4">
              <input
                name="nome"
                placeholder="Nome*"
                value={formData.nome}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                name="celular"
                placeholder="Celular*"
                value={formData.celular}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                name="curso"
                placeholder="Curso"
                value={formData.curso}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                name="trainee"
                placeholder="Trainee Desejado"
                value={formData.trainee}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                name="periodo"
                placeholder="Período de formação"
                value={formData.periodo}
                onChange={handleChange}
                className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <button
                onClick={handleSubmit}
                className="w-full cursor-pointer rounded-full bg-linear-to-r from-orange-400 to-orange-500 px-6 py-3 font-semibold text-white transition-all hover:brightness-110 active:scale-95"
              >
                Enviar pelo WhatsApp
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
