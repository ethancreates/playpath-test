import DashboardSection from "../components/DashboardSection";
import { getTableData } from "../utils/actions";

const Dashboard = async () => {
  const tableData = await getTableData();
  return (
    <main>
      <DashboardSection tableData={tableData} />
    </main>
  );
};
export default Dashboard;
