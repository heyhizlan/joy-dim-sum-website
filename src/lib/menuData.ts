import lycheePokok from '../assets/menu-items/joy-dim-sum-lychee-pokok.webp';
import softBunBraisedChicken from '../assets/menu-items/joy-dim-sum-soft-bun-braised-chicken.webp';
import curryCheongFun from '../assets/menu-items/joy-dim-sum-curry-cheong-fun.webp';
import buttermilkCheongFun from '../assets/menu-items/joy-dim-sum-buttermilk-cheong-fun.webp';
import lempengKelapaCurryPotato from '../assets/menu-items/joy-dim-sum-lempeng-kelapa-curry-potato.webp';
import rotiJalaCurryPotato from '../assets/menu-items/joy-dim-sum-roti-jala-curry-potato.webp';
import siewLoongPau from '../assets/menu-items/joy-dim-sum-siew-loong-pau.webp';
import malaSiewLoongPau from '../assets/menu-items/joy-dim-sum-mala-siew-loong-pau.webp';
import blackPepperDumpling from '../assets/menu-items/joy-dim-sum-black-pepper-dumpling.webp';
import threeColorsScallopDumpling from '../assets/menu-items/joy-dim-sum-three-colors-scallop-dumpling.webp';
import dragonFruitDumpling from '../assets/menu-items/joy-dim-sum-dragon-fruit-dumpling.webp';
import otakOtakDumpling from '../assets/menu-items/joy-dim-sum-otak-otak-dumpling.webp';
import crabstickDumpling from '../assets/menu-items/joy-dim-sum-crabstick-dumpling.webp';
import shanghaiDumpling from '../assets/menu-items/joy-dim-sum-shanghai-dumpling.webp';
import threeColorsHarKau from '../assets/menu-items/joy-dim-sum-three-colors-har-kau.webp';
import greenSiewMai from '../assets/menu-items/joy-dim-sum-green-siew-mai.webp';
import lohMaiKai from '../assets/menu-items/joy-dim-sum-loh-mai-kai.webp';
import classicPrawnDumpling from '../assets/menu-items/joy-dim-sum-classic-prawn-dumpling.webp';
import chiveGyoza from '../assets/menu-items/joy-dim-sum-chive-gyoza.webp';
import spinachDumpling from '../assets/menu-items/joy-dim-sum-spinach-dumpling.webp';
import braisedChickenFeet from '../assets/menu-items/joy-dim-sum-braised-chicken-feet.webp';
import longevityPau from '../assets/menu-items/joy-dim-sum-longevity-pau.webp';
import sweetPotatoPau from '../assets/menu-items/joy-dim-sum-sweet-potato-pau.webp';
import saltedEggPauLava from '../assets/menu-items/joy-dim-sum-salted-egg-pau-lava.webp';
import redBeanPau from '../assets/menu-items/joy-dim-sum-red-bean-pau.webp';
import chickenPau from '../assets/menu-items/joy-dim-sum-chicken-pau.webp';
import gulaMelakaBun from '../assets/menu-items/joy-dim-sum-gula-melaka-bun.webp';
import pandanKayaPau from '../assets/menu-items/joy-dim-sum-pandan-kaya-pau.webp';
import blackSesameFlowerBun from '../assets/menu-items/joy-dim-sum-black-sesame-flower-bun.webp';
import saladPrawn from '../assets/menu-items/joy-dim-sum-salad-prawn.webp';
import friedWantan from '../assets/menu-items/joy-dim-sum-fried-wantan.webp';
import duckSpringRoll from '../assets/menu-items/joy-dim-sum-duck-spring-roll.webp';
import chickenWooKok from '../assets/menu-items/joy-dim-sum-chicken-woo-kok.webp';
import beancurdPrawn from '../assets/menu-items/joy-dim-sum-beancurd-prawn.webp';
import bbqChickenPuff from '../assets/menu-items/joy-dim-sum-bbq-chicken-puff.webp';
import blackSesamePortugeseTart from '../assets/menu-items/joy-dim-sum-black-sesame-portugese-tart.webp';
import lycheeTart from '../assets/menu-items/joy-dim-sum-lychee-tart.webp';
import sambalIkanBilis from '../assets/menu-items/joy-dim-sum-sambal-ikan-bilis.webp';
import siewPau from '../assets/menu-items/joy-dim-sum-siew-pau.webp';
import poloBunCrispy from '../assets/menu-items/joy-dim-sum-polo-bun-crispy.webp';
import nasiLemakAyamGoreng from '../assets/menu-items/joy-dim-sum-nasi-lemak-ayam-goreng.webp';
import cantoneseFriedRice from '../assets/menu-items/joy-dim-sum-cantonese-fried-rice.webp';
import nasiKawKawRoastedChicken from '../assets/menu-items/joy-dim-sum-nasi-kaw-kaw-roasted-chicken.webp';
import nasiKawKawBbqChicken from '../assets/menu-items/joy-dim-sum-nasi-kaw-kaw-bbq-chicken.webp';
import nasiKawKawRoastedBbqChicken from '../assets/menu-items/joy-dim-sum-nasi-kaw-kaw-roasted-bbq-chicken.webp';
import xlFishAndChips from '../assets/menu-items/joy-dim-sum-xl-fish-and-chips.webp';
import bigChickenChop from '../assets/menu-items/joy-dim-sum-big-chicken-chop.webp';
import chickenRiceBowl from '../assets/menu-items/joy-dim-sum-chicken-rice-bowl.webp';
import fishRiceBowl from '../assets/menu-items/joy-dim-sum-fish-rice-bowl.webp';
import prawnRiceBowl from '../assets/menu-items/joy-dim-sum-prawn-rice-bowl.webp';
import cantoneseYeeMeeFishFillet from '../assets/menu-items/joy-dim-sum-cantonese-yee-mee-fish-fillet.webp';
import redBeanTongShui from '../assets/menu-items/joy-dim-sum-red-bean-tong-shui.webp';
import osmanthusPudding from '../assets/menu-items/joy-dim-sum-osmanthus-pudding.webp';
import lemongrassPudding from '../assets/menu-items/joy-dim-sum-lemongrass-pudding.webp';
export type MenuItem = {
  name: string;
  description?: string;
  price: string;
  /** Square product shot. Omitted for items we have no photography for. */
  image?: string;
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
        image: lycheePokok,
        description: 'Eight sweet lychee bites served in delicate lychee shells.',
        price: 'RM36.80',
      },
      {
        name: 'House-Made Soft Bun with Braised Chicken Meat',
        image: softBunBraisedChicken,
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
        image: curryCheongFun,
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
        image: buttermilkCheongFun,
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
        image: lempengKelapaCurryPotato,
        description: 'Traditional coconut pancakes served with fragrant curry potato.',
        price: 'RM12.80',
      },
      {
        name: 'Roti Jala (5pcs) with Curry Potato',
        image: rotiJalaCurryPotato,
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
        image: siewLoongPau,
        description: 'Delicate steamed dumplings filled with juicy chicken, bursting with rich, savoury broth.',
        price: 'RM13.80',
      },
      {
        name: 'Mala Siew Loong Pau',
        image: malaSiewLoongPau,
        description: 'Delicate steamed dumplings filled with juicy chicken, bursting with rich broth and finished with fragrant mala spices.',
        price: 'RM15.80',
      },
      {
        name: 'Black Pepper Dumpling',
        image: blackPepperDumpling,
        description: 'Juicy chicken and mushroom dumplings seasoned with aromatic black pepper.',
        price: 'RM8.80',
      },
      {
        name: '3 Colors Scallop Dumpling',
        image: threeColorsScallopDumpling,
        description: 'Beautiful three-coloured crystal dumplings filled with juicy prawns and topped with succulent scallops.',
        price: 'RM16.80',
      },
      {
        name: 'Dragon Fruit Dumpling',
        image: dragonFruitDumpling,
        description: 'Crystal dumplings infused with dragon fruit and filled with juicy prawns for a naturally sweet, refreshing touch.',
        price: 'RM16.80',
      },
      {
        name: 'Otak Otak Dumpling',
        image: otakOtakDumpling,
        description: 'Tender dumplings filled with juicy chicken and surimi, infused with fragrant herbs and spices for a rich otak-otak flavour.',
        price: 'RM8.80',
      },
      {
        name: 'Crabstick Dumpling',
        image: crabstickDumpling,
        description: 'Tender dumplings wrapped with crabstick and filled with savoury chicken and surimi for a delicious seafood bite.',
        price: 'RM8.80',
      },
      {
        name: 'Shanghai Dumpling',
        image: shanghaiDumpling,
        description: 'Shanghai-style dumplings filled with juicy chicken and chives, best enjoyed with black vinegar and ginger.',
        price: 'RM13.80',
      },
      {
        name: '3 Colors Har Kau',
        image: threeColorsHarKau,
        description: 'Three-coloured crystal dumplings generously filled with juicy prawns for a timeless dim sum favourite.',
        price: 'RM15.80',
      },
      {
        name: 'Green Siew Mai',
        image: greenSiewMai,
        description: 'Classic open-faced dumplings filled with juicy chicken, steamed to tender perfection.',
        price: 'RM8.80',
      },
      {
        name: 'Loh Mai Kai',
        image: lohMaiKai,
        description: 'Glutinous rice steamed with savoury BBQ chicken, mushrooms and fragrant seasonings for a comforting classic.',
        price: 'RM8.80',
      },
      {
        name: 'Classic Prawn Dumpling',
        image: classicPrawnDumpling,
        description: 'Tender dumplings generously filled with juicy chicken and fresh prawns for a perfectly balanced bite.',
        price: 'RM13.80',
      },
      {
        name: 'Chive Gyoza',
        image: chiveGyoza,
        description: 'Crystal-skinned dumplings filled with juicy prawns and fragrant chives for a fresh, savoury finish.',
        price: 'RM14.80',
      },
      {
        name: 'Spinach Dumpling',
        image: spinachDumpling,
        description: 'Tender dumplings filled with juicy chicken and spinach for a light and wholesome bite.',
        price: 'RM8.80',
      },
      {
        name: 'Braised Chicken Feet',
        image: braisedChickenFeet,
        description: 'Chicken feet slowly braised in a rich savoury sauce until tender and full of flavour.',
        price: 'RM15.80',
      },
      {
        name: 'Longevity Pau',
        image: longevityPau,
        description: 'Soft steamed longevity buns filled with lotus paste and a rich salted egg yolk centre for a sweet and savoury delight.',
        price: 'RM12.80',
      },
      {
        name: 'Sweet Potato Pau',
        image: sweetPotatoPau,
        description: 'Fluffy steamed buns filled with naturally sweet purple sweet potato for a smooth and comforting treat.',
        price: 'RM12.80',
      },
      {
        name: 'Salted Egg Pau Lava',
        image: saltedEggPauLava,
        description: 'Soft steamed buns filled with rich, creamy salted egg lava that melts with every bite.',
        price: 'RM14.80',
      },
      {
        name: 'Red Bean Pau',
        image: redBeanPau,
        description: 'Adorably shaped steamed buns filled with smooth, sweet red bean paste for a timeless favourite.',
        price: 'RM10.80',
      },
      {
        name: 'Chicken Pau',
        image: chickenPau,
        description: 'Fluffy steamed buns generously filled with savoury chicken in a rich, flavourful sauce for a comforting classic.',
        price: 'RM12.80',
      },
      {
        name: 'Gula Melaka Bun',
        image: gulaMelakaBun,
        description: 'Soft steamed buns with a luscious Gula Melaka filling, offering a rich caramel sweetness in every bite.',
        price: 'RM6.80',
      },
      {
        name: 'Pandan Kaya Pau',
        image: pandanKayaPau,
        description: 'Soft steamed buns filled with our signature house-made pandan kaya, lovingly crafted and uniquely JOY Dim Sum.',
        price: 'RM8.80',
      },
      {
        name: 'Black Sesame Flower Bun',
        image: blackSesameFlowerBun,
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
        image: saladPrawn,
        description: 'Crispy prawn dumplings wrapped in a light pastry for a satisfying crunch.',
        price: 'RM12.80 (3pcs)',
      },
      {
        name: 'Fried Wantan',
        image: friedWantan,
        description: 'Golden-fried wantons filled with savoury chicken for a crispy, flavourful bite.',
        price: 'RM12.80 (5pcs)',
      },
      {
        name: 'Duck Spring Roll',
        image: duckSpringRoll,
        description: 'Crispy spring rolls filled with tender smoked duck for a rich, savoury finish.',
        price: 'RM16.80 (2 rolls)',
      },
      {
        name: 'Chicken Woo Kok',
        image: chickenWooKok,
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
        image: beancurdPrawn,
        description: 'Crispy beancurd rolls generously filled with juicy prawns for an irresistible crunch.',
        price: 'RM16.80 (3pcs)',
      },
      {
        name: 'BBQ Chicken Puff',
        image: bbqChickenPuff,
        description: 'Flaky pastry filled with savoury BBQ chicken, baked until perfectly crispy.',
        price: 'RM10.50 (3pcs)',
      },
      {
        name: 'Black Sesame Portugese Tart',
        image: blackSesamePortugeseTart,
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
        image: lycheeTart,
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
        image: sambalIkanBilis,
        description: 'Soft steamed buns filled with spicy sambal ikan bilis for a bold local favourite.',
        price: 'RM13.50 (3pcs)',
      },
      {
        name: 'Siew Pau',
        image: siewPau,
        description: 'Golden flaky pastry filled with savoury chicken in a rich, flavourful sauce.',
        price: 'RM10.50 (3pcs)',
      },
      {
        name: 'Polo Bun Crispy with Butter & Honey',
        image: poloBunCrispy,
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
        image: nasiLemakAyamGoreng,
        description: 'Fragrant coconut rice served with crispy fried chicken, homemade sambal, peanuts, cucumber, pickles and hard boiled egg.',
        price: 'RM18.80',
      },
      {
        name: 'Cantonese Fried Rice',
        image: cantoneseFriedRice,
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
        image: nasiKawKawRoastedChicken,
        description: 'Fragrant chicken rice served with a juicy quarter chicken, fresh cucumber, pickles and our signature chilli sauce.',
        price: 'RM16.80',
      },
      {
        name: 'Nasi Kaw-Kaw + BBQ Chicken',
        image: nasiKawKawBbqChicken,
        description: 'Fragrant chicken rice topped with tender BBQ chicken, served with comforting chicken soup and our signature chilli sauce.',
        price: 'RM15.80',
      },
      {
        name: 'Nasi Kaw-Kaw + Chicken Roasted + BBQ Chicken',
        image: nasiKawKawRoastedBbqChicken,
        description: 'Quarter roasted chicken and tender BBQ chicken, served with fragrant chicken rice, chilli sauce and soup.',
        price: 'RM23.80',
      },
      {
        name: 'XL Fish & Chips',
        image: xlFishAndChips,
        description: 'Crispy XL fish fillet served with golden sweet potato fries and our signature FC mayo.',
        price: 'RM32.80',
      },
      {
        name: 'Big Chicken Chop',
        image: bigChickenChop,
        description: 'Juicy chicken chop served with golden sweet potato fries, FC mayo and your choice of Kam Heong, Sweet & Sour or Buttermilk sauce.',
        price: 'RM26.80',
      },
      {
        name: 'Chicken Rice Bowl',
        image: chickenRiceBowl,
        description: 'Crispy fried chicken cubes served over fragrant rice with your choice of Kam Heong, Kung Pao, Sweet & Sour, Buttermilk or Sambal sauce.',
        price: 'RM16.80',
      },
      {
        name: 'Fish Rice Bowl',
        image: fishRiceBowl,
        description: 'Golden crispy fish fillet served with fragrant rice and your choice of Kam Heong, Kung Pao, Sweet & Sour, Buttermilk or Sambal sauce.',
        price: 'RM22.80',
      },
      {
        name: 'Prawn Rice Bowl',
        image: prawnRiceBowl,
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
        image: cantoneseYeeMeeFishFillet,
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
        image: redBeanTongShui,
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
        image: osmanthusPudding,
        description: 'Served with sweet potato ball and peach gum. Collagen up! Up! Up!',
        price: 'RM16.80',
      },
      {
        name: 'Lemongrass Pudding',
        image: lemongrassPudding,
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
