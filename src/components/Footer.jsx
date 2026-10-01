import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-navy py-8 text-white/70">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-white">
            © 2026 Yomna Abdelmegeed
          </p>
          <p className="text-xs">Flutter Developer</p>
        </div>
        <SocialLinks iconSize={16} />
      </div>
    </footer>
  );
}
