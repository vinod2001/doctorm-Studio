import definedPages from './documents/definedPage'
import blockContent from './blockContent'
import category from './category'
import header from './header'
import pdp from './pdp'
import seo from './documents/seo'
import { bannerCarousal, bannerCarousalItem, bannerButton } from './documents/bannerCarousal'
import imageWithText from './documents/imageWithText'
import imageWithTextGrid from './documents/imageWithTextGrid'
import catalogueBanner from './documents/catalogueBanner'
import linkWithText from './documents/linkWithText'
import { topProducts, productSearchBox } from './documents/topProducts'
import richTextEditor from './documents/richTextEditor'
import { topCategory, topCategories } from './documents/topCategories'
import { topBrand, topBrands } from './documents/topBrands'

export const schemaTypes = [
    ...definedPages, header, pdp, category, blockContent, seo, imageWithText,
    imageWithTextGrid, catalogueBanner, bannerButton, bannerCarousalItem, bannerCarousal,
    topCategory, topCategories, topBrand, topBrands, linkWithText,
    productSearchBox, topProducts, ...richTextEditor
];
