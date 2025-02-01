"use client";
import "./nav.css";

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface NavProps {
  items: NavItem[];
  logo?: React.ReactNode;
  onSearch?: (value: string) => void;
}

export const Nav = ({ items, logo, onSearch }: NavProps) => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        {logo && <div className="nav-logo">{logo}</div>}
        <div className="nav-items">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`nav-item ${item.active ? "active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-right">
        {/* {onSearch && (
          <div className="nav-search">
            <input
              type="text"
              placeholder="搜索..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        )} */}
      </div>
    </nav>
  );
};
