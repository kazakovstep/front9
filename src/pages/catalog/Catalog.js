import {withCatalogLayout} from "../../Layout/CatalogLayout/CatalogLayout";
import React, {useEffect, useLayoutEffect, useState} from "react";
import {CatalogPreview} from "../../components/CatalogPreview/CatalogPreview";
import queryString from 'query-string';

export const Catalog = () => {

  return (
    <>
        <CatalogPreview/>
    </>
  );
}

export default withCatalogLayout(Catalog);