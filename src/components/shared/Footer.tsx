export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 bg-[var(--lemonade-light-gray)] border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/images/paw-policy-logo.png" alt="Paw Policy" className="h-10 w-auto rounded-xl" />
            <span className="text-lg font-bold text-[#4A4A4A]">Paw Policy</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--lemonade-gray)]">
            <a href="https://mecondstutiolin.com/click" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Pet Insurance</a>
            <a href="https://mecondstutiolin.com/click" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)] transition-colors">Pet FAQ</a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-300 text-center text-xs text-[var(--lemonade-gray)]">
          <p>&copy; {new Date().getFullYear()} Paw Policy. All rights reserved.</p>
          <p className="mt-2">Coverage and pricing vary by state. This is a summary only. Please see your policy for full terms and conditions.</p>
        </div>
      </div>
    </footer>
  );
}
