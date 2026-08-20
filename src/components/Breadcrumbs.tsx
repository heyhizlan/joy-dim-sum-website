import { ChevronRight } from 'lucide-react';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({
  items,
  light = false,
}: {
  items: readonly BreadcrumbItem[];
  light?: boolean;
}) {
  return (
    <nav
      className={`joy-breadcrumbs${light ? ' joy-breadcrumbs--light' : ''}`}
      aria-label="Breadcrumb"
    >
      <ol>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={item.label}>
              {item.href && !isCurrent ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span aria-current={isCurrent ? 'page' : undefined}>{item.label}</span>
              )}
              {!isCurrent && <ChevronRight aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
