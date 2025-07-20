import ComponentSelectPage from "./ComponentSelectPage";
import memoryData from "./data/MemoryData";

export default function Memory() {
  return (
    <ComponentSelectPage
      title="Select a Memory (RAM)"
      categoryKey="memory"
      products={memoryData}
    />
  );
}
