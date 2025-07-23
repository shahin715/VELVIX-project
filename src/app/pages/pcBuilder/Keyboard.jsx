import ComponentSelectPage from "./ComponentSelectPage";
import gamingKeyboardData from "./data/GamingKeyboardData";

export default function Keyboard() {
  return (
    <ComponentSelectPage
      title="Select a Gaming Keyboard"
      categoryKey="keyboard"
      products={gamingKeyboardData}
    />
  );
}
