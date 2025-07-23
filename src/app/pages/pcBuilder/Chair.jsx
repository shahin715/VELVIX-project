import ComponentSelectPage from "./ComponentSelectPage";
import gamingChairData from "./data/GamingChairData";

export default function Chair() {
  return (
    <ComponentSelectPage
      title="Select a Gaming Chair"
      categoryKey="chair"
      products={gamingChairData}
    />
  );
}
