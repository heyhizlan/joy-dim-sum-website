const menuTickerItems = [
  'DIM SUM',
  'PAU',
  'RAMEN',
  'CHICKEN RICE',
  'FISH AND CHIPS',
  'NASI LEMAK',
  'GORENG',
  'BAKED',
  'TEA & KOPI',
];

const menuTickerLabel = menuTickerItems.join(' · ');
const menuTickerText = `${menuTickerItems.join('\u00a0·\u00a0')}\u00a0·\u00a0`;

export default function MenuTicker() {
  return (
    <section className="joy-menu-ticker" aria-label={menuTickerLabel}>
      <div className="joy-menu-ticker__track">
        <span>{menuTickerText}</span>
        <span aria-hidden="true">{menuTickerText}</span>
      </div>
    </section>
  );
}
