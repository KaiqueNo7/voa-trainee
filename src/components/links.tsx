import { menuItems } from "@/data/menuItems";

type LinksProps = {
  withBackground?: boolean;
};

export default function Links({ withBackground = false }: LinksProps) {
  return (
    <nav className={withBackground ? "bg-blue-600 py-4 px-8 rounded-4xl" : ""}>
      <ul className="flex gap-8">
        {menuItems.map((item) => (
          <li key={item.url}>
            <a
              href={item.url}
              className="text-white opacity-90 font-semibold hover:opacity-100 transition-colors duration-300"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
