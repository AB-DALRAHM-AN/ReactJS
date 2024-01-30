import React from "react";
import { CORE_CONCEPTS } from "../data-with-examples";
import { CoreConcept } from "./CoreConcept";
import { Section } from "./Section";


export const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Time to get started!">
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcept key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
};
