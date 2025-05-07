import { Text } from "./sections/text.tsx";
import { Embed } from "./sections/embed.tsx";
import { Form } from "./sections/form/form.tsx";
import { AnchorSection } from "./sections/anchor/anchor-section.tsx";
import { ButtonSection } from "./sections/button/button-section.tsx";

export function Main() {
  return (
    <main role="main">
      <AnchorSection />
      <ButtonSection />
      <Text />
      <Embed />
      <Form />
    </main>
  );
}
