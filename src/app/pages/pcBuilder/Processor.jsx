import ComponentSelectPage from "./ComponentSelectPage";
import processorData from "./data/ProcessorData";

export default function Processor() {
  return (
    <ComponentSelectPage
      title="Select a Processor"
      categoryKey="processor"
      products={processorData}
    />
  );
}
