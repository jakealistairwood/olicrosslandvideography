import { page } from "./schemas/page"
import { section } from "./schemas/section"
import { sectionOptions } from "./schemas/sectionOptions"
import { homeMasthead } from "./schemas/homeMasthead"
import { logoMarquee } from "./schemas/logoMarquee"
import { textImageMarquee } from "./schemas/textImageMarquee"

export const schema = {
  types: [
    page,
    section,
    sectionOptions,
    homeMasthead,
    logoMarquee,
    textImageMarquee
  ],
}
