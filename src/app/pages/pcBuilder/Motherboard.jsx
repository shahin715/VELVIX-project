import motherboardData from "./data/MotherboardData";
import ComponentSelectPage from "./ComponentSelectPage";

export default function Motherboard() {
  return (
    <ComponentSelectPage
      title="Select a Motherboard"
      categoryKey="motherboard"
      products={motherboardData}
    />
  );
}
