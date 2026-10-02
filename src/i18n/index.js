import { createI18n } from "vue-i18n";

const messages = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      projects: "Projeler",
      games: "Ez Games",
      contact: "İletişim",
      privacy: "Gizlilik",
      menu: "Menüyü aç",
      language: "Dil"
    },
    home: {
      eyebrow: "Hakkımda",
      lede: "Bilgisayar mühendisi. Flutter ile mobil, Vue.js ile web uygulamaları geliştiriyorum.",
      chips: ["Flutter", "Vue.js", "API", "Arayüz", "Veritabanı"],
      projects: "Projeler",
      contact: "İletişim",
      timeline: [
        {
          title: "Serbest mobil uygulama geliştiricisi",
          place: "Serbest meslek",
          date: "Eyl 2020 – Günümüz",
          text: "Android ve iOS için Flutter ile uygulama geliştiriyorum. API, veritabanı, Firebase ve Supabase bağlantılarını kuruyorum, arayüz tasarlıyorum ve uygulamaları Google Play'de yayınlıyorum."
        },
        {
          title: "Stajyer",
          place: "SCA Social",
          date: "Oca 2025 – Şub 2025",
          text: "Proje yönetimi, yapay zeka, veri bilimi ve bilişim hukuku eğitimi aldım. Projelerimi gösteren kişisel bir portföy hazırladım."
        },
        {
          title: "Stajyer",
          place: "Flo Mağazacılık ve Pazarlama",
          date: "Ağu 2024",
          text: "Yazılım geliştirme süreçlerini ve bölümler arası işleyişi gözlemledim."
        },
        {
          title: "Fullstack geliştirici, bitirme projesi",
          place: "Alisan Lojistik A.Ş, İstanbul",
          date: "Eyl 2022 – May 2023",
          text: "ASP.NET Web API, Vue.js ve PostgreSQL ile bir ERP sistemi geliştirdim. Görev takibini Azure DevOps ile yürüttüm."
        },
        {
          title: "Fullstack geliştirici stajyeri",
          place: "Primefor Teknoloji A.Ş, Konya",
          date: "Haz 2022 – Ağu 2022",
          text: "ASP.NET Web API, React ve MS SQL ile bir e-ticaret sitesi geliştirdim."
        },
        {
          title: "Bilgisayar Mühendisliği",
          place: "Konya Teknik Üniversitesi",
          date: "Eyl 2018 – Kas 2024",
          text: "Lisans. Not ortalaması 3.00/4.00."
        }
      ],
      p1: "Merhaba! Ben Ebubekir Yıldırım, Konya Teknik Üniversitesi'nden Bilgisayar Mühendisliği bölümünden mezun oldum. Teknolojiye olan ilgim, yazılım geliştirmeye olan tutkumla birleşiyor. Şu anda Flutter kullanarak mobil uygulamalar geliştiriyorum ve Vue.js ile modern web uygulamaları üzerinde çalışıyorum.",
      p2: "Yazılım geliştirme sürecinde API entegrasyonu, kullanıcı arayüzü tasarımı ve veritabanı yönetimi gibi konularda deneyim kazandım. Bu alanlarda edindiğim tecrübelerimi, hem staj dönemimde hem de bitirme projemde başarıyla uyguladım. Ayrıca araştırmacı bir yönüm var. Teknolojilerin evrimini takip etmek, yeni araçları ve yöntemleri keşfetmek benim için bir tutku. Bu süreç, sürekli olarak yenilikçi çözümler üretmemi sağlıyor ve yazılım geliştirme alanındaki sorunlara yaratıcı yaklaşımlar geliştirmemi sağlıyor.",
      p3: "Boş zamanlarımda spor yapmayı, kitap okumayı, oyun kodlamayı, yürüyüş yapmayı ve yeni teknolojileri keşfetmeyi seviyorum. Sürekli öğrenmeyi ve kendimi geliştirmeyi hedefliyorum. Yazılım dünyasındaki yenilikleri takip etmek, benim için hem bir tutku hem de bir yaşam tarzı. Projelerimi GitHub üzerinden inceleyebilir veya LinkedIn'den benimle iletişime geçebilirsiniz."
    },
    projects: {
      title: "Projelerim",
      lede: "Flutter, Vue.js ve .NET ile geliştirdiğim çalışmalar.",
      filterLabel: "Teknoloji filtresi",
      empty: "Bu filtrede proje yok.",
      clinic: {
        title: "Klinik Randevu Sistemi",
        text: "ASP.NET Core Web API ve Vue.js ile yapılmış klinik randevu sistemi. Hastalar online randevu alır, doktorlar randevuları panelden yönetir."
      },
      stock: {
        title: "Stok Takip",
        text: ".NET Core Web API ve Vue.js ile yapılmış stok takip sistemi. Ürün, müşteri, tedarikçi, satış ve alış işlemlerini yönetir."
      },
      cafe: {
        title: "Kafe Menü",
        text: "Flutter ile yapılmış kafe menü ve sipariş uygulaması. Müşteriler QR kod ile menüye ulaşıp sipariş verir, işletme siparişleri panelden takip eder."
      },
      crypto: {
        title: "Kripto Trade",
        text: "Flutter ve Python ile yapılmış kripto analiz uygulaması. RSI, EMA ve MACD göstergelerine göre long, short veya bekle sinyali üretir."
      },
      food: {
        title: "Food App",
        text: "Flutter ile yapılmış bir yemek uygulamasıdır. API'den çekilen verilerle kullanıcıların ellerindeki malzemeye göre yemek öneriyor."
      },
      quiz: {
        title: "Quiz App",
        text: "Flutter ile yapılmış bir quiz uygulamasıdır. KPSS çıkmış sınav sorularının olduğu quiz uygulaması."
      },
      todo: {
        title: "TODO App",
        text: "Flutter ile yapılmış bir Todo uygulamasıdır. Isar database kullanılan notlar uygulaması."
      },
      weatherCollect: {
        title: "Weather App",
        text: "Flutter ve Collect API ile oluşturulmuş hava durumu uygulaması."
      },
      weatherOpen: {
        title: "Weather App",
        text: "Flutter ve Open Weather API ile oluşturulmuş hava durumu uygulaması."
      },
      ktun: {
        title: "KTUNGram",
        text: "Konya Teknik Üniversitesinde dönem projesi için oluşturulmuş chat uygulaması. Flutter ve firebase kullanıldı."
      },
      qr: {
        title: "Qr App",
        text: "Flutter ile yapılmış bir qr uygulamasıdır. Uygulamada QR kod oluşturup taratılabilir. Uygulama aynı zamanda Google Play Store'da yayınlanmıştır."
      },
      reminder: {
        title: "Reminder App",
        text: "Flutter ile yapılmış bir hatırlatıcı uygulamasıdır."
      }
    },
    apps: {
      title: "Uygulamalarım",
      lede: "Ez Games altında yayınlanan oyunlar.",
      more: "Devamı gelecek."
    },
    contact: {
      eyebrow: "İletişim",
      title: "İletişim Bilgileri",
      lede: "Yazmak, aramak veya profillerime bakmak için.",
      email: "E-posta",
      phone: "Telefon"
    },
    privacy: {
      title: "Gizlilik Politikası ve Kullanım Şartları",
      note: "Yasal metin İngilizce olarak sunulmaktadır."
    }
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      games: "Ez Games",
      contact: "Contact",
      privacy: "Privacy",
      menu: "Open menu",
      language: "Language"
    },
    home: {
      eyebrow: "About",
      lede: "Computer engineer. I build mobile apps with Flutter and web apps with Vue.js.",
      chips: ["Flutter", "Vue.js", "API", "Interface", "Database"],
      projects: "Projects",
      contact: "Contact",
      timeline: [
        {
          title: "Freelance mobile app developer",
          place: "Self-employed",
          date: "Sep 2020 – Present",
          text: "I build cross-platform Flutter apps for Android and iOS, integrate APIs, databases, Firebase, and Supabase, design interfaces, and publish apps on Google Play."
        },
        {
          title: "Intern",
          place: "SCA Social",
          date: "Jan 2025 – Feb 2025",
          text: "Trained in project management, artificial intelligence, data science, and IT law. Built a personal portfolio to present my work."
        },
        {
          title: "Intern",
          place: "Flo Mağazacılık ve Pazarlama",
          date: "Aug 2024",
          text: "Observed software development processes and how teams work across the business."
        },
        {
          title: "Fullstack developer, graduation project",
          place: "Alisan Lojistik A.Ş, Istanbul",
          date: "Sep 2022 – May 2023",
          text: "Built an ERP system with ASP.NET Web API, Vue.js, and PostgreSQL. Tracked tasks in Azure DevOps."
        },
        {
          title: "Fullstack developer intern",
          place: "Primefor Teknoloji A.Ş, Konya",
          date: "Jun 2022 – Aug 2022",
          text: "Built an e-commerce site with ASP.NET Web API, React, and MS SQL."
        },
        {
          title: "Computer engineering",
          place: "Konya Technical University",
          date: "Sep 2018 – Nov 2024",
          text: "Bachelor's degree. GPA 3.00/4.00."
        }
      ],
      p1: "Hello! I'm Ebubekir Yıldırım, a computer engineering graduate of Konya Technical University. My interest in technology comes together with my passion for building software. I currently develop mobile apps with Flutter and modern web apps with Vue.js.",
      p2: "I have gained experience in API integration, user interface design, and database management. I put that experience to work during my internship and in my graduation project. I also enjoy research. Following how technologies evolve and discovering new tools and methods is a passion of mine. That keeps me producing fresh solutions and approaching software problems creatively.",
      p3: "In my free time I enjoy sports, reading, coding games, walking, and exploring new technologies. I aim to keep learning and improving. Following what is new in software is both a passion and a way of life for me. You can look through my projects on GitHub or reach me on LinkedIn."
    },
    projects: {
      title: "My projects",
      lede: "Work I have built with Flutter, Vue.js, and .NET.",
      filterLabel: "Technology filter",
      empty: "No projects in this filter.",
      clinic: {
        title: "Clinic Appointment System",
        text: "A clinic appointment system built with ASP.NET Core Web API and Vue.js. Patients book online, and doctors manage appointments from a panel."
      },
      stock: {
        title: "Inventory Tracking",
        text: "An inventory system built with .NET Core Web API and Vue.js. It manages products, customers, suppliers, sales, and purchases."
      },
      cafe: {
        title: "Cafe Menu",
        text: "A cafe menu and ordering app built with Flutter. Customers open the menu with a QR code and place an order, while the business tracks orders from a panel."
      },
      crypto: {
        title: "Kripto Trade",
        text: "A crypto analysis app built with Flutter and Python. It produces long, short, or wait signals from RSI, EMA, and MACD."
      },
      food: {
        title: "Food App",
        text: "A recipe app built with Flutter. It suggests meals from an API based on the ingredients the user already has."
      },
      quiz: {
        title: "Quiz App",
        text: "A quiz app built with Flutter, using past KPSS exam questions."
      },
      todo: {
        title: "TODO App",
        text: "A notes app built with Flutter, using the Isar database."
      },
      weatherCollect: {
        title: "Weather App",
        text: "A weather app built with Flutter and the Collect API."
      },
      weatherOpen: {
        title: "Weather App",
        text: "A weather app built with Flutter and the OpenWeather API."
      },
      ktun: {
        title: "KTUNGram",
        text: "A chat app built as a term project at Konya Technical University, using Flutter and Firebase."
      },
      qr: {
        title: "Qr App",
        text: "A QR app built with Flutter. It can create and scan QR codes, and it is published on the Google Play Store."
      },
      reminder: {
        title: "Reminder App",
        text: "A reminder app built with Flutter."
      }
    },
    apps: {
      title: "My apps",
      lede: "Games published under Ez Games.",
      more: "More coming soon."
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact details",
      lede: "Write, call, or visit my profiles.",
      email: "Email",
      phone: "Phone"
    },
    privacy: {
      title: "Privacy Policy & Terms of Use",
      note: "The legal text is provided in English."
    }
  },
  de: {
    nav: {
      home: "Start",
      projects: "Projekte",
      games: "Ez Games",
      contact: "Kontakt",
      privacy: "Datenschutz",
      menu: "Menü öffnen",
      language: "Sprache"
    },
    home: {
      eyebrow: "Über mich",
      lede: "Informatiker. Ich entwickle mobile Apps mit Flutter und Webanwendungen mit Vue.js.",
      chips: ["Flutter", "Vue.js", "API", "Oberfläche", "Datenbank"],
      projects: "Projekte",
      contact: "Kontakt",
      timeline: [
        {
          title: "Freiberuflicher App-Entwickler",
          place: "Selbstständig",
          date: "Sep. 2020 – heute",
          text: "Ich entwickle plattformübergreifende Flutter-Apps für Android und iOS, binde APIs, Datenbanken, Firebase und Supabase an, gestalte Oberflächen und veröffentliche Apps bei Google Play."
        },
        {
          title: "Praktikant",
          place: "SCA Social",
          date: "Jan. 2025 – Feb. 2025",
          text: "Schulung in Projektmanagement, künstlicher Intelligenz, Data Science und IT-Recht. Ein persönliches Portfolio für meine Projekte erstellt."
        },
        {
          title: "Praktikant",
          place: "Flo Mağazacılık ve Pazarlama",
          date: "Aug. 2024",
          text: "Softwareentwicklung und die Zusammenarbeit der Fachbereiche beobachtet."
        },
        {
          title: "Fullstack-Entwickler, Abschlussarbeit",
          place: "Alisan Lojistik A.Ş, Istanbul",
          date: "Sep. 2022 – Mai 2023",
          text: "Ein ERP-System mit ASP.NET Web API, Vue.js und PostgreSQL entwickelt. Aufgaben in Azure DevOps verfolgt."
        },
        {
          title: "Fullstack-Praktikant",
          place: "Primefor Teknoloji A.Ş, Konya",
          date: "Juni 2022 – Aug. 2022",
          text: "Eine E-Commerce-Seite mit ASP.NET Web API, React und MS SQL entwickelt."
        },
        {
          title: "Informatik",
          place: "Technische Universität Konya",
          date: "Sep. 2018 – Nov. 2024",
          text: "Bachelor. Notendurchschnitt 3.00/4.00."
        }
      ],
      p1: "Hallo! Ich bin Ebubekir Yıldırım und habe Informatik an der Technischen Universität Konya abgeschlossen. Mein Interesse an Technologie verbindet sich mit meiner Leidenschaft für Softwareentwicklung. Derzeit entwickle ich mobile Apps mit Flutter und moderne Webanwendungen mit Vue.js.",
      p2: "In der Softwareentwicklung habe ich Erfahrung in API-Integration, Oberflächengestaltung und Datenbankverwaltung gesammelt. Diese Erfahrung habe ich im Praktikum und in meiner Abschlussarbeit eingesetzt. Außerdem arbeite ich gerne forschend. Die Entwicklung von Technologien zu verfolgen und neue Werkzeuge zu entdecken, ist für mich eine Leidenschaft. So finde ich neue Lösungen und gehe Probleme in der Softwareentwicklung kreativ an.",
      p3: "In meiner Freizeit mache ich Sport, lese, programmiere Spiele, gehe spazieren und entdecke neue Technologien. Ich möchte ständig dazulernen. Neues in der Softwarewelt zu verfolgen, ist für mich sowohl Leidenschaft als auch Lebensweise. Meine Projekte finden Sie auf GitHub, oder Sie erreichen mich über LinkedIn."
    },
    projects: {
      title: "Meine Projekte",
      lede: "Arbeiten, die ich mit Flutter, Vue.js und .NET entwickelt habe.",
      filterLabel: "Technologiefilter",
      empty: "Keine Projekte in diesem Filter.",
      clinic: {
        title: "Klinik-Terminsystem",
        text: "Ein Terminsystem für Kliniken mit ASP.NET Core Web API und Vue.js. Patienten buchen online, Ärzte verwalten Termine im Panel."
      },
      stock: {
        title: "Lagerverwaltung",
        text: "Ein Lagersystem mit .NET Core Web API und Vue.js. Es verwaltet Produkte, Kunden, Lieferanten, Verkäufe und Einkäufe."
      },
      cafe: {
        title: "Café-Menü",
        text: "Eine Menü- und Bestell-App mit Flutter. Gäste öffnen das Menü per QR-Code und bestellen, der Betrieb verfolgt die Bestellungen im Panel."
      },
      crypto: {
        title: "Kripto Trade",
        text: "Eine Krypto-Analyse-App mit Flutter und Python. Sie erzeugt Long-, Short- oder Warte-Signale aus RSI, EMA und MACD."
      },
      food: {
        title: "Food App",
        text: "Eine Rezept-App mit Flutter. Sie schlägt Gerichte anhand der Zutaten vor, die der Nutzer schon hat."
      },
      quiz: {
        title: "Quiz App",
        text: "Eine Quiz-App mit Flutter, mit früheren Fragen der KPSS-Prüfung."
      },
      todo: {
        title: "TODO App",
        text: "Eine Notizen-App mit Flutter und der Isar-Datenbank."
      },
      weatherCollect: {
        title: "Weather App",
        text: "Eine Wetter-App mit Flutter und der Collect API."
      },
      weatherOpen: {
        title: "Weather App",
        text: "Eine Wetter-App mit Flutter und der OpenWeather API."
      },
      ktun: {
        title: "KTUNGram",
        text: "Eine Chat-App als Semesterprojekt an der Technischen Universität Konya, mit Flutter und Firebase."
      },
      qr: {
        title: "Qr App",
        text: "Eine QR-App mit Flutter. Sie erstellt und scannt QR-Codes und ist im Google Play Store veröffentlicht."
      },
      reminder: {
        title: "Reminder App",
        text: "Eine Erinnerungs-App mit Flutter."
      }
    },
    apps: {
      title: "Meine Apps",
      lede: "Spiele, die unter Ez Games veröffentlicht sind.",
      more: "Weitere folgen."
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Kontaktdaten",
      lede: "Schreiben, anrufen oder Profile ansehen.",
      email: "E-Mail",
      phone: "Telefon"
    },
    privacy: {
      title: "Datenschutz und Nutzungsbedingungen",
      note: "Der Rechtstext wird auf Englisch bereitgestellt."
    }
  }
};

const saved = typeof localStorage !== "undefined" ? localStorage.getItem("locale") : null;
const locale = saved && messages[saved] ? saved : "tr";

const i18n = createI18n({
  legacy: true,
  locale,
  fallbackLocale: "tr",
  messages
});

if (typeof document !== "undefined") {
  document.documentElement.lang = locale;
}

export default i18n;
