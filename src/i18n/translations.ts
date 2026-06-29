import type { Locale } from "./config";

export type TopicKey = "event" | "franchise" | "press" | "other";

export type Translations = {
  common: {
    brand: string;
    skipLink: string;
    ctaQuote: string;
    ctaJoinFranchise: string;
    ctaBackHome: string;
    ctaContact: string;
    ctaDetails: string;
    ctaAllEvents: string;
    sending: string;
    send: string;
    formSuccess: string;
    formError: string;
    imagePlaceholder: string;
    navHomeAria: string;
    navOpen: string;
    navClose: string;
    navTagline: string;
    footerContact: string;
    footerFollow: string;
    footerLegal: string;
    sideTabOpen: string;
    sideTabLabel: string;
    sideTabClose: string;
    sideTabWrite: string;
    phone: string;
    email: string;
    address: string;
    name: string;
    message: string;
    topic: string;
    gdprConsent: string;
    topics: Record<TopicKey, string>;
    topicValues: Record<TopicKey, string>;
    nav: Record<string, string>;
    openOnMap: string;
  };
  home: {
    metaTitle: string;
    metaDescription: string;
    heroEyebrow: string;
    heroLead: string;
    ctaMenu: string;
    pillarsEyebrow: string;
    pillarsTitle: string;
    coffeeTitle: string;
    beerTitle: string;
    coffeeAlt: string;
    beerAlt: string;
    ctaFullMenu: string;
    aboutEyebrow: string;
    aboutTitle: string;
    aboutLead: string;
    ctaReadMore: string;
    team: { name: string; role: string; photoAlt: string }[];
    galleryStripEyebrow: string;
    galleryStripTitle: string;
    galleryCta: string;
  };
  rolunk: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    ctaEvent: string;
    foundersEyebrow: string;
    foundersTitle: string;
    teamPhotoAlt: string;
    ctaMenu: string;
    founders: { name: string; role: string; note: string; photoAlt: string }[];
  };
  kinalat: {
    metaTitle: string;
    metaDescription: string;
    heroTitle: string;
    heroLead: string;
    heroImageAlt: string;
    imagePlaceholder: string;
  };
  rendezvenyek: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    upcomingEyebrow: string;
    upcomingTitle: string;
    upcomingEmpty: string;
    typesEyebrow: string;
    halloweenAlt: string;
    faq: { question: string; answer: string }[];
  };
  galeria: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    placeholder: string;
    lightbox: string;
    lightboxClose: string;
    lightboxPrev: string;
    lightboxNext: string;
  };
  franchise: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    heroImageAlt: string;
    whyTitle: string;
    packageTitle: string;
    processTitle: string;
    stepsTitle: string;
    benefits: string[];
    packageItems: string[];
    steps: { n: string; t: string; d: string }[];
    faq: { question: string; answer: string }[];
    ctaInterest: string;
  };
  kontakt: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    lead: string;
    formTitle: string;
    imageAlt: string;
    gdprBefore: string;
    gdprLink: string;
    gdprAfter: string;
  };
  koszonjuk: {
    metaTitle: string;
    metaDescription: string;
    title: string;
    lead: string;
    sub: string;
  };
  notFound: {
    metaTitle: string;
    metaDescription: string;
    code: string;
    title: string;
    lead: string;
  };
  impresszum: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    provider: string;
    providerHeading: string;
    hosting: string;
    copyrightHeading: string;
    copyright: string;
    labels: Record<string, string>;
    providerValues: Record<string, string>;
    hostingValues: Record<string, string>;
  };
  adatvedelem: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    updated: string;
    sections: { heading: string; body: string }[];
  };
  carousel: {
    prev: string;
    next: string;
    slideStatus: string;
    imagePlaceholder: string;
  };
  upcoming: {
    empty: string;
    details: string;
    allEvents: string;
  };
};

