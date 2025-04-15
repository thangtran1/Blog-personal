import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-5xl px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full  cursor-not-allowed flex items-center justify-center py-3">
        <span className="text-default-600">Welcome to</span>
        <p className="text-primary">DandevIT</p>
      </footer>
    </div>
  );
}
