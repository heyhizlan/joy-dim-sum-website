// Copy for the /careers/ page in English, Chinese and Malay.
// Keep the tone casual and local, the way the team actually talks to people,
// not HR-speak. Pay figures come from the client brief (Aug 2026).

export const careerLanguages = ['en', 'zh', 'ms'] as const;
export type CareerLanguage = (typeof careerLanguages)[number];

export type RoleId = 'kitchen' | 'service' | 'barista';
export type Shift = 'full' | 'part';

export const careerContacts = [
  { name: 'Sherene', phone: '012-232 2542', wa: '60122322542' },
  { name: 'Cammy', phone: '017-306 5039', wa: '60173065039' },
] as const;

export const careerEmail = 'hello.joydimsum@gmail.com';

// Monthly ranges for full-time, hourly for part-time. `null` means the role
// is not open on that shift right now.
export const rolePay: Record<RoleId, Record<Shift, { min: number; max?: number } | null>> = {
  kitchen: { full: { min: 2000, max: 3500 }, part: null },
  service: { full: { min: 2000 }, part: { min: 10, max: 12 } },
  barista: { full: { min: 2000 }, part: { min: 10, max: 12 } },
};

export const roleOrder: RoleId[] = ['kitchen', 'service', 'barista'];

type RoleCopy = {
  title: string;
  station: string;
  summary: string;
  tasks: [string, string, string];
};

export type CareersCopy = {
  htmlLang: string;
  switchLabel: string;
  breadcrumbHome: string;
  breadcrumbCareers: string;
  hero: {
    kicker: string;
    title: [string, string];
    lede: string;
    applyCta: string;
    rolesCta: string;
  };
  plan: {
    label: string;
    caption: string;
    hot: string;
    dimsum: string;
    beverage: string;
    floor: string;
  };
  roles: {
    heading: string;
    intro: string;
    shiftLabel: string;
    shift: Record<Shift, string>;
    payLabel: string;
    perMonth: string;
    perHour: string;
    experienceNote: string;
    fullTimeOnly: string;
    apply: string;
    items: Record<RoleId, RoleCopy>;
  };
  perks: { heading: string; items: [string, string, string, string, string] };
  who: { heading: string; items: [string, string, string, string]; note: string };
  apply: {
    kicker: string;
    heading: string;
    body: string;
    checklist: [string, string, string];
    whatsappPrefix: string;
    emailLead: string;
    emailSubject: string;
  };
  formatFrom: (amount: string) => string;
  whatsappMessage: (role?: string, shift?: string) => string;
};

