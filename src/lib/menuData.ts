export type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  note?: string;
  items: readonly MenuItem[];
};

export const menuCategories: readonly MenuCategory[] = [
  {
    id: 'signature',
    label: 'Signature Delights',
    items: [
      {
        name: 'Kam Heong Chicken Crepe',
        description: 'Crispy on the outside, fragrant within. A classic favourite wrapped in golden goodness with local touch.',
        price: 'RM28.80',
      },
      {
        name: 'Lychee Pokok with Teapot',
        description: 'Sweet lychee served in a delicate lychee shell - a refreshing bite of nature’s gift. Best to share.',
        price: 'RM42.80',
      },
      {
        name: 'Lychee Pokok Only (8pcs)',
        description: 'Eight sweet lychee bites served in delicate lychee shells.',
        price: 'RM36.80',
      },
      {
        name: 'House-Made Soft Bun with Braised Chicken Meat',
        description: 'Home-made pan-grilled bun with tender soy-braised chicken, fresh carrot, cucumber and pickled pumpkin.',
        price: 'RM16.80',
      },
      {
        name: 'Stir Fried Carrot Cake',
        description: 'Wok-fried to perfection with egg, beansprouts and shallots for that irresistible aroma.',
        price: 'RM12.80',
      },
      {
        name: 'Curry Cheong Fun with Fried Beancurd & Sui Gau',
        description: 'Silky flat rice noodles in rich, aromatic curry, served with crispy beancurd roll and sui gau.',
        price: 'RM13.80',
      },
      {
        name: 'Curry Cheong Fun Classic',
        description: 'Silky flat rice noodles served in rich, aromatic curry.',
        price: 'RM5.80',
      },
      {
        name: 'Buttermilk Cheong Fun with Fried Beancurd & Sui Gau',
        description: 'Silky flat rice noodles in our signature house-made buttermilk sauce, served with crispy beancurd roll and sui gau.',
        price: 'RM15.80',
      },
      {
        name: 'Buttermilk Cheong Fun Classic',
        description: 'Silky flat rice noodles in our signature house-made buttermilk sauce. Kosong.',
        price: 'RM6.80',
      },
      {
        name: 'Lempeng Kelapa (5pcs) with Curry Potato',
        description: 'Traditional coconut pancakes served with fragrant curry potato.',
        price: 'RM12.80',
      },
      {
        name: 'Roti Jala (5pcs) with Curry Potato',
        description: 'Soft lace pancakes served with fragrant curry potato. Dip! Dip!',
        price: 'RM10.80',
      },
    ],
  },
  {
    id: 'dim-sum-pau',
    label: 'Dim Sum & Pau',
    items: [
      {
        name: 'Siew Loong Pau',
        description: 'Delicate steamed dumplings filled with juicy chicken, bursting with rich, savoury broth.',
        price: 'RM13.80',
      },
      {
        name: 'Mala Siew Loong Pau',
        description: 'Delicate steamed dumplings filled with juicy chicken, bursting with rich broth and finished with fragrant mala spices.',
        price: 'RM15.80',
      },
      {
        name: 'Black Pepper Dumpling',
        description: 'Juicy chicken and mushroom dumplings seasoned with aromatic black pepper.',
        price: 'RM8.80',
      },
      {
        name: '3 Colors Scallop Dumpling',
        description: 'Beautiful three-coloured crystal dumplings filled with juicy prawns and topped with succulent scallops.',
        price: 'RM16.80',
      },
      {
        name: 'Dragon Fruit Dumpling',
        description: 'Crystal dumplings infused with dragon fruit and filled with juicy prawns for a naturally sweet, refreshing touch.',
        price: 'RM16.80',
      },
      {
        name: 'Otak Otak Dumpling',
        description: 'Tender dumplings filled with juicy chicken and surimi, infused with fragrant herbs and spices for a rich otak-otak flavour.',
        price: 'RM8.80',
      },
      {
        name: 'Crabstick Dumpling',
        description: 'Tender dumplings wrapped with crabstick and filled with savoury chicken and surimi for a delicious seafood bite.',
        price: 'RM8.80',
      },
      {
        name: 'Shanghai Dumpling',
        description: 'Shanghai-style dumplings filled with juicy chicken and chives, best enjoyed with black vinegar and ginger.',
        price: 'RM13.80',
      },
      {
        name: '3 Colors Har Kau',
        description: 'Three-coloured crystal dumplings generously filled with juicy prawns for a timeless dim sum favourite.',
        price: 'RM15.80',
      },
      {
        name: 'Green Siew Mai',
        description: 'Classic open-faced dumplings filled with juicy chicken, steamed to tender perfection.',
        price: 'RM8.80',
      },
      {
        name: 'Loh Mai Kai',
        description: 'Glutinous rice steamed with savoury BBQ chicken, mushrooms and fragrant seasonings for a comforting classic.',
        price: 'RM8.80',
      },
      {
        name: 'Classic Prawn Dumpling',
        description: 'Tender dumplings generously filled with juicy chicken and fresh prawns for a perfectly balanced bite.',
        price: 'RM13.80',
      },
      {
        name: 'Chive Gyoza',
        description: 'Crystal-skinned dumplings filled with juicy prawns and fragrant chives for a fresh, savoury finish.',
        price: 'RM14.80',
      },
      {
        name: 'Spinach Dumpling',
        description: 'Tender dumplings filled with juicy chicken and spinach for a light and wholesome bite.',
        price: 'RM8.80',
      },
      {
        name: 'Braised Chicken Feet',
        description: 'Chicken feet slowly braised in a rich savoury sauce until tender and full of flavour.',
        price: 'RM15.80',
      },
      {
        name: 'Longevity Pau',
        description: 'Soft steamed longevity buns filled with lotus paste and a rich salted egg yolk centre for a sweet and savoury delight.',
        price: 'RM12.80',
      },
      {
        name: 'Sweet Potato Pau',
        description: 'Fluffy steamed buns filled with naturally sweet purple sweet potato for a smooth and comforting treat.',
        price: 'RM12.80',
      },
      {
        name: 'Salted Egg Pau Lava',
        description: 'Soft steamed buns filled with rich, creamy salted egg lava that melts with every bite.',
        price: 'RM14.80',
      },
      {
        name: 'Red Bean Pau',
        description: 'Adorably shaped steamed buns filled with smooth, sweet red bean paste for a timeless favourite.',
        price: 'RM10.80',
      },
      {
        name: 'Chicken Pau',
        description: 'Fluffy steamed buns generously filled with savoury chicken in a rich, flavourful sauce for a comforting classic.',
        price: 'RM12.80',
      },
      {
        name: 'Gula Melaka Bun',
        description: 'Soft steamed buns with a luscious Gula Melaka filling, offering a rich caramel sweetness in every bite.',
        price: 'RM6.80',
      },
      {
        name: 'Pandan Kaya Pau',
        description: 'Soft steamed buns filled with our signature house-made pandan kaya, lovingly crafted and uniquely JOY Dim Sum.',
        price: 'RM8.80',
      },
      {
        name: 'Black Sesame Flower Bun',
        description: 'Beautifully crafted flower-shaped buns filled with rich, nutty black sesame paste for a fragrant and satisfying finish.',
        price: 'RM12.80',
      },
    ],
  },
  {
    id: 'goreng-baked',
    label: 'Goreng & Baked',
    items: [
      {
        name: 'Salad Prawn',
        description: 'Crispy prawn dumplings wrapped in a light pastry for a satisfying crunch.',
        price: 'RM12.80 (3pcs)',
      },
      {
        name: 'Fried Wantan',
        description: 'Golden-fried wantons filled with savoury chicken for a crispy, flavourful bite.',
        price: 'RM12.80 (5pcs)',
      },
      {
        name: 'Duck Spring Roll',
        description: 'Crispy spring rolls filled with tender smoked duck for a rich, savoury finish.',
        price: 'RM16.80 (2 rolls)',
      },
      {
        name: 'Chicken Woo Kok',
        description: 'Golden crispy yam puffs filled with savoury chicken, light and fluffy in every bite.',
        price: 'RM16.80 (3pcs)',
      },
      {
        name: 'Lobak Chicken',
        description: 'Tender chicken, carrots and turnip seasoned with Chinese five-spice, wrapped in beancurd skin and fried until golden crispy.',
        price: 'RM13.80 (2pcs)',
      },
      {
        name: 'Beancurd Prawn',
        description: 'Crispy beancurd rolls generously filled with juicy prawns for an irresistible crunch.',
        price: 'RM16.80 (3pcs)',
      },
      {
        name: 'BBQ Chicken Puff',
        description: 'Flaky pastry filled with savoury BBQ chicken, baked until perfectly crispy.',
        price: 'RM10.50 (3pcs)',
      },
      {
        name: 'Black Sesame Portugese Tart',
        description: 'Buttery flaky pastry with a silky egg custard filling, baked to golden perfection.',
        price: 'RM12.00 (2pcs)',
      },
      {
        name: 'Kaya Puff',
        description: 'Light flaky pastry filled with our signature house-made pandan kaya for a rich, fragrant treat.',
        price: 'RM10.50 (3pcs)',
      },
      {
        name: 'Lychee Tart',
        description: 'Buttery pastry topped with sweet lychee and toasted almonds for a delightful fruity finish.',
        price: 'RM22.80 (2pcs)',
      },
      {
        name: 'BBQ Chicken Baked Bun',
        description: 'Soft polo bun with a crispy golden crust, filled with savoury BBQ chicken.',
        price: 'RM10.50 (3pcs)',
      },
      {
        name: 'Sambal Ikan Bilis',
        description: 'Soft steamed buns filled with spicy sambal ikan bilis for a bold local favourite.',
        price: 'RM13.50 (3pcs)',
      },
      {
        name: 'Siew Pau',
        description: 'Golden flaky pastry filled with savoury chicken in a rich, flavourful sauce.',
        price: 'RM10.50 (3pcs)',
      },
      {
        name: 'Polo Bun Crispy with Butter & Honey',
        description: 'Soft, fluffy bun topped with a sweet, buttery sugar crust, a classic that never gets old.',
        price: 'RM8.80',
      },
      {
        name: 'Polo Bun Only',
        description: 'Soft, fluffy polo bun with a sweet, buttery sugar crust.',
        price: 'RM6.80',
      },
    ],
  },
  {
    id: 'kenyang',
    label: 'Kenyang Selection',
    note: 'Served daily from 10am onwards.',
    items: [
      {
        name: 'Nasi Lemak + Ayam Goreng',
        description: 'Fragrant coconut rice served with crispy fried chicken, homemade sambal, peanuts, cucumber, pickles and hard boiled egg.',
        price: 'RM18.80',
      },
      {
        name: 'Cantonese Fried Rice',
        description: 'Wok-fried rice with tender BBQ chicken and egg for a comforting Cantonese classic.',
        price: 'RM12.80',
      },
      {
        name: 'Sambal Fried Rice with Chicken',
        description: 'Wok-fried rice with spicy sambal, chicken, long beans and egg.',
        price: 'RM14.80',
      },
      {
        name: 'Sambal Fried Rice with Prawn',
        description: 'Wok-fried rice with spicy sambal, prawns, long beans and egg.',
        price: 'RM22.80',
      },
      {
        name: 'Nasi Kaw-Kaw + Roasted Chicken',
        description: 'Fragrant chicken rice served with a juicy quarter chicken, fresh cucumber, pickles and our signature chilli sauce.',
        price: 'RM16.80',
      },
      {
        name: 'Nasi Kaw-Kaw + BBQ Chicken',
        description: 'Fragrant chicken rice topped with tender BBQ chicken, served with comforting chicken soup and our signature chilli sauce.',
        price: 'RM15.80',
      },
      {
        name: 'Nasi Kaw-Kaw + Chicken Roasted + BBQ Chicken',
        description: 'Quarter roasted chicken and tender BBQ chicken, served with fragrant chicken rice, chilli sauce and soup.',
        price: 'RM23.80',
      },
      {
        name: 'XL Fish & Chips',
        description: 'Crispy XL fish fillet served with golden sweet potato fries and our signature FC mayo.',
        price: 'RM32.80',
      },
      {
        name: 'Big Chicken Chop',
        description: 'Juicy chicken chop served with golden sweet potato fries, FC mayo and your choice of Kam Heong, Sweet & Sour or Buttermilk sauce.',
        price: 'RM26.80',
      },
      {
        name: 'Chicken Rice Bowl',
        description: 'Crispy fried chicken cubes served over fragrant rice with your choice of Kam Heong, Kung Pao, Sweet & Sour, Buttermilk or Sambal sauce.',
        price: 'RM16.80',
      },
      {
        name: 'Fish Rice Bowl',
        description: 'Golden crispy fish fillet served with fragrant rice and your choice of Kam Heong, Kung Pao, Sweet & Sour, Buttermilk or Sambal sauce.',
        price: 'RM22.80',
      },
      {
        name: 'Prawn Rice Bowl',
        description: 'Wok-fried prawns served over fragrant rice with your choice of Kam Heong, Kung Pao, Sweet & Sour, Buttermilk or Sambal sauce.',
        price: 'RM28.80',
      },
    ],
  },
  {
    id: 'bubur',
    label: 'Bubur',
    note: 'Slow-simmered daily with our signature chicken broth. Served daily from 10am onwards.',
    items: [
      {
        name: 'Bubur Chicken',
        description: 'Tender shredded chicken served with fresh lettuce, spring onions and carrots.',
        price: 'RM10.80',
      },
      {
        name: 'Bubur Fish',
        description: 'Tender fish fillet served with fresh lettuce, spring onions and carrots.',
        price: 'RM18.80',
      },
      {
        name: 'Bubur Seafood',
        description: 'A generous combination of XL prawns, fish fillet and mussels for a hearty seafood delight.',
        price: 'RM38.80',
      },
    ],
  },
  {
    id: 'ramen',
    label: 'Ramen',
    note: 'Served daily from 10am onwards.',
    items: [
      {
        name: 'Curry Ramen - Roasted Chicken',
        description: 'Rich and creamy curry broth infused with coconut milk, fresh lemongrass and aromatic spices.',
        price: 'RM19.80',
      },
      {
        name: 'Curry Ramen - Fish Fillet',
        description: 'Rich and creamy curry broth infused with coconut milk, fresh lemongrass and aromatic spices.',
        price: 'RM21.80',
      },
      {
        name: 'Curry Ramen - Seafood',
        description: 'Rich and creamy curry broth infused with coconut milk, fresh lemongrass and aromatic spices.',
        price: 'RM35.80',
      },
      {
        name: 'Buttermilk Ramen - Roasted Chicken',
        description: 'Creamy, rich and mildly savoury with a touch of curry leaves.',
        price: 'RM19.80',
      },
      {
        name: 'Buttermilk Ramen - Fish Fillet',
        description: 'Creamy, rich and mildly savoury with a touch of curry leaves.',
        price: 'RM21.80',
      },
      {
        name: 'Buttermilk Ramen - Seafood',
        description: 'Creamy, rich and mildly savoury with a touch of curry leaves.',
        price: 'RM35.80',
      },
      {
        name: 'Dry Ramen - Shredded Chicken',
        description: 'Bold, savoury noodles coated in our signature umami-rich sauce for a satisfying bite.',
        price: 'RM12.80',
      },
      {
        name: 'Dry Ramen - BBQ Chicken',
        description: 'Bold, savoury noodles coated in our signature umami-rich sauce for a satisfying bite.',
        price: 'RM14.80',
      },
      {
        name: 'Dry Ramen - Roasted Chicken',
        description: 'Bold, savoury noodles coated in our signature umami-rich sauce for a satisfying bite.',
        price: 'RM16.80',
      },
      {
        name: 'Cantonese Style Yee Mee - Fish Fillet',
        description: 'Comforting chicken broth gently thickened with egg for a smooth, silky finish.',
        price: 'RM20.80',
      },
      {
        name: 'Cantonese Style Yee Mee - Seafood',
        description: 'Comforting chicken broth gently thickened with egg for a smooth, silky finish.',
        price: 'RM34.80',
      },
      {
        name: 'Soup Ramen - Sui Gao (Dumpling)',
        description: 'A slow-simmered chicken broth, clear, comforting and full of natural flavour.',
        price: 'RM12.80',
      },
      {
        name: 'Soup Ramen - Shredded Chicken',
        description: 'A slow-simmered chicken broth, clear, comforting and full of natural flavour.',
        price: 'RM12.80',
      },
      {
        name: 'Soup Ramen - Fish Fillet',
        description: 'A slow-simmered chicken broth, clear, comforting and full of natural flavour.',
        price: 'RM18.80',
      },
    ],
  },
  {
    id: 'tong-shui',
    label: 'Tong Shui',
    items: [
      {
        name: 'Red Bean Tong Shui',
        description: 'A classic sweet red bean soup with a velvety, subtle citrus flavour.',
        price: 'RM8.80',
      },
      {
        name: 'Red Bean Tong Shui with 3pcs Black Sesame Rice Ball',
        description: 'A classic sweet red bean soup with a velvety, subtle citrus flavour.',
        price: 'RM14.80',
      },
      {
        name: 'Ginger Tong Shui',
        description: 'The “buang angin” soup served with Black Sesame Rice Ball.',
        price: 'RM8.80',
      },
      {
        name: 'Coconut Pudding',
        description: 'House-made coconut pudding served with cendol and red bean.',
        price: 'RM16.80',
      },
      {
        name: 'Osmanthus Pudding',
        description: 'Served with sweet potato ball and peach gum. Collagen up! Up! Up!',
        price: 'RM16.80',
      },
      {
        name: 'Lemongrass Pudding',
        description: 'A refreshing pandan dessert with longan, lychee and sweet potato balls.',
        price: 'RM14.80',
      },
    ],
  },
  {
    id: 'beverages',
    label: 'Beverages',
    items: [
      { name: 'Lemon Tea', description: 'Available small, regular or cold.', price: 'Small RM4.80 · Regular RM5.80 · Cold RM6.80' },
      { name: 'Lime Juice', description: 'Available small, regular or cold.', price: 'Small RM3.80 · Regular RM4.80 · Cold RM5.80' },
      { name: 'Kopi O', description: 'Available small, regular or cold.', price: 'Small RM2.80 · Regular RM3.80 · Cold RM4.80' },
      { name: 'Kopi', description: 'Available small, regular or cold.', price: 'Small RM3.80 · Regular RM4.80 · Cold RM5.80' },
      { name: 'Teh O', description: 'Available small, regular or cold.', price: 'Small RM2.80 · Regular RM3.80 · Cold RM4.80' },
      { name: 'Teh', description: 'Available small, regular or cold.', price: 'Small RM3.80 · Regular RM4.80 · Cold RM5.80' },
      { name: 'Milo', description: 'Available small, regular or cold.', price: 'Small RM5.80 · Regular RM6.80 · Cold RM5.80' },
      { name: 'Chrysantemum Tea', description: 'Available regular or cold.', price: 'Regular RM6.80 · Cold RM7.80' },
      { name: 'Peach Gum Longan', description: 'Available regular or cold.', price: 'Regular RM7.80 · Cold RM8.80' },
      { name: 'Serai Pandan', description: 'Available regular or cold.', price: 'Regular RM6.80 · Cold RM7.80' },
      { name: 'Honey Jujube', description: 'Available regular or cold.', price: 'Regular RM6.80 · Cold RM7.80' },
      { name: 'Passion Fruit', description: 'Available regular or cold.', price: 'Regular RM6.80 · Cold RM7.80' },
      { name: 'Honey Citron', description: 'Available regular or cold.', price: 'Regular RM6.80 · Cold RM7.80' },
      { name: 'Honey Ginger', description: 'Available regular or cold.', price: 'Regular RM6.80 · Cold RM7.80' },
      { name: 'Orange Juice', description: 'Served cold.', price: 'RM8.80' },
      { name: 'Apple Juice', description: 'Served cold.', price: 'RM8.80' },
      { name: 'Spritzer 500ml', description: 'Bottled sparkling water.', price: 'RM3.80' },
      { name: 'Drinking Water', description: 'Available hot or cold.', price: 'Hot RM0.80 · Cold RM1.20' },
      { name: 'Tea Pot (Refillable)', description: 'Choose Oolong, Jasmine or Pu Er tea.', price: 'RM8.80' },
      { name: 'Oolong Milk Tea', description: 'Served cold.', price: 'RM8.80' },
      { name: 'Jasmine Milk Tea', description: 'Served cold.', price: 'RM8.80' },
    ],
  },
];

export const totalMenuItems = menuCategories.reduce(
  (total, category) => total + category.items.length,
  0,
);
