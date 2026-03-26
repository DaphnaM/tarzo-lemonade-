export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/images/paw-policy-logo.png" alt="Paw Policy" className="h-12 w-auto rounded-xl" />
          <span className="text-xl font-bold text-[#4A4A4A]">Paw Policy</span>
        </div>
      </div>
    </header>
  );
}