const hu: Translations = {
  common: {
    brand: "Bean & Barrel",
    skipLink: "Ugrás a tartalomra",
    ctaQuote: "Ajánlatot kérek",
    ctaJoinFranchise: "Csatlakozni szeretnék",
    ctaBackHome: "Vissza a főoldalra",
    ctaContact: "Írj nekünk",
    ctaDetails: "Részletek",
    ctaAllEvents: "Összes kitelepülés",
    sending: "Küldés…",
    send: "Küldés",
    formSuccess: "Megkaptuk az üzeneted — hamarosan visszaírunk!",
    formError: "Valami hiba történt. Próbáld újra, vagy írj e-mailben.",
    imagePlaceholder: "Kép",
    navHomeAria: "Bean & Barrel főoldal",
    navOpen: "Menü megnyitása",
    navClose: "Menü bezárása",
    navTagline: "Kávé és SÖR — tuktukból",
    footerContact: "Kapcsolat",
    footerFollow: "Kövess minket",
    footerLegal: "Jogi",
    sideTabOpen: "Keress minket panel megnyitása",
    sideTabLabel: "Keress minket",
    sideTabClose: "Bezárás",
    sideTabWrite: "Írj nekünk",
    phone: "Telefon",
    email: "E-mail",
    address: "Cím",
    name: "Név",
    message: "Üzenet",
    topic: "Téma",
    gdprConsent:
      "Az adatkezelési tájékoztatót elolvastam, és hozzájárulok a megadott adataim kezeléséhez a kapcsolatfelvétel céljából.",
    topics: {
      event: "Rendezvény",
      franchise: "Franchise",
      press: "Sajtó",
      other: "Egyéb",
    },
    topicValues: {
      event: "Rendezvény",
      franchise: "Franchise",
      press: "Sajtó",
      other: "Egyéb",
    },
    nav: {
      home: "Főoldal",
      about: "Rólunk",
      menu: "Kínálat",
      events: "Rendezvények",
      gallery: "Galéria",
      franchise: "Franchise",
      contact: "Kontakt",
    },
    openOnMap: "Megnyitás térképen",
  },
  home: {
    metaTitle: "Bean & Barrel — Tuktuk kávézó | Kávé és Sör",
    metaDescription:
      "Bean & Barrel tuktuk kávézó (tuk tuk) Budapesten: specialty kávé és csapolt sör mozgó tuktukból. Kávé és Sör — rendezvény kitelepülés, franchise Magyarországon.",
    heroEyebrow: "KÁVÉ, SÖR ÉS EGYEBEK EGY TUKTUKBÓL",
    heroLead:
      "EGY MOZGÓ TUKTUK SPECIALTY KÁVÉVAL, CSAPOLT SÖRREL ÉS OLYAN VENDÉGLÁTÁSSAL, AMI FELDOBJA A HANGULATOT.",
    ctaMenu: "Nézd a kínálatot",
    pillarsEyebrow: "Kínálat",
    pillarsTitle: "Alappilléreink",
    coffeeTitle: "Specialty kávék",
    beerTitle: "Csapolt SÖRÖK",
    coffeeAlt: "Specialty kávé készül a Bean & Barrel pultjánál",
    beerAlt: "Csapolt sörök felülnézetből",
    ctaFullMenu: "Nézd meg teljes kínálatunkat",
    aboutEyebrow: "Rólunk",
    aboutTitle: "Három srác, egy tuktuk",
    aboutLead: "Ismerd meg a Bean & Barrel alapítóit és sztoriját!",
    ctaReadMore: "Elolvasom",
    team: [
      {
        name: "Soós Balázs",
        role: "Alapító - menedzsment",
        photoAlt: "Soós Balázs, a Bean & Barrel alapítója",
      },
      {
        name: "Warta Benedek",
        role: "Alapító - szakmai háttér",
        photoAlt: "Warta Benedek sört csapol a Bean & Barrel tuktuknál",
      },
      {
        name: "Váradi Donát",
        role: "Alapító – működtetés",
        photoAlt: "Váradi Donát, a Bean & Barrel alapítója",
      },
    ],
    galleryStripEyebrow: "Képgaléria",
    galleryStripTitle: "Pillanatok",
    galleryCta: "Galéria",
  },
  rolunk: {
    metaTitle: "Rólunk — Bean & Barrel tuktuk kávézó",
    metaDescription:
      "Ismerd meg a Bean & Barrel tuktuk kávézót: kávés-sörös ötletből lett mozgó tuktuk specialty kávéval és csapolt sörrel Budapesten.",
    eyebrow: "Rólunk",
    title: "Történetünk",
    lead:
      "Egy fáradt - nekünk még, másnak már korántsem - reggel, a kanapéról lefordulva a hűtőben csak SÖRt, a pulton csak kávét találtunk. A sztorinknak pedig itt indult az a bizonyos első fejezete...",
    ctaEvent: "Kérd a rendezvényedre",
    foundersEyebrow: "Alapítók",
    foundersTitle: "Akik mögötte állnak",
    teamPhotoAlt: "Bean & Barrel alapítók a tuktuk előtt",
    ctaMenu: "Nézd meg kínálatunkat!",
    founders: [
      {
        name: "Soós Balázs",
        role: "Alapító - menedzsment",
        note: "Én mindig is focista akartam lenni, de nem jött Össze, úgyhogy most itt vagyok.",
        photoAlt: "Soós Balázs, a Bean & Barrel alapítója",
      },
      {
        name: "Warta Benedek",
        role: "Alapító - szakmai háttér",
        note: "Azért nagyobb a képem, mint a többieknek, hogy végre én lehessek a magasabb.",
        photoAlt: "Warta Benedek sört csapol a Bean & Barrel tuktuknál",
      },
      {
        name: "Váradi Donát",
        role: "Alapító – működtetés",
        note: "Mielőtt csatlakoztam a srácokhoz, energiaitalt ittam reggelente. Most már SÖRözök.",
        photoAlt: "Váradi Donát, a Bean & Barrel alapítója",
      },
    ],
  },
  kinalat: {
    metaTitle: "Kínálat — Bean & Barrel",
    metaDescription:
      "Bean & Barrel kínálat mozgó tuktukon: specialty kávék, csapolt sörök, snackek és szezonális italok — kávés és sörös tuktuk.",
    heroTitle: "Egy tuktuk, négy világ",
    heroLead:
      "SPECIALTY KÁVÉ, CSAPOLT SÖR, SNACKEK ÉS SZEZONÁLIS ITALOK EGY MOZGÓ PULTBÓL.",
    heroImageAlt: "Bean & Barrel tuktuk kínálat",
    imagePlaceholder: "Kép —",
  },
  rendezvenyek: {
    metaTitle: "Tuktuk rendezvény Budapest | Bean & Barrel",
    metaDescription:
      "Mobil tuktuk (tuk tuk) bár rendezvényre Budapesten: esküvő, céges nap, fesztivál, kitelepülés. Mozgó vendéglátás Pest megyében is — kérj ajánlatot!",
    eyebrow: "Rendezvények",
    title: "Miért minket válassz?",
    upcomingEyebrow: "Aktuális kitelepülések",
    upcomingTitle: "Hol találkozhatunk?",
    upcomingEmpty: "Hamarosan új időpontok — addig is kérj minket egyedi rendezvényre.",
    typesEyebrow: "Tipikus rendezvények",
    halloweenAlt: "Halloween rendezvény Bean & Barrel tuktukkal",
    faq: [
      {
        question: "Mi az a tuktuk / tuk tuk bár a Bean & Barrelnél?",
        answer:
          "Egy háromkerekű tuktuk (tuk tuk) mobil bár specialty kávéval és csapolt sörrel — rendezvényre kitelepülve, közvetlenül a vendégeknek szolgál.",
      },
      {
        question: "Milyen rendezvényekre kitelepül a Bean & Barrel tuktuk?",
        answer:
          "Esküvőre, céges napra, fesztiválra, születésnapra, kerti partyra és egyéb magán- vagy üzleti alkalomra — a tuk tuk mobil bárként érkezik a helyszínre.",
      },
      {
        question: "Elérhetőek vagytok Budapesten és környékén?",
        answer:
          "Igen. Budapesten és Pest megyében is szívesen kitelepülünk; egyedi alkalomra más helyszínt is megbeszélünk.",
      },
      {
        question: "Mit kínál a tuktuk bár?",
        answer:
          "Specialty kávét, csapolt sört és snackeket készítünk és szolgálunk fel közvetlenül a vendégeknek a rendezvény helyszínén.",
      },
      {
        question: "Mennyire rugalmas a kitelepülés?",
        answer:
          "A tuktuk kis helyen is elfér, gyorsan beállítható, és alkalmazkodunk a rendezvény méretéhez, időtartamához és hangulatához.",
      },
      {
        question: "Hogyan kérek ajánlatot rendezvényre?",
        answer:
          "Töltsd ki a kapcsolatfelvételi űrlapot a Rendezvény témával: https://www.beanbarrel.coffee/kontakt?topic=Rendezvény#urlap",
      },
    ],
  },
  galeria: {
    metaTitle: "Galéria — Bean & Barrel tuktuk rendezvények",
    metaDescription:
      "Bean & Barrel galéria — tuktuk rendezvények, esküvők és kitelepülések Budapesten és környékén.",
    eyebrow: "Képek",
    title: "Galéria",
    placeholder: "Kép",
    lightbox: "Képnéző",
    lightboxClose: "Bezárás",
    lightboxPrev: "Előző",
    lightboxNext: "Következő",
  },
  franchise: {
    metaTitle: "Franchise partnerprogram | Bean & Barrel",
    metaDescription:
      "Bean & Barrel franchise Magyarországon: mozgó tuktuk partnerprogram, know-how, betanítás és támogatás. Jelentkezz franchise-partnernek!",
    eyebrow: "Franchise",
    title: "Kávézz, SÖRÖZZ velünk!",
    lead:
      "Az országban rengeteg helyen van szükség a Bean&Barrel-re. Irodák, sétálóutcák, rendezvények, lehetőségek tömkelege. Csatlakozz hozzánk, Magyarország jövendőbeli legnagyobb mozgó kávézó-SÖRÖZŐ hálózatához!",
    heroImageAlt: "Bean & Barrel tuktuk rendezvény közben",
    whyTitle: "Miért érdemes franchise-partnernek lenni?",
    packageTitle: "Mit kapsz?",
    processTitle: "Folyamat",
    stepsTitle: "A csatlakozás menete",
    benefits: [
      "Bejáratott brand és arculat – nem kell mindent a nulláról kitalálnod. Mi már megtettük. Rád csak annyi vár, hogy képviseld és élvezd minden velejáróját.",
      "Egyszerű modell – egy kis hely, kevés költség, kreatív koncepció, gyors megtérülés. Kávé, SÖR, pár minőségi snack – nincs túlbonyolítva.",
    ],
    packageItems: [
      "TELJES MÁRKACSOMAG",
      "MINDEN KNOW-HOW",
      "BARISTA ÉS CSAPOS BETANÍTÁS",
      "MARKETING ÉS KAMPÁNYSTRATÉGIA",
      "HOZZÁFÉRÉS A BESZÁLLÍTÓI HÁLÓZATHOZ",
      "FOLYAMATOS KAPCSOLATTARTÁS",
    ],
    steps: [
      { n: "01", t: "Jelentkezz", d: "Vedd fel velünk a kapcsolatot." },
      { n: "02", t: "Beszélgetünk", d: "Nem interjú, inkább egy laza kávé/SÖR mellett (termékteszt)." },
      { n: "03", t: "Megmutatjuk a modellt", d: "Számokkal, képekkel, tuktukkal." },
      { n: "04", t: "Üdv a csapatban", d: "Tuktuk beizzítva, sztori indul." },
    ],
    faq: [
      {
        question: "Ki lehet Bean & Barrel franchise-partner?",
        answer:
          "Olyan vállalkozó vagy csapat, aki szeretne egy bejáratott mozgó tuktuk (tuk tuk) specialty kávé és sör koncepciót képviselni Magyarországon, és nyitott a közös munkára velünk.",
      },
      {
        question: "Mennyi a franchise befektetés?",
        answer:
          "A pontos összeg a helyszíntől és a modelltől függ. Az első beszélgetés után átlátható számokkal mutatjuk meg a lehetőségeket.",
      },
      {
        question: "Milyen támogatást kapok induláskor?",
        answer:
          "Teljes márkacsomagot, know-how-t, barista és csapos betanítást, marketing irányt, beszállítói hozzáférést és folyamatos kapcsolattartást.",
      },
      {
        question: "Hol működhet egy franchise egység?",
        answer:
          "Irodaházak, sétálóutcák, rendezvények és egyéb forgalmas helyszínek mellett — Magyarországon, ahol van kereslet a mozgó specialty kávé és csapolt sör élményre.",
      },
      {
        question: "Hogyan jelentkezek franchise-partnernek?",
        answer:
          "Töltsd ki a kapcsolatfelvételi űrlapot a Franchise témával, és hamarosan felvesszük veled a kapcsolatot.",
      },
    ],
    ctaInterest: "Érdekel a franchise",
  },
  kontakt: {
    metaTitle: "Kontakt — Bean & Barrel",
    metaDescription:
      "Vedd fel a kapcsolatot a Bean & Barrel csapatával tuktuk rendezvényre, franchise-ra, sajtómegkeresésre vagy egyedi kérdésre.",
    eyebrow: "Kontakt",
    title: "Üzenj nekünk",
    lead:
      "Rendezvény, franchise, sajtó vagy csak egy kérdés — itt megtalálsz minket.",
    formTitle: "Írj nekünk",
    imageAlt: "Bean & Barrel tuktuk pult",
    gdprBefore: "Elolvastam és elfogadom az ",
    gdprLink: "Adatkezelési tájékoztatót",
    gdprAfter:
      ", és hozzájárulok, hogy a megadott adataimat a megkeresésem megválaszolása céljából kezeljétek.",
  },
  koszonjuk: {
    metaTitle: "Köszönjük — Bean & Barrel",
    metaDescription: "Köszönjük, megkaptuk a Bean & Barrel kapcsolatfelvételi üzenetedet.",
    title: "Köszönjük",
    lead: "Megkaptuk az üzeneted",
    sub: "Hamarosan jelentkezünk e-mailben. Addig is — kísérd a tuktukot.",
  },
  notFound: {
    metaTitle: "Az oldal nem található — Bean & Barrel",
    metaDescription: "A keresett Bean & Barrel oldal nem található.",
    code: "404",
    title: "Elveszett a tuktuk?",
    lead: "Ez az oldal nem létezik — vagy elköltözött, ahogy mi is szokunk.",
  },
  impresszum: {
    metaTitle: "Impresszum — Bean & Barrel",
    metaDescription: "Bean & Barrel — Impresszum, üzemeltetői és tárhelyszolgáltatói adatok.",
    eyebrow: "Jogi",
    title: "Impresszum",
    provider: "Szolgáltató",
    providerHeading: "Szolgáltató (üzemeltető)",
    hosting: "Tárhelyszolgáltató",
    copyrightHeading: "Szerzői jogok",
    copyright:
      "A weboldalon közzétett tartalmak (szövegek, képek, grafikai elemek, márkanév és logó) a Bean & Barrel (Kávé Sláger Kft.) szellemi tulajdonát képezik. Felhasználásuk — másolás, terjesztés, módosítás — kizárólag az üzemeltető előzetes, írásbeli engedélyével lehetséges.",
    labels: {
      company: "Cégnév",
      seat: "Székhely",
      tax: "Adószám",
      reg: "Cégjegyzékszám",
      rep: "Képviselő",
      email: "E-mail",
      phone: "Telefon",
      name: "Név",
      address: "Cím",
      website: "Weboldal",
    },
    providerValues: {
      company: "Kávé Sláger Kft.",
      seat: "7661 Kékesd, Fő utca 3.",
      tax: "33056814-2-02",
      reg: "02-09-089634",
      rep: "Soós Balázs, Warta Benedek, Váradi Donát",
      email: "info@beanbarrel.coffee",
      phone: "+36 20 246 9775",
    },
    hostingValues: {
      name: "Vercel Inc.",
      address: "340 S Lemon Ave #4133, Walnut, CA 91789, USA",
      email: "privacy@vercel.com",
      website: "https://vercel.com",
    },
  },
  adatvedelem: {
    metaTitle: "Adatkezelési tájékoztató — Bean & Barrel",
    metaDescription: "Bean & Barrel adatkezelési tájékoztató — kapcsolatfelvételi űrlap, GDPR.",
    eyebrow: "Jogi",
    title: "Adatkezelési tájékoztató",
    updated: "Utolsó frissítés: 2026-06-15",
    sections: [],
  },
  carousel: {
    prev: "Előző dia",
    next: "Következő dia",
    slideStatus: "dia",
    imagePlaceholder: "Kép —",
  },
  upcoming: {
    empty: "Hamarosan új időpontok — kövess minket vagy kérj egyedi alkalmat.",
    details: "Részletek",
    allEvents: "Összes kitelepülés",
  },
};

