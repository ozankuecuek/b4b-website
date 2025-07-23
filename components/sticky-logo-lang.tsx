// import LanguageSelector from "@/components/language-selector"

interface StickyLogoLangProps {
  isOnWhiteBackground: boolean
  isOnBusinessModelSection?: boolean
  isOnOurAskSection?: boolean
  isOnClosingSection?: boolean
}

export default function StickyLogoLang({ isOnWhiteBackground, isOnBusinessModelSection, isOnOurAskSection, isOnClosingSection }: StickyLogoLangProps) {
  return (
    <div className="fixed top-[44px] left-6 sm:left-10 lg:top-[49px] lg:left-32 z-50 flex items-center gap-4">
      <svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 13 115.35 37.55"
           width="125"
           height="40"
           className="w-20 h-auto xl:w-28 transition-colors duration-300">
        <defs/>
        <g fill={isOnClosingSection ? "hsl(198, 89%, 82%)" : (isOnOurAskSection ? "hsl(198, 89%, 82%)" : (isOnBusinessModelSection ? "hsl(198, 89%, 82%)" : (isOnWhiteBackground ? "hsl(225, 84%, 24%)" : "#A6E1FA"))) }>
          {/* Runic sign */}
          <g transform="translate(0, -4.2)">
            <path d="M3.75 33.80L0 28.55L0 23.95L6.95 17.20L6.95 22.20L3.45 25.70L3.45 26.00L7.20 31.20L3.75 33.80M8.75 41.30L8.75 36.30L12.25 32.80L12.25 32.50L8.50 27.30L11.95 24.70L15.70 29.95L15.70 34.55L8.75 41.30Z"/>
          </g>
          {/* Company name "b4b" */}
          <g transform="translate(21.7, 0)">
            <path d="M15.95 50.55Q14.15 50.55 12.50 50.05Q10.85 49.55 9.53 48.70Q8.20 47.85 7.32 46.73Q6.45 45.60 6.15 44.40L7.90 43.80L7.45 49.95L0 49.95L0 13L8.05 13L8.05 29.80L6.40 29.20Q6.70 27.90 7.55 26.77Q8.40 25.65 9.70 24.77Q11 23.90 12.55 23.40Q14.10 22.90 15.75 22.90Q19.20 22.90 21.88 24.67Q24.55 26.45 26.10 29.57Q27.65 32.70 27.65 36.70Q27.65 40.75 26.13 43.88Q24.60 47 21.95 48.77Q19.30 50.55 15.95 50.55M13.85 43.80Q15.65 43.80 17 42.90Q18.35 42 19.07 40.42Q19.80 38.85 19.80 36.70Q19.80 34.60 19.07 33Q18.35 31.40 17 30.55Q15.65 29.70 13.85 29.70Q12 29.70 10.65 30.55Q9.30 31.40 8.55 33Q7.80 34.60 7.80 36.70Q7.80 38.85 8.55 40.42Q9.30 42 10.65 42.90Q12 43.80 13.85 43.80ZM46.80 50L46.80 21.70L51.35 21.80L38.70 37.30L37.50 35.80L60.70 35.80L60.70 42.80L33.70 42.80L30.30 36.25L48.15 14.70L55 14.70L55 50L46.80 50ZM81.95 50.55Q80.15 50.55 78.50 50.05Q76.85 49.55 75.53 48.70Q74.20 47.85 73.33 46.73Q72.45 45.60 72.15 44.40L73.90 43.80L73.45 49.95L66 49.95L66 13L74.05 13L74.05 29.80L72.40 29.20Q72.70 27.90 73.55 26.77Q74.40 25.65 75.70 24.77Q77 23.90 78.55 23.40Q80.10 22.90 81.75 22.90Q85.20 22.90 87.88 24.67Q90.55 26.45 92.10 29.57Q93.65 32.70 93.65 36.70Q93.65 40.75 92.13 43.88Q90.60 47 87.95 48.77Q85.30 50.55 81.95 50.55M79.85 43.80Q81.65 43.80 83 42.90Q84.35 42 85.08 40.42Q85.80 38.85 85.80 36.70Q85.80 34.60 85.08 33Q84.35 31.40 83 30.55Q81.65 29.70 79.85 29.70Q78 29.70 76.65 30.55Q75.30 31.40 74.55 33Q73.80 34.60 73.80 36.70Q73.80 38.85 74.55 40.42Q75.30 42 76.65 42.90Q78 43.80 79.85 43.80Z"/>
          </g>
        </g>
      </svg>
    </div>
  )
} 