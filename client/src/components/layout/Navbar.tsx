import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const navItems = [
  { label: "Home", href: "#hero", page: "/" },
  { label: "About", href: "#about", page: "/" },
  { label: "Skills", href: "#skills", page: "/" },
  { label: "Projects", href: "#projects", page: "/" },
  { label: "Achievements", href: "/achievements", page: "/achievements" },
  { label: "Journey", href: "#journey", page: "/" },
  { label: "Blog", href: "#blog", page: "/" },
  { label: "Contact", href: "#contact", page: "/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (item: (typeof navItems)[0]) => {
    setMobileOpen(false);
    if (item.page === "/achievements") {
      navigate("/achievements");
      window.scrollTo(0, 0);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isAchievementsPage = location.pathname === "/achievements";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-bg-main/95 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20"
            : "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={(event) => {
              event.preventDefault();
              if (location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="flex items-center group"
            aria-label="Abdullah Ahmed - Home"
          >
            <span
              className="text-xl sm:text-2xl leading-none tracking-wide select-none brand-text"
              style={{ fontFamily: "'MasterRumble', serif" }}
            >
              <span className="text-mint">&lt;</span>
              <span>Abdullah Ahmed</span>
              <span className="text-mint">/&gt;</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className={`nav-link pb-0.5 ${
                  isAchievementsPage && item.label === "Achievements"
                    ? "active"
                    : !isAchievementsPage && item.label === "Home"
                    ? "active"
                    : ""
                } ${isDark ? "" : "text-gray-600 hover:text-mint"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* NAR branding */}
            <span
              className="hidden sm:inline-block text-2xl lg:text-3xl leading-none tracking-wide brand-text select-none"
              style={{ fontFamily: "'MasterRumble', serif" }}
              aria-hidden="true"
            >
              NAR
            </span>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2 rounded-lg text-text-muted hover:text-mint hover:bg-mint/10 transition-all"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu – animated open/close */}
      <div
        className={`mobile-menu lg:hidden overflow-hidden ${mobileOpen ? "mobile-menu--open" : ""}`}
      >
        <div
          className={`border-t ${
            isDark ? "bg-bg-surface border-white/5" : "bg-white border-gray-200"
          }`}
        >
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                style={{
                  fontFamily: "'GCClubBrand', sans-serif",
                  letterSpacing: "0.06em",
                  animationDelay: mobileOpen ? `${index * 40}ms` : undefined,
                }}
                className={`mobile-menu__item w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  (isAchievementsPage && item.label === "Achievements") ||
                  (!isAchievementsPage && item.label === "Home")
                    ? "text-mint bg-mint/10"
                    : isDark
                    ? "text-text-muted hover:text-mint hover:bg-mint/10"
                    : "text-gray-600 hover:text-mint hover:bg-mint/10"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