const en: Translations = {
  common: {
    brand: "Bean & Barrel",
    skipLink: "Skip to content",
    ctaQuote: "Request a quote",
    ctaJoinFranchise: "I want to join",
    ctaBackHome: "Back to homepage",
    ctaContact: "Contact us",
    ctaDetails: "Details",
    ctaAllEvents: "All pop-ups",
    sending: "Sending…",
    send: "Send",
    formSuccess: "We got your message — we'll get back to you soon!",
    formError: "Something went wrong. Please try again or email us.",
    imagePlaceholder: "Image",
    navHomeAria: "Bean & Barrel homepage",
    navOpen: "Open menu",
    navClose: "Close menu",
    navTagline: "Coffee & beer — from a tuktuk",
    footerContact: "Contact",
    footerFollow: "Follow us",
    footerLegal: "Legal",
    sideTabOpen: "Open contact panel",
    sideTabLabel: "Contact us",
    sideTabClose: "Close",
    sideTabWrite: "Write to us",
    phone: "Phone",
    email: "Email",
    address: "Address",
    name: "Name",
    message: "Message",
    topic: "Topic",
    gdprConsent:
      "I have read the privacy policy and consent to the processing of my data for contact purposes.",
    topics: {
      event: "Event",
      franchise: "Franchise",
      press: "Press",
      other: "Other",
    },
    topicValues: {
      event: "Event",
      franchise: "Franchise",
      press: "Press",
      other: "Other",
    },
    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      events: "Events",
      gallery: "Gallery",
      franchise: "Franchise",
      contact: "Contact",
    },
    openOnMap: "Open in maps",
  },
  home: {
    metaTitle: "Bean & Barrel — Tuktuk café | Coffee & Beer",
    metaDescription:
      "Bean & Barrel tuktuk café (tuk tuk) in Budapest: specialty coffee and draft beer from a mobile tuktuk. Coffee & Beer — event catering and franchise across Hungary.",
    heroEyebrow: "COFFEE, BEER & MORE FROM A TUKTUK",
    heroLead:
      "A MOBILE TUKTUK WITH SPECIALTY COFFEE, DRAFT BEER AND HOSPITALITY THAT LIFTS THE MOOD.",
    ctaMenu: "See the menu",
    pillarsEyebrow: "Menu",
    pillarsTitle: "Our pillars",
    coffeeTitle: "Specialty coffees",
    beerTitle: "Draft beers",
    coffeeAlt: "Specialty coffee being prepared at the Bean & Barrel bar",
    beerAlt: "Draft beers from above",
    ctaFullMenu: "See our full menu",
    aboutEyebrow: "About",
    aboutTitle: "Three guys, one tuktuk",
    aboutLead: "Meet the Bean & Barrel founders and our story!",
    ctaReadMore: "Read more",
    team: [
      {
        name: "Soós Balázs",
        role: "Founder — management",
        photoAlt: "Soós Balázs, co-founder of Bean & Barrel",
      },
      {
        name: "Warta Benedek",
        role: "Founder — craft",
        photoAlt: "Warta Benedek pouring beer at the Bean & Barrel tuktuk",
      },
      {
        name: "Váradi Donát",
        role: "Founder — operations",
        photoAlt: "Váradi Donát, co-founder of Bean & Barrel",
      },
    ],
    galleryStripEyebrow: "Photo gallery",
    galleryStripTitle: "Moments",
    galleryCta: "Gallery",
  },
  rolunk: {
    metaTitle: "About — Bean & Barrel tuktuk café",
    metaDescription:
      "Meet Bean & Barrel: a coffee-and-beer idea turned into a mobile tuktuk with specialty coffee and draft beer in Budapest.",
    eyebrow: "About",
    title: "Our story",
    lead:
      "One tired morning — still tired for us, not so much for others — rolling off the couch, we found only beer in the fridge and only coffee on the counter. That's where the first chapter of our story began...",
    ctaEvent: "Book us for your event",
    foundersEyebrow: "Founders",
    foundersTitle: "The people behind it",
    teamPhotoAlt: "Bean & Barrel founders in front of the tuktuk",
    ctaMenu: "See our menu!",
    founders: [
      {
        name: "Soós Balázs",
        role: "Founder — management",
        note: "I always wanted to be a footballer. That didn't work out, so here I am.",
        photoAlt: "Soós Balázs, co-founder of Bean & Barrel",
      },
      {
        name: "Warta Benedek",
        role: "Founder — craft",
        note: "My photo is bigger than the others' so I can finally be the tall one.",
        photoAlt: "Warta Benedek pouring beer at the Bean & Barrel tuktuk",
      },
      {
        name: "Váradi Donát",
        role: "Founder — operations",
        note: "Before joining the guys I drank energy drinks every morning. Now I drink beer.",
        photoAlt: "Váradi Donát, co-founder of Bean & Barrel",
      },
    ],
  },
  kinalat: {
    metaTitle: "Menu — Bean & Barrel",
    metaDescription:
      "Bean & Barrel menu on a mobile tuktuk: specialty coffees, draft beers, snacks and seasonal drinks.",
    heroTitle: "One tuktuk, four worlds",
    heroLead:
      "SPECIALTY COFFEE, DRAFT BEER, SNACKS AND SEASONAL DRINKS FROM A MOBILE BAR.",
    heroImageAlt: "Bean & Barrel tuktuk menu",
    imagePlaceholder: "Image —",
  },
  rendezvenyek: {
    metaTitle: "Tuktuk events Budapest | Bean & Barrel",
    metaDescription:
      "Mobile tuktuk (tuk tuk) bar for events in Budapest: weddings, corporate days, festivals and pop-ups. Mobile catering in Pest county too — request a quote!",
    eyebrow: "Events",
    title: "Why choose us?",
    upcomingEyebrow: "Upcoming pop-ups",
    upcomingTitle: "Where to find us",
    upcomingEmpty: "New dates coming soon — in the meantime, book us for a custom event.",
    typesEyebrow: "Typical events",
    halloweenAlt: "Halloween event with Bean & Barrel tuktuk",
    faq: [
      {
        question: "What is a tuktuk / tuk tuk bar at Bean & Barrel?",
        answer:
          "A three-wheeled tuktuk (tuk tuk) mobile bar with specialty coffee and draft beer — we roll up to your event and serve guests on site.",
      },
      {
        question: "What events do you cater?",
        answer:
          "Weddings, corporate days, festivals, birthdays, garden parties and other private or business occasions — the tuk tuk arrives as a mobile bar.",
      },
      {
        question: "Are you available in Budapest and nearby?",
        answer:
          "Yes. We're happy to pop up in Budapest and Pest county; for special occasions we can discuss other locations too.",
      },
      {
        question: "What does the tuktuk bar offer?",
        answer:
          "We prepare and serve specialty coffee, draft beer and snacks directly to guests at the event venue.",
      },
      {
        question: "How flexible is a pop-up?",
        answer:
          "The tuktuk fits in tight spaces, sets up quickly, and we adapt to your event's size, duration and vibe.",
      },
      {
        question: "How do I request a quote for an event?",
        answer:
          "Fill in the contact form with the Event topic: https://www.beanbarrel.coffee/en/kontakt?topic=Event#urlap",
      },
    ],
  },
  galeria: {
    metaTitle: "Gallery — Bean & Barrel tuktuk events",
    metaDescription:
      "Bean & Barrel gallery — tuktuk events, weddings and pop-ups in Budapest and beyond.",
    eyebrow: "Photos",
    title: "Gallery",
    placeholder: "Image",
    lightbox: "Image viewer",
    lightboxClose: "Close",
    lightboxPrev: "Previous",
    lightboxNext: "Next",
  },
  franchise: {
    metaTitle: "Franchise programme | Bean & Barrel",
    metaDescription:
      "Bean & Barrel franchise in Hungary: mobile tuktuk partner programme, know-how, training and support. Apply to become a franchise partner!",
    eyebrow: "Franchise",
    title: "Coffee, beer — with us!",
    lead:
      "There's demand for Bean&Barrel all over the country. Offices, pedestrian streets, events — endless opportunities. Join us and become part of Hungary's future largest mobile coffee-and-beer network!",
    heroImageAlt: "Bean & Barrel tuktuk at an event",
    whyTitle: "Why become a franchise partner?",
    packageTitle: "What you get",
    processTitle: "Process",
    stepsTitle: "How to join",
    benefits: [
      "Established brand and identity — you don't have to invent everything from scratch. We've done the hard part. You represent it and enjoy the ride.",
      "Simple model — small footprint, low overhead, creative concept, fast payback. Coffee, beer, a few quality snacks — no overcomplication.",
    ],
    packageItems: [
      "FULL BRAND PACKAGE",
      "ALL KNOW-HOW",
      "BARISTA & BARTENDER TRAINING",
      "MARKETING & CAMPAIGN STRATEGY",
      "SUPPLIER NETWORK ACCESS",
      "ONGOING SUPPORT",
    ],
    steps: [
      { n: "01", t: "Apply", d: "Get in touch with us." },
      { n: "02", t: "Let's talk", d: "Not an interview — more like a casual coffee/beer (product test)." },
      { n: "03", t: "We show the model", d: "Numbers, pictures, tuktuk." },
      { n: "04", t: "Welcome aboard", d: "Tuktuk warmed up, story begins." },
    ],
    faq: [
      {
        question: "Who can become a Bean & Barrel franchise partner?",
        answer:
          "An entrepreneur or team who wants to represent an established mobile tuktuk (tuk tuk) specialty coffee and beer concept in Hungary and is open to working with us.",
      },
      {
        question: "How much is the franchise investment?",
        answer:
          "The exact amount depends on location and model. After an initial chat we'll show you clear numbers.",
      },
      {
        question: "What support do I get at launch?",
        answer:
          "Full brand package, know-how, barista and bartender training, marketing direction, supplier access and ongoing contact.",
      },
      {
        question: "Where can a franchise unit operate?",
        answer:
          "Office buildings, pedestrian streets, events and other busy spots — anywhere in Hungary there's demand for mobile specialty coffee and draft beer.",
      },
      {
        question: "How do I apply as a franchise partner?",
        answer:
          "Fill in the contact form with the Franchise topic and we'll get back to you soon.",
      },
    ],
    ctaInterest: "Interested in franchise",
  },
  kontakt: {
    metaTitle: "Contact — Bean & Barrel",
    metaDescription:
      "Contact the Bean & Barrel team for tuktuk events, franchise, press enquiries or any question.",
    eyebrow: "Contact",
    title: "Message us",
    lead: "Events, franchise, press or just a question — you'll find us here.",
    formTitle: "Write to us",
    imageAlt: "Bean & Barrel tuktuk bar",
    gdprBefore: "I have read and accept the ",
    gdprLink: "privacy policy",
    gdprAfter: ", and consent to the processing of my data to respond to my enquiry.",
  },
  koszonjuk: {
    metaTitle: "Thank you — Bean & Barrel",
    metaDescription: "Thank you — we received your Bean & Barrel contact message.",
    title: "Thank you",
    lead: "We received your message",
    sub: "We'll email you soon. In the meantime — follow the tuktuk.",
  },
  notFound: {
    metaTitle: "Page not found — Bean & Barrel",
    metaDescription: "The Bean & Barrel page you requested was not found.",
    code: "404",
    title: "Lost the tuktuk?",
    lead: "This page doesn't exist — or it moved, like we often do.",
  },
  impresszum: {
    metaTitle: "Legal notice — Bean & Barrel",
    metaDescription: "Bean & Barrel — legal notice, operator and hosting provider details.",
    eyebrow: "Legal",
    title: "Legal notice",
    provider: "Service provider",
    providerHeading: "Service provider (operator)",
    hosting: "Hosting provider",
    copyrightHeading: "Copyright",
    copyright:
      "Content published on this website (texts, images, graphics, brand name and logo) is the intellectual property of Bean & Barrel (Kávé Sláger Kft.). Use — copying, distribution, modification — is only permitted with the operator's prior written consent.",
    labels: {
      company: "Company name",
      seat: "Registered office",
      tax: "Tax number",
      reg: "Company registration",
      rep: "Representative",
      email: "Email",
      phone: "Phone",
      name: "Name",
      address: "Address",
      website: "Website",
    },
    providerValues: {
      company: "Kávé Sláger Kft.",
      seat: "7661 Kékesd, Fő utca 3., Hungary",
      tax: "33056814-2-02",
      reg: "02-09-089634",
      rep: "Soós Balázs, Warta Benedek, Váradi Donát",
      email: "info@beanbarrel.coffee",
      phone: "+36 20 246 9775",
    },
    hostingValues: {
      name: "Vercel Inc.",
      address: "340 S Lemon Ave #4133, Walnut, CA 91789, USA",
      email: "privacy@vercel.com",
      website: "https://vercel.com",
    },
  },
  adatvedelem: {
    metaTitle: "Privacy policy — Bean & Barrel",
    metaDescription: "Bean & Barrel privacy policy — contact form, GDPR.",
    eyebrow: "Legal",
    title: "Privacy policy",
    updated: "Last updated: 15 June 2026",
    sections: [],
  },
  carousel: {
    prev: "Previous slide",
    next: "Next slide",
    slideStatus: "slide",
    imagePlaceholder: "Image —",
  },
  upcoming: {
    empty: "New dates coming soon — follow us or request a custom pop-up.",
    details: "Details",
    allEvents: "All pop-ups",
  },
};

const catalogs: Record<Locale, Translations> = { hu, en };

export function useTranslations(locale: Locale): Translations {
  return catalogs[locale] ?? catalogs.hu;
}

export function pickLocalized(
  locale: Locale,
  hu: string | undefined,
  en?: string | undefined,
): string {
  if (locale === "en" && en?.trim()) return en.trim();
  return hu?.trim() ?? "";
}
