import ComponentSelectPage from "./ComponentSelectPage";
import mousepadData from "./data/MousepadData";

export default function Mousepad() {
  return (
    <ComponentSelectPage
      title="Select a Gaming Mouse Pad"
      categoryKey="mousepad"
      products={mousepadData}
    />
  );
}
