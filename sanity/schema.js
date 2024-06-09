import { page } from "./schemas/page"
import { section } from "./schemas/section"
import { sectionOptions } from "./schemas/sectionOptions"
import { homeMasthead } from "./schemas/homeMasthead"
import { logoMarquee } from "./schemas/logoMarquee"

export const schema = {
  types: [
    page,
    section,
    sectionOptions,
    homeMasthead,
    logoMarquee,
  ],
}
