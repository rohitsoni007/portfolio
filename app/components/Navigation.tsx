import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { HERO_CONTENT, NAVIGATION_ITEMS } from "@/lib/constants";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    // If we're on the resume page and the link is a hash link,
    // navigate to the home page with the hash
    if ((location.pathname === "/resume" || location.pathname === "/blog") && href.startsWith("#")) {
      window.location.href = `/${href}`;
      return;
    }

    // If it's a hash link on the home page, scroll to section
    if (href.startsWith("#")) {
      scrollToSection(href);
    }
    // For other links, let the Link component handle navigation
  };

  const handleLogoClick = () => {
    if ((location.pathname === "/resume" || location.pathname === "/blog")) {
      window.location.href = `/`;
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" })

  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-sm border-b border-primary/10 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleLogoClick()}
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {HERO_CONTENT.siteName}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) =>
              item.href.startsWith("#") ? (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
            <Button
              className="gradient-primary hover:glow-primary transition-all duration-300 hover:scale-105"
              onClick={() => handleNavigation("#contact")}
            >
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-primary/10 py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) =>
                item.href.startsWith("#") ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground hover:text-primary transition-colors duration-300 font-medium py-2 text-left"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Button
                className="gradient-primary hover:glow-primary transition-all duration-300 w-full mt-4"
                onClick={() => handleNavigation("#contact")}
              >
                Hire Me
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
