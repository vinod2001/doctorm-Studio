import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { colorInput } from "@sanity/color-input";
import { table } from "@sanity/table";
import { schemaTypes } from './schemas'
import config from './config/config';


const hiddenDocTypes = (listItem) => !["carousal", "bannerCarousalItem", "topProduct", "topProducts", "topCategory", "topCategories", "topBrand", "topBrands", "bannerCarousal"].includes(listItem.getId());

export const defaultDocumentNode = (S) => {
  return S.document();
}

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

export default defineConfig({
  name: 'default',
  title: 'Dr.M',
  projectId: config.sanity.projectId,
  dataset: config.sanity.dataset,
  plugins: [deskTool({
    structure,
    defaultDocumentNode,
  }), , visionTool(), colorInput(), table()],
  schema: {
    types: schemaTypes,
  },
})
