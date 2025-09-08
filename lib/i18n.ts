"use client"

import { useMemo } from "react"
import { useParams } from "next/navigation"

export type Locale = "en" | "de"

export function useLocale(): Locale {
  const params = useParams() as { lang?: string }
  const langParam = (params?.lang || "en").toLowerCase()
  return (langParam === "de" ? "de" : "en") as Locale
}

type Dictionary = ReturnType<typeof buildDictionary>

function buildDictionary(locale: Locale) {
  if (locale === "de") {
    return {
      ui: {
        imprint: "Impressum",
        privacyPolicy: "Datenschutzerklärung",
        cookieSettings: "Cookie-Einstellungen",
      },
      cookies: {
        title: "Cookies",
        description:
          "Wir verwenden notwendige Cookies für den Betrieb dieser Seite. Mit Ihrer Erlaubnis nutzen wir außerdem datenschutzfreundliche Analysen, um sie zu verbessern. Ihre Auswahl können Sie jederzeit über Cookie-Einstellungen ändern.",
        learnMorePrefix: "Mehr erfahren in unserer",
        learnMore: "Datenschutzerklärung",
        reject: "Ablehnen",
        accept: "Akzeptieren",
      },
      problem: {
        badge: "DAS PROBLEM",
        titlePrefix: "B2B E‑Commerce ist geprägt von",
        titleHighlight: " erheblichen Reibungen",
        titleSuffix: "",
        lead:
          "Es ist sowohl für Einkäufer als auch für Lieferanten mühsam, einander zu finden und neue Geschäftsbeziehungen aufzubauen.",
        cards: [
          {
            title: "Kreditrisiko",
            description:
              "B2B Einkäufer bevorzugen den Kauf auf Rechnung zur Entlastung des Cashflows und verlagern damit das Kreditrisiko hoher Rechnungen auf die Lieferanten.",
          },
          {
            title: "Komplexes Onboarding",
            description:
              "Um Risiken zu minimieren, setzen Lieferanten auf ein zeitaufwendiges und anspruchsvolles Onboarding – potenzielle Partnerschaften scheitern oft schon vor dem Start.",
          },
          {
            title: "Aufwendige Synchronisierung",
            description:
              "Auch nach dem Onboarding bleibt es mühsam für B2B Einkäufer: Konto‑ und Bestelldaten müssen laufend mit den eigenen Systemen synchronisiert werden – manuell oder durch eine teure Einmal‑Integration.",
          },
        ],
        resultLead: "Das Ergebnis?",
        resultBody:
          "Was eigentlich einfaches Neugeschäft sein sollte, wird zur teuren, zeitaufwendigen Hürde – und begrenzt das Wachstumspotenzial allerseits.",
      },
      solution: {
        badge: "UNSERE LÖSUNG",
        titlePrefix: "Ein Account, ",
        titleHighlight: "viele Shops",
        lead:
          "b4b beseitigt technische und kommerzielle Hürden zwischen B2B‑Einkäufern und B2B‑Lieferanten, damit sie sich auf das Wachstum ihres Kerngeschäfts fokussieren können.",
        cards: [
          {
            tag: "Vertrauen",
            title: "Sofortiges Onboarding",
            description:
              "Wir geben B2B‑Einkäufern vertrauenswürdige digitale Identitäten. So können sie sich mit einem Klick bei allen B2B‑Shops anmelden, die b4b als Identity‑Provider anerkennen – ähnlich wie Social Logins im B2C. Beim ersten Anmelden bei einem teilnehmenden Shop teilen wir relevante Kontodetails für eine sofortige Registrierung.",
          },
          {
            tag: "Verkaufen",
            title: "Sofortige Kreditlinien",
            description:
              "Beim ersten Anmelden stellen wir dem B2B‑Einkäufer eine sofortige, lieferantenspezifische Kreditlinie bereit. Dadurch sind sofortige, versandbereite Bestellungen möglich – ohne Risiko für Lieferanten dank unserer exklusiven Versicherungslösungen.",
          },
          {
            tag: "Verbinden",
            title: "Sofortige Synchronisierung",
            description:
              "Einmal integrieren, immer profitieren: b4b verbindet als Bindeglied beide Seiten über Standard‑Integrationen und eine Translation‑Engine, die alle relevanten Datenpunkte zwischen Beschaffungssystemen und Shop‑Systemen abgleicht.",
          },
        ],
        wallet: {
          heading: "So treten Sie dem <span class=\"text-accent\">b4b Netzwerk</span> bei",
          toggleSuppliers: "Für Lieferanten",
          toggleBuyers: "Für Einkäufer",
          suppliers: {
            steps: [
              {
                step: "1",
                title: "Kontakt aufnehmen",
                description:
                  "Wir geben Ihnen einen Überblick über unser Ökosystem und richten für Sie eine exklusive Warenkreditversicherung ein, die Sie und das Netzwerk vor Ausfallrisiken schützt. Sie zahlen nur für tatsächlich über b4b generierte Bestellungen.",
              },
              {
                step: "2",
                title: "Shop verbinden",
                description:
                  "Verbinden Sie Ihren Shop mit unserer Plattform, damit wir verifizierte Unternehmens‑ und Nutzeridentitäten, gedeckte Kreditlinien und Bestelldaten austauschen können. Einmal integrieren, immer profitoeren – wir übernehmen das Mapping zu den Beschaffungslösungen unserer Einkäufer.",
              },
              {
                step: "3",
                title: "Neue Kunden gewinnen",
                description:
                  "Platzieren Sie auf Ihrer Login‑Seite ‘Mit b4b anmelden’. B2B‑Einkäufer können sich dann sofort anmelden. Beim ersten Login erhalten Sie alle Daten inklusive gedeckter Kreditlinie, um sofortige, versandbereite Bestellungen zu ermöglichen.",
              },
            ],
            footer:
              "Als Lieferant beitreten und sofort verifizierte B2B‑Einkäufer erreichen",
          },
          buyers: {
            steps: [
              {
                step: "1",
                title: "b4b‑Konto erstellen",
                description:
                  "Wir verifizieren Ihr Unternehmen, Ihre persönlichen Angaben und Ihre Vertretungsberechtigung. Das dauert weniger als 10 Minuten. Anschließend können Sie Kolleginnen und Kollegen hinzufügen und Rollen & Rechte verwalten.",
              },
              {
                step: "2",
                title: "Einkauf starten",
                description:
                  "Mit Ihrem b4b‑Konto können Sie sich nahtlos bei allen teilnehmenden B2B‑Shops anmelden. Beim ersten Login teilen wir die relevanten Kontodaten und richten eine exklusive Kreditlinie beim jeweiligen Lieferanten ein – Kauf auf Rechnung sofort möglich.",
              },
              {
                step: "3",
                title: "Eine zentrale Drehscheibe, viele Verbindungen",
                description:
                  "Im b4b‑Dashboard behalten Sie alle Bestellungen im Überblick. Aktualisieren Sie Ihre Stammdaten, informieren wir automatisch alle verbundenen B2B‑Shops – Ihre Daten bleiben überall konsistent.",
              },
            ],
            footer:
              "Als Einkäufer beitreten und mit sofortigen Kreditlinien bei vertrauenswürdigen Lieferanten einkaufen",
          },
        },
      },
      hero: {
        titlePrefix: "Social Login,",
        titleMiddle: "",
        titleHighlight: "gebaut für B2B",
        lead:
          "In Online‑Shops ganz einfach mit dem Google oder Apple Konto anmelden? Wir bringen dieses beliebte B2C‑Erlebnis in die B2B-Welt – zugeschnitten auf die speziellen Anforderungen des B2B‑E‑Commerce.",
        emailPlaceholder: "Ihre E‑Mail‑Adresse",
        emailAria: "Ihre E‑Mail‑Adresse",
        invalidEmail: "Bitte geben Sie eine gültige E‑Mail‑Adresse ein.",
        submitSubmitting: "Wird gesendet…",
        submitJoin: "Zur Warteliste anmelden",
        submitThanks: "Danke!",
        launchingNote:
          "Start in Deutschland 2026 – Up-to-date bleiben und frühzeitigen Zugang sichern!",
        preview: {
          signInToAccount: "In Ihrem Konto anmelden",
          email: "E‑Mail",
          password: "Passwort",
          signIn: "Anmelden",
          or: "oder",
          signInWith: "Anmelden mit",
          why: "Warum?",
        },
        benefits: {
          instantOnboarding: "Sofortiges Onboarding",
          instantCreditLine: "Sofortige Kreditlinie",
          instantOrders: "Sofortige Bestellungen",
          zeroRisk: "Kein Risiko",
        },
        errors: {
          generic: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
        },
        legal: {
          imprint: "Impressum",
          privacyPolicy: "Datenschutzerklärung",
          cookieSettings: "Cookies",
          modalTitles: {
            imprint: "Impressum",
            privacy: "Datenschutzerklärung",
          },
          imprintContent: {
            serviceProvider: "Diensteanbieter",
            representedBy: "Vertreten durch",
            contact: "Kontakt",
            company: {
              name: "b4b ID UG",
              street: "Leuthener Straße 13",
              city: "10829 Berlin, Deutschland",
              managingDirector: "Ozan Kücük (Geschäftsführer)",
              email: "info@b4b.network",
            },
          },
          privacyContent: {
            lastUpdatedPrefix: "Zuletzt aktualisiert:",
            intro:
              "Diese Datenschutzerklärung erläutert, wie wir personenbezogene Daten verarbeiten, wenn Sie sich für unsere Warteliste anmelden und diese Website nutzen.",
            controller:
              "Verantwortlicher: b4b ID UG, Leuthener Straße 13, 10829 Berlin, Deutschland. E‑Mail: privacy@b4b.network",
            dataWeProcess:
              "Daten, die wir für die Warteliste verarbeiten: Ihre E‑Mail‑Adresse (erforderlich), die Formularquelle (z. B. Bereich der Seite), sowie automatisch übermittelte Informationen wie Browser‑User‑Agent und IP‑Adresse.",
            purposes:
              "Zwecke: • Registrierung und Verwaltung Ihres Wartelisteneintrags sowie Versand entsprechender Updates; • Missbrauchsvermeidung und Gewährleistung der Sicherheit des Dienstes (Rate‑Limiting, Betrugsprävention).",
            legalBases:
              "Rechtsgrundlagen: • Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) für den Versand von Wartelisten‑Updates; • Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen) für die Verarbeitung von User‑Agent/IP zum Schutz unseres Dienstes.",
            recipients:
              "Empfänger/Auftragsverarbeiter: Wir nutzen Supabase (Supabase, Inc.) für das Hosting unserer Datenbank und zum Aufruf einer Edge‑Funktion für Bestätigungs‑E‑Mails. Außerdem verwenden wir Vercel Analytics und Vercel Speed Insights zur datenschutzfreundlichen Messung von Performance, Nutzung und Core Web Vitals ohne Cookies oder Sammlung personenbezogener Daten. Soweit einschlägig, handeln diese Anbieter als Auftragsverarbeiter gemäß Art. 28 DSGVO.",
            transfers:
              "Datenübermittlungen: Je nach Standort der Dienste können Daten außerhalb der EU/EWR verarbeitet werden. Dabei stützen wir uns auf geeignete Garantien (z. B. EU‑Standardvertragsklauseln gemäß Art. 46 DSGVO).",
            retention:
              "Speicherdauer: Ihre E‑Mail‑Adresse speichern wir bis zum Widerruf Ihrer Einwilligung oder bis zum Ende des Wartelisten‑Projekts – je nachdem, was zuerst eintritt.",
            rights:
              "Ihre Rechte: Sie haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit sowie Widerspruch. Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.",
            withdrawal:
              "Widerruf/Kontakt: Sie können Ihre Einwilligung zur Warteliste durch Kontaktaufnahme unter privacy@b4b.network widerrufen. Wir stellen dann den Versand von Updates ein und löschen Ihre E‑Mail‑Adresse, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
            complaint:
              "Beschwerderecht: Sie können sich bei Ihrer zuständigen Aufsichtsbehörde beschweren, z. B. bei der Berliner Beauftragten für Datenschutz und Informationsfreiheit.",
            minors:
              "Minderjährige: Unsere Warteliste richtet sich an Personen ab 16 Jahren.",
          },
        },
      },
      seo: {
        title: "b4b - Social Login für B2B-E-Commerce",
        description: "Bringen Sie die Social Logins Experience in den B2B-E-Commerce. Sofortiges Onboarding, Kreditlinien und Bestellungen ohne Risiko. Start in Deutschland 2026.",
        keywords: "B2B Social Login, Business-Authentifizierung, B2B-E-Commerce, Social Sign-in, Business-Login-Lösungen",
        ogTitle: "b4b - Social Login für B2B-E-Commerce",
        ogDescription: "Bringen Sie reibungslose Social Logins in den B2B-E-Commerce. Melden Sie sich für unsere Warteliste an und erhalten Sie frühzeitigen Zugang.",
        twitterTitle: "b4b - Social Login für B2B-E-Commerce",
        twitterDescription: "Bringen Sie reibungslose Social Logins in den B2B-E-Commerce. Melden Sie sich für unsere Warteliste an und erhalten Sie frühzeitigen Zugang.",
      },
    }
  }
  // Default: en
  return {
    ui: {
      imprint: "Imprint",
      privacyPolicy: "Privacy policy",
      cookieSettings: "Cookie Settings",
    },
    cookies: {
      title: "Cookies",
      description:
        "We use essential cookies to run this site. With your permission, we also use privacy‑friendly analytics to improve it. You can change your choice anytime via Cookie settings.",
      learnMorePrefix: "Learn more in our",
      learnMore: "Privacy policy",
      reject: "Reject",
      accept: "Accept",
    },
    problem: {
      badge: "THE PROBLEM",
      titlePrefix: "B2B e‑commerce faces",
      titleHighlight: " significant friction",
      titleSuffix: " today",
      lead:
        "It is very cumbersome for buyers and suppliers alike to discover one another and build new trade relations.",
      cards: [
        {
          title: "Credit Risk Burden",
          description:
            "Buyers prefer deferred terms to ease cash flow, shifting large-invoice credit risk to suppliers.",
        },
        {
          title: "Complex Onboarding",
          description:
            "To stay safe, suppliers impose a time-consuming and demanding onboarding process, discouraging potential partnerships before they even start.",
        },
        {
          title: "Tedious Synchronization",
          description:
            "After onboarding, the buyer experience remains tedious: account and order data must constantly be synchronized with their procurement suite, either manually or with a costly one-off integration.",
        },
      ],
      resultLead: "The result?",
      resultBody:
        "What should be simple business discovery becomes an expensive, time-consuming barrier that limits growth potential for both buyers and suppliers.",
    },
    solution: {
      badge: "OUR SOLUTION",
      titlePrefix: "One account, ",
      titleHighlight: "many shops",
      lead:
        "b4b removes technical and commercial barriers between B2B buyers and suppliers so they can find each other, build trusted partnerships, and seamlessly exchange value in a digital world.",
      cards: [
        {
          tag: "Trust",
          title: "Instant Onboarding",
          description:
            "We issue trusted digital identities to B2B buyers so they can access all B2B online shops that recognize b4b as an Identity Provider — with one click, much like social logins in B2C. On first sign‑in to a participating shop, we share relevant account details for instant account creation.",
        },
        {
          tag: "Transaction",
          title: "Instant Credit Lines",
          description:
            "On first sign‑in, we issue a supplier‑specific instant credit line to the B2B buyer. This enables immediate shipping orders with zero risk for suppliers thanks to exclusive insurance arrangements.",
        },
        {
          tag: "Transformation",
          title: "Instant Synchronization",
          description:
            "Integrate once and for all: b4b acts as connective tissue via standard integrations and a translation engine that maps all data points between buyer procurement systems and supplier storefronts.",
        },
      ],
      wallet: {
        heading: "How to join the <span class=\"text-accent\">b4b network</span>",
        toggleSuppliers: "For Suppliers",
        toggleBuyers: "For Buyers",
        suppliers: {
          steps: [
            {
              step: "1",
              title: "Reach out to us",
              description:
                "We’ll walk you through our ecosystem and set you up with an exclusive trade credit insurance arrangement to protect you and the network. You only pay for orders actually generated via the b4b network.",
            },
            {
              step: "2",
              title: "Connect your store",
              description:
                "Connect your store to our platform so we can exchange verified business and user identities, covered credit lines, and order information. Integrate once — we’ll handle the mapping to buyers’ procurement suites.",
            },
            {
              step: "3",
              title: "Start onboarding new customers",
              description:
                "Place ‘Sign in with b4b’ on your login page. When a buyer signs in for the first time, you receive all relevant data plus a covered credit limit to enable instant shipping orders.",
            },
          ],
          footer:
            "Join as a supplier and reach verified B2B buyers instantly",
        },
        buyers: {
          steps: [
            {
              step: "1",
              title: "Create b4b account",
              description:
                "During registration, we verify your business and personal information as well as your authority to represent your company. It takes less than 10 minutes. You can add colleagues and manage roles & rights.",
            },
            {
              step: "2",
              title: "Start shopping",
              description:
                "With your b4b account, you can seamlessly sign in to all participating B2B online shops. On the first sign‑in with a shop, we share relevant account details and set up an exclusive credit line so you can purchase on account right away.",
            },
            {
              step: "3",
              title: "One central hub, many connections",
              description:
                "The b4b Dashboard gives you a clear overview of all orders across the network. Whenever you update your account details, we notify all connected shops to keep information consistent everywhere.",
            },
          ],
          footer:
            "Join as a buyer and access trusted suppliers with instant credit lines",
        },
      },
    },
    hero: {
      titlePrefix: "Social Login,",
      titleMiddle: "but",
      titleHighlight: "built for B2B",
      lead:
        "You like to sign in to online shops using your Google or Apple account? We are bringing that frictionless B2C experience to business users - tailored to the unique demands of B2B e-commerce.",
      emailPlaceholder: "Your e‑mail address",
      emailAria: "Your e‑mail address",
      invalidEmail: "Please enter a valid email.",
      submitSubmitting: "Submitting…",
      submitJoin: "Join the waitlist",
      submitThanks: "Thanks!",
      launchingNote:
        "Launching in Germany in 2026 - stay up to date and get early access!",
      preview: {
        signInToAccount: "Sign in to your account",
        email: "Email",
        password: "Password",
        signIn: "Sign in",
        or: "or",
        signInWith: "Sign in with",
        why: "Why?",
      },
      benefits: {
        instantOnboarding: "Instant Onboarding",
        instantCreditLine: "Instant Credit Line",
        instantOrders: "Instant Orders",
        zeroRisk: "Zero risk",
      },
      errors: {
        generic: "Something went wrong. Please try again.",
      },
      legal: {
        imprint: "Imprint",
        privacyPolicy: "Privacy Policy",
        cookieSettings: "Cookie Settings",
        modalTitles: {
          imprint: "Imprint",
          privacy: "Privacy policy",
        },
        imprintContent: {
          serviceProvider: "Service provider",
          representedBy: "Represented by",
          contact: "Contact",
          company: {
            name: "b4b ID UG",
            street: "Leuthener Straße 13",
            city: "10829 Berlin, Germany",
            managingDirector: "Ozan Kücük (Managing Director)",
            email: "info@b4b.network",
          },
        },
        privacyContent: {
          lastUpdatedPrefix: "Last updated:",
          intro:
            "This Privacy Policy explains how we process personal data when you join our waitlist and use this website.",
          controller:
            "Controller: b4b ID UG, Leuthener Straße 13, 10829 Berlin, Germany. E‑mail: privacy@b4b.network",
          dataWeProcess:
            "Data we process for the waitlist: your e‑mail address (required), the form source (e.g. section of the site), your browser user‑agent and your IP address (automatically transmitted by your browser).",
          purposes:
            "Purposes: • to register and manage your waitlist subscription and send related updates; • to prevent abuse and ensure service security (rate‑limiting, fraud prevention).",
          legalBases:
            "Legal bases: • Art. 6(1)(a) GDPR (consent) for sending waitlist updates to your e‑mail address; • Art. 6(1)(f) GDPR (legitimate interests) for processing user‑agent and IP to protect our service against abuse.",
                      recipients:
              "Recipients and processors: We use Supabase (Supabase, Inc.) to host our database and invoke an edge function to send confirmation e‑mails. We also use Vercel Analytics and Vercel Speed Insights to measure site performance, usage, and Core Web Vitals in a privacy‑friendly way without cookies or personal data collection. These providers act as processors according to Art. 28 GDPR where applicable.",
          transfers:
            "International data transfers: Depending on service locations, data may be processed outside the EU/EEA. Where this occurs, we rely on appropriate safeguards such as the EU Standard Contractual Clauses pursuant to Art. 46 GDPR.",
          retention:
            "Retention: We store your e‑mail address until you withdraw your consent or until the waitlist project ends, whichever occurs first.",
          rights:
            "Your rights: You have the right to access, rectification, erasure, restriction, data portability, and to object to processing under the conditions of the GDPR. You may withdraw consent at any time with effect for the future.",
          withdrawal:
            "Withdrawal and contact: You can withdraw your waitlist consent by contacting us at privacy@b4b.network. We will then stop sending you updates and delete your e‑mail address unless legal obligations require retention.",
          complaint:
            "Right to lodge a complaint: You can lodge a complaint with your local supervisory authority, e.g., Berliner Beauftragte für Datenschutz und Informationsfreiheit.",
          minors:
            "Minors: Our waitlist is intended for persons aged 16 and over.",
        },
      },
      seo: {
        title: "b4b - Social Login Built for B2B E-commerce",
        description: "We are bringing social logins to B2B e-commerce. Instant onboarding, credit lines, and orders with zero risk. Launching in Germany 2026.",
        keywords: "B2B social login, business authentication, B2B e-commerce, social sign-in, business login solutions",
        ogTitle: "b4b - Social Login Built for B2B E-commerce",
        ogDescription: "Bring frictionless social login to B2B e-commerce. Join our waitlist for early access.",
        twitterTitle: "b4b - Social Login Built for B2B E-commerce",
        twitterDescription: "Bring frictionless social login to B2B e-commerce. Join our waitlist for early access.",
      },
    },
  }
}

export function useTranslations(): Dictionary {
  const locale = useLocale()
  return useMemo(() => buildDictionary(locale), [locale])
}


