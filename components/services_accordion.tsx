import { Accordion, Span } from "@chakra-ui/react";

const items = [
  { value: "a", title: "Routine Health Examinations",  text: "Some value 1..." },
  { value: "b", title: "disease prevention and preservation of health", text: "Some value 2..." },
  { value: "c", title: "Support for Breeders",  text: "Some value 3..." },
  { value: "d", title: "Referrals to Specialists",  text: "Some value 3..." },
  { value: "e", title: "Palliative and end of life care",  text: "Some value 3..." }


];

export default function Demo() {
  return (
    <Accordion.Root multiple defaultValue={["b"]}>
      {items.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.ItemTrigger
            // only these three props to enlarge the header:
            fontSize="2xl"   // larger text
            py={6}           // more vertical padding
            px={4}           // a bit more horizontal padding
             color="black"
          >
            <Span flex="1">{item.title}</Span>
            {/* make the arrow bigger, too: */}
            <Accordion.ItemIndicator fontSize="2xl"
          color="black"/>
          </Accordion.ItemTrigger>

          <Accordion.ItemContent>
            <Accordion.ItemBody 
              // roomy content, but optional:
              fontSize="lg"
              py={4} 
              px={4}
            >
              {item.text}
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