export const careersCopy: Record<CareerLanguage, CareersCopy> = {
  en: {
    htmlLang: 'en-MY',
    switchLabel: 'Choose language',
    breadcrumbHome: 'Home',
    breadcrumbCareers: 'Careers',
    hero: {
      kicker: 'Now hiring at Kiara Bay',
      title: ['Jom join', 'the JOY family!'],
      lede:
        'We need friendly, hardworking people for our Kiara Bay outlet. In the kitchen, on the floor or behind the drinks counter, full-time or part-time. Experience is a bonus, first-timers also welcome.',
      applyCta: 'Apply on WhatsApp',
      rolesCta: 'See open roles',
    },
    plan: {
      label: 'Stations at JOY Dim Sum Kiara Bay',
      caption: 'Four stations, one team. Tap a station to see the role.',
      hot: 'Hot kitchen',
      dimsum: 'Dim sum counter',
      beverage: 'Beverage counter',
      floor: 'Front of house',
    },
    roles: {
      heading: 'Open roles',
      intro: 'Pick full-time or part-time to see the pay.',
      shiftLabel: 'Show pay for',
      shift: { full: 'Full-time', part: 'Part-time' },
      payLabel: 'Pay',
      perMonth: '/ month',
      perHour: '/ hour',
      experienceNote: 'Depends on experience',
      fullTimeOnly: 'Full-time only for now',
      apply: 'Apply for this role',
      items: {
        kitchen: {
          title: 'Kitchen crew',
          station: 'Dim sum counter & hot kitchen',
          summary:
            'Steam, fold, fry and plate. Junior cooks are welcome, the team will teach you our recipes and kitchen routine step by step.',
          tasks: [
            'Prep, steam and plate dim sum',
            'Help out on the hot kitchen line',
            'Keep your station clean and stocked',
          ],
        },
        service: {
          title: 'Service crew',
          station: 'Front of house',
          summary:
            'You run the floor. Greet guests, take orders, send out the baskets and make sure every table is happy.',
          tasks: [
            'Welcome and seat guests',
            'Take orders and serve food and drinks',
            'Clear tables and help wherever the floor needs you',
          ],
        },
        barista: {
          title: 'Barista',
          station: 'Beverage counter',
          summary:
            'Kopi, teh and everything in between. Never used a coffee machine before? We’ll show you how.',
          tasks: [
            'Make kopi, tea and other drinks',
            'Keep orders moving during peak hours',
            'Keep the counter clean and stocked',
          ],
        },
      },
    },
    perks: {
      heading: 'What you get',
      items: [
        'Staff meals provided',
        'EPF & SOCSO',
        'Training provided',
        'A friendly team to work with',
        'Room to grow with us',
      ],
    },
    who: {
      heading: 'Who we’re looking for',
      items: [
        'Friendly, with a positive attitude',
        'Responsible and hardworking',
        'A good team player',
        'Enjoys looking after customers',
      ],
      note: 'Experience is a bonus. Fresh applicants are welcome.',
    },
    apply: {
      kicker: 'How to apply',
      heading: 'Keen? WhatsApp us.',
      body: 'WhatsApp is the fastest way to reach us. Send your resume and let us know:',
      checklist: ['Which role you want', 'Full-time or part-time', 'When you can start'],
      whatsappPrefix: 'WhatsApp',
      emailLead: 'Prefer email? Send it to',
      emailSubject: 'Job application – JOY Dim Sum Kiara Bay',
    },
    formatFrom: (amount) => `From ${amount}`,
    whatsappMessage: (role, shift) =>
      role
        ? `Hi JOY Dim Sum! I'd like to apply for ${role}${shift ? ` (${shift})` : ''} at Kiara Bay. I'll send my resume here.`
        : `Hi JOY Dim Sum! I'm interested to work at your Kiara Bay outlet. I'll send my resume here.`,
  },

  zh: {
    htmlLang: 'zh-MY',
    switchLabel: '选择语言',
    breadcrumbHome: '主页',
    breadcrumbCareers: '招聘',
    hero: {
      kicker: 'Kiara Bay 分店招人中',
      title: ['一起加入', 'JOY 大家庭！'],
      lede:
        'Kiara Bay 分店需要友善又勤劳的你。厨房、外场或水吧，全职兼职都有。有经验更好，没经验也欢迎！',
      applyCta: 'WhatsApp 应征',
      rolesCta: '看看职位',
    },
    plan: {
      label: 'JOY Dim Sum Kiara Bay 的工作岗位',
      caption: '四个岗位，一个团队。点一下看职位详情。',
      hot: '热厨',
      dimsum: '点心部',
      beverage: '水吧',
      floor: '外场',
    },
    roles: {
      heading: '招聘职位',
      intro: '选全职或兼职，看看薪水多少。',
      shiftLabel: '显示薪水',
      shift: { full: '全职', part: '兼职' },
      payLabel: '薪水',
      perMonth: '/ 月',
      perHour: '/ 小时',
      experienceNote: '看经验而定',
      fullTimeOnly: '目前只招全职',
      apply: '应征这个职位',
      items: {
        kitchen: {
          title: '厨房员工',
          station: '点心部 & 热厨',
          summary: '蒸、包、炸、摆盘样样来。新手厨师也欢迎，我们会一步一步教你 JOY 的做法。',
          tasks: ['准备、蒸煮和摆放点心', '在热厨帮忙出餐', '保持工作台干净、备料充足'],
        },
        service: {
          title: '外场服务员',
          station: '外场',
          summary: '外场交给你。招呼客人、点单、上菜，让每一桌都吃得开开心心。',
          tasks: ['招呼客人、带位', '点单、上菜和饮料', '收拾桌子，哪里需要就去帮忙'],
        },
        barista: {
          title: '水吧员 (Barista)',
          station: '水吧',
          summary: 'Kopi、teh 和各种饮料都由你负责。没碰过咖啡机？不要紧，我们教你。',
          tasks: ['冲泡 kopi、茶和其他饮料', '忙的时候保持出单顺畅', '保持水吧干净、备料充足'],
        },
      },
    },
    perks: {
      heading: '员工福利',
      items: ['提供员工餐', '有 EPF & SOCSO', '提供培训', '友善的工作环境', '有晋升机会'],
    },
    who: {
      heading: '我们在找这样的你',
      items: ['友善、态度积极', '有责任心、肯做', '有团队精神', '喜欢服务顾客'],
      note: '有经验更好，没经验也欢迎！',
    },
    apply: {
      kicker: '怎样应征',
      heading: '有兴趣？WhatsApp 我们！',
      body: 'WhatsApp 最快找到我们。把你的履历 (resume) 发过来，再告诉我们：',
      checklist: ['想应征哪个职位', '全职还是兼职', '几时可以开工'],
      whatsappPrefix: 'WhatsApp',
      emailLead: '比较喜欢用 email？寄到',
      emailSubject: '应征工作 – JOY Dim Sum Kiara Bay',
    },
    formatFrom: (amount) => `${amount} 起`,
    whatsappMessage: (role, shift) =>
      role
        ? `你好 JOY Dim Sum！我想应征 Kiara Bay 的${role}${shift ? `（${shift}）` : ''}，我会把履历发过来。`
        : '你好 JOY Dim Sum！我有兴趣在 Kiara Bay 分店工作，我会把履历发过来。',
  },

  ms: {
    htmlLang: 'ms-MY',
    switchLabel: 'Pilih bahasa',
    breadcrumbHome: 'Utama',
    breadcrumbCareers: 'Kerjaya',
    hero: {
      kicker: 'Kiara Bay tengah cari orang',
      title: ['Jom join', 'keluarga JOY!'],
      lede:
        'Outlet Kiara Bay kami perlukan orang yang peramah dan rajin. Kat dapur, floor atau kaunter minuman, full-time atau part-time. Ada pengalaman lagi bagus, first-timer pun boleh.',
      applyCta: 'Mohon via WhatsApp',
      rolesCta: 'Tengok jawatan',
    },
    plan: {
      label: 'Stesen kerja di JOY Dim Sum Kiara Bay',
      caption: 'Empat stesen, satu team. Tekan stesen untuk tengok jawatan.',
      hot: 'Dapur panas',
      dimsum: 'Kaunter dim sum',
      beverage: 'Kaunter minuman',
      floor: 'Bahagian depan',
    },
    roles: {
      heading: 'Jawatan kosong',
      intro: 'Pilih full-time atau part-time untuk tengok gaji.',
      shiftLabel: 'Tunjuk gaji untuk',
      shift: { full: 'Full-time', part: 'Part-time' },
      payLabel: 'Gaji',
      perMonth: '/ bulan',
      perHour: '/ jam',
      experienceNote: 'Ikut pengalaman',
      fullTimeOnly: 'Full-time sahaja buat masa ni',
      apply: 'Mohon jawatan ni',
      items: {
        kitchen: {
          title: 'Kru dapur',
          station: 'Kaunter dim sum & dapur panas',
          summary:
            'Kukus, lipat, goreng dan hidang. Chef junior pun boleh, team kami akan ajar resepi dan cara kerja dapur step by step.',
          tasks: [
            'Sediakan, kukus dan hidang dim sum',
            'Bantu kat line dapur panas',
            'Pastikan stesen bersih dan cukup stok',
          ],
        },
        service: {
          title: 'Kru servis',
          station: 'Bahagian depan',
          summary:
            'Korang yang jaga floor. Sambut pelanggan, ambil order, hantar makanan dan pastikan semua meja happy.',
          tasks: [
            'Sambut pelanggan dan bawa ke meja',
            'Ambil order, hantar makanan dan minuman',
            'Kemas meja dan tolong mana yang perlu',
          ],
        },
        barista: {
          title: 'Barista',
          station: 'Kaunter minuman',
          summary:
            'Kopi, teh dan macam-macam lagi. Tak pernah guna mesin kopi? Takpe, kami ajar.',
          tasks: [
            'Buat kopi, teh dan minuman lain',
            'Pastikan order laju masa waktu sibuk',
            'Pastikan kaunter bersih dan cukup stok',
          ],
        },
      },
    },
    perks: {
      heading: 'Apa yang korang dapat',
      items: [
        'Makan staf disediakan',
        'EPF & SOCSO',
        'Training disediakan',
        'Team yang friendly',
        'Peluang untuk naik',
      ],
    },
    who: {
      heading: 'Siapa yang kami cari',
      items: [
        'Peramah dan positif',
        'Bertanggungjawab dan rajin',
        'Boleh kerja dalam team',
        'Suka layan pelanggan',
      ],
      note: 'Ada pengalaman lagi bagus. Fresh pun dialu-alukan!',
    },
    apply: {
      kicker: 'Cara mohon',
      heading: 'Berminat? WhatsApp kami.',
      body: 'WhatsApp paling cepat. Hantar resume dan bagitahu kami:',
      checklist: ['Jawatan yang korang nak', 'Full-time atau part-time', 'Bila boleh mula kerja'],
      whatsappPrefix: 'WhatsApp',
      emailLead: 'Lebih suka email? Hantar ke',
      emailSubject: 'Mohon kerja – JOY Dim Sum Kiara Bay',
    },
    formatFrom: (amount) => `Dari ${amount}`,
    whatsappMessage: (role, shift) =>
      role
        ? `Hi JOY Dim Sum! Saya nak mohon jawatan ${role}${shift ? ` (${shift})` : ''} kat Kiara Bay. Saya hantar resume kat sini ya.`
        : 'Hi JOY Dim Sum! Saya berminat nak kerja kat outlet Kiara Bay. Saya hantar resume kat sini ya.',
  },
};

export const languageButtons: Record<CareerLanguage, { label: string; name: string }> = {
  en: { label: 'EN', name: 'English' },
  zh: { label: '中文', name: '中文' },
  ms: { label: 'BM', name: 'Bahasa Melayu' },
};

export function isCareerLanguage(value: unknown): value is CareerLanguage {
  return typeof value === 'string' && (careerLanguages as readonly string[]).includes(value);
}
