"use client";
type ButtonRDVProps = {
  onClick: () => void;
};

export default function ButtonRDV({ onClick }: ButtonRDVProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-block bg-vertSapin text-white px-8 py-3 rounded-lg hover:bg-vertSapin/80 transition-colors cursor-pointer`}
    >
      Prendre rendez-vous
    </button>
  );
}
