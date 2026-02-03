export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 bg-[var(--lemonade-light-gray)] border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-script text-xl text-[var(--lemonade-pink)]">L</span>
            <span className="text-lg font-bold text-[var(--lemonade-dark)]">lemonade</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--lemonade-gray)]">
            <a href="https://www.lemonade.com/pet" className="hover:text-[var(--lemonade-pink)] transition-colors">Pet Insurance</a>
            <a href="https://www.lemonade.com/pet/explained/lemonade-pet-insurance-faq/" className="hover:text-[var(--lemonade-pink)] transition-colors">Pet FAQ</a>
            <a href="https://www.lemonade.com/terms" className="hover:text-[var(--lemonade-pink)] transition-colors">Terms</a>
            <a href="https://www.lemonade.com/privacy" className="hover:text-[var(--lemonade-pink)] transition-colors">Privacy</a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-300 text-center text-xs text-[var(--lemonade-gray)]">
          <p>© {new Date().getFullYear()} Lemonade Insurance Company. All rights reserved.</p>
          <p className="mt-2">Coverage and pricing vary by state. This is a summary only. Please see your policy for full terms and conditions.</p>
        </div>
      </div>
    </footer>
  );
}
