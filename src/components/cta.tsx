"use client";

type CtaProps = {
  onClick?: () => void;
  text: string;
};

export default function Cta({ onClick, text }: CtaProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-full cursor-pointer bg-linear-to-r from-orange-400 to-orange-500 px-6 py-3 font-semibold text-white transition-all hover:brightness-110 active:scale-95"
    >
      {text}
    </button>
  );
}
