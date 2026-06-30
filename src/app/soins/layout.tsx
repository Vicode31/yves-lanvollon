import FixedRdvButton from "@/components/FixedRdvButton";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SoinsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-hidden bg-linear-to-br from-green-50/50 to-white">
      <Navbar />
      <FixedRdvButton />
      <main className="pt-32">{children}</main>
      <Footer />
    </div>
  );
}
