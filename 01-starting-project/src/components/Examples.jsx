import React from "react";
import { MenuButton } from "./menuButtons";
import { EXAMPLES } from "../data-with-examples";
import { useState } from "react";
import { Section } from "./Section";
import { Taps } from "./Taps";

export const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tapContent = <p>Please Click The Button</p>;
  if (selectedTopic) {
    tapContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Taps
        buttons={
          <>
            <MenuButton
              selected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </MenuButton>
            <MenuButton
              selected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </MenuButton>
            <MenuButton
              selected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </MenuButton>
            <MenuButton
              selected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </MenuButton>
          </>
        }
      >
        {tapContent}
      </Taps>
    </Section>
  );
};
