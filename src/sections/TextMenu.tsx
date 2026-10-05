import { useId, useState } from 'react';
import { menuCategories, totalMenuItems } from '../lib/menuData';

const allCategories = 'all';

export default function TextMenu() {
  const selectId = useId();
  const [activeCategory, setActiveCategory] = useState(allCategories);
  const visibleCategories =
    activeCategory === allCategories
      ? menuCategories
      : menuCategories.filter((category) => category.id === activeCategory);

  return (
    <section
      id="full-text-menu"
      className="joy-text-menu"
      aria-labelledby="full-text-menu-title"
    >
      <div className="joy-text-menu__pattern" aria-hidden="true" />
      <div className="joy-section-shell joy-text-menu__shell">
        <header className="joy-text-menu__heading">
          <div>
            <p className="joy-section-kicker">The full menu</p>
            <h2 id="full-text-menu-title">Pick your favourites</h2>
          </div>
          <p>
            Browse {totalMenuItems} menu items by category. Prices and item
            availability may change, so please check with our Kiara Bay team
            when you order.
          </p>
        </header>

        <div className="joy-text-menu__filters" aria-label="Filter menu by category">
          <button
            type="button"
            className={activeCategory === allCategories ? 'is-active' : ''}
            aria-pressed={activeCategory === allCategories}
            onClick={() => setActiveCategory(allCategories)}
          >
            All
          </button>
          {menuCategories.map((category) => (
            <button
              type="button"
              key={category.id}
              className={activeCategory === category.id ? 'is-active' : ''}
              aria-pressed={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="joy-text-menu__select-wrap">
          <label htmlFor={selectId}>Menu category</label>
          <select
            id={selectId}
            value={activeCategory}
            onChange={(event) => setActiveCategory(event.target.value)}
          >
            <option value={allCategories}>All categories</option>
            {menuCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        <div id="full-menu-groups" className="joy-text-menu__groups" aria-live="polite">
          {visibleCategories.map((category) => (
            <section
              className="joy-text-menu__category"
              key={category.id}
              aria-labelledby={`menu-category-${category.id}`}
            >
              <header className="joy-text-menu__category-heading">
                <h3 id={`menu-category-${category.id}`}>{category.label}</h3>
                {category.note && <p>{category.note}</p>}
              </header>
              <div className="joy-text-menu__items">
                {category.items.map((item) => (
                  <article
                    className="joy-text-menu__item"
                    key={item.name}
                    itemScope
                    itemType="https://schema.org/MenuItem"
                  >
                    <div className="joy-text-menu__item-topline">
                      <h4 itemProp="name">{item.name}</h4>
                      <p className="joy-text-menu__price">{item.price}</p>
                    </div>
                    {item.description && (
                      <p className="joy-text-menu__description" itemProp="description">
                        {item.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
