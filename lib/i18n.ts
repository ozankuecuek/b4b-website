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
      cookieSettings: "Cookie settings",
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


