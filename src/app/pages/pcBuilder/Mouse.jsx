import ComponentSelectPage from "./ComponentSelectPage";
import gamingMouseData from "./data/GamingMouseData";

export default function Mouse() {
  return (
    <ComponentSelectPage
      title="Select a Gaming Mouse"
      categoryKey="mouse"
      products={gamingMouseData}
    />
  );
}
