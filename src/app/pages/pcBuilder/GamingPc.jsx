import ComponentSelectPage from "./ComponentSelectPage";
import gamingPcData from "./data/GamingPcData";

export default function GamingPc
() {
  return (
    <ComponentSelectPage
      title="Select a Gaming PC"
      categoryKey="gamingpc"
      products={gamingPcData}
    />
  );
}
