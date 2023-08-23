import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	defaultLangCode: "en",
	supportedLangCodes: ["fr"],
	showDefaultLangCode: true,
	translations: {
		fr: {
			education: "src/components/education/i18n/fr.json"
		}
	},
	routeTranslations: {
		fr: {
			home: "accueil"
		}
	},
})