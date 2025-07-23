import ComponentSelectPage from "./ComponentSelectPage";
import gamingTableData from "./data/GamingTableData";

export default function Table() {
  return (
    <ComponentSelectPage
      title="Select a Gaming Table"
      categoryKey="table"
      products={gamingTableData}
    />
  );
}
