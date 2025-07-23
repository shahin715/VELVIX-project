import ComponentSelectPage from "./ComponentSelectPage";
import gpuData from "./data/GpuData";

export default function Gpu() {
  return (
    <ComponentSelectPage
      title="Select a Graphic Card"
      categoryKey="gpu"
      products={gpuData}
    />
  );
}
