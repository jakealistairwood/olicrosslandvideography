import { page } from "./schemas/page"
import { portfolio } from "./schemas/portfolio"
import { projectCategories } from "./schemas/projectCategories"
import { siteSettings } from "./schemas/siteSettings"
import { contactDetails } from "./schemas/contactDetails"
import { section } from "./schemas/section"
import { sectionOptions } from "./schemas/sectionOptions"
import { assetOptions } from "./schemas/assetOptions"
import { customLink } from "./schemas/customLink"
import { fullWidthAsset } from "./schemas/fullWidthAsset"
import { homeMasthead } from "./schemas/homeMasthead"
import { aboutMasthead } from "./schemas/aboutMasthead"
import { sectionHeader } from "./schemas/sectionHeader"
import { logoMarquee } from "./schemas/logoMarquee"
import { textImageMarquee } from "./schemas/textImageMarquee"
import { introduction } from "./schemas/introduction"
import { selectedWorks } from "./schemas/selectedWorks"
import { timedTextImageSlider } from "./schemas/timedTextImageSlider"
import { jobExperiences } from "./schemas/jobExperiences"
import { threeColGrid } from "./schemas/threeColGrid"
import { scrollableText } from "./schemas/scrollableText"
import { linksWrapper } from "./schemas/linksWrapper"
import { threeColGallery } from "./schemas/threeColGallery"

export const schema = {
  types: [
    page,
    portfolio,
    projectCategories,
    siteSettings,
    contactDetails,
    section,
    sectionOptions,
    assetOptions,
    customLink,
    fullWidthAsset,
    homeMasthead,
    aboutMasthead,
    sectionHeader,
    logoMarquee,
    textImageMarquee,
    introduction,
    selectedWorks,
    timedTextImageSlider,
    jobExperiences,
    threeColGrid,
    scrollableText,
    linksWrapper,
    threeColGallery,
  ],
}
