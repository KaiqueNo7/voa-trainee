"use client";
import { menuItems } from "@/data/menuItems";

type LinksProps = {
  withBackground?: boolean;
  onClickItem?: () => void;
};

export default function Links({ withBackground = false, onClickItem }: LinksProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(url);
      if (target) {
        const headerOffset = 100;
        const elementPosition = target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      if (onClickItem) onClickItem();
    }
  };

  return (
    <nav
      className={
        withBackground
          ? "backdrop-blur-md bg-white/10 border border-white/20 py-4 px-8 rounded-3xl shadow-lg"
          : ""
      }
    >
      <ul className="flex gap-2 md:text-sm md:gap-4 lg:gap-6 md:flex-row flex-col text-center">
        {menuItems.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              onClick={(e) => handleScroll(e, item.url)}
              className="text-white opacity-90 font-semibold hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
