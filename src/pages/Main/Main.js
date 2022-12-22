import React from 'react';
import { PageLayout } from "components/PageLayout";
import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import { Contributors } from "./components/Contributors";

export const Main = () => {
  return (
    <PageLayout>
      <Banner />

      <Categories />

      <Contributors />
    </PageLayout>
  );
}
