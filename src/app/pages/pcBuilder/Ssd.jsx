import ComponentSelectPage from "./ComponentSelectPage";
import ssdData from "./data/SsdData";

export default function Ssd() {
  return (
    <ComponentSelectPage
      title="Select an SSD"
      categoryKey="ssd"
      products={ssdData}
    />
  );
}
