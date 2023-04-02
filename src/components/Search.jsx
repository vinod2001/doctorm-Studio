import React from "react";
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox
} from 'react-instantsearch-dom';
import { Box } from "@sanity/ui";
import config from "../../config/config";

const { algoliaIndexName, algoliaProjectId, algoliaReadKey } = config;

const client = algoliasearch(algoliaProjectId, algoliaReadKey);

const searchClient = {
  ...client,
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return [];
    }
    return client.search(requests);
  },
};

function HitComponent({ Hit, handleItemSelect }) {
  const { hit } = Hit;
  const { productId, productName, thumbnail } = hit;
  return (
    <>
      <Box sx={{ background: '#fff' }}>
        <a onClick={(e) => handleItemSelect(e, { _key: productId, productId, productName, productImage: thumbnail })}>
          <span>
            <img src={hit.thumbnail} width="100" height="50"></img>
          </span>
          <span>
            {hit.productName}
          </span>
        </a>
        <span className="Hit-price">${hit.grossPrice}</span>
      </Box>
    </>
  );
}

export default function Search({ handleItemSelect }) {
  return (
    <Box>
      <InstantSearch indexName={algoliaIndexName} searchClient={searchClient}>
        <Box className="right-panel">
          <Box sx={{ background: '#F7961C', pl: 6, pr: 5, pt: 5, pb: 5, display: 'flex' }}>
            <Box sx={{ ml: 3, width: '100%' }}>
              <SearchBox showLoadingIndicator={false} placeholder="text" defaultRefinement="" autoFocus={true} />
            </Box>
          </Box>
          <Box >
            <Hits hitComponent={Hit => <HitComponent Hit={Hit} handleItemSelect={handleItemSelect} />} /></Box>
        </Box>
      </InstantSearch>
    </Box>
  );
}