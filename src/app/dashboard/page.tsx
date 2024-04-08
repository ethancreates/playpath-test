import DashboardSection from "../components/DashboardSection";
import { getTableData } from "../utils/actions";
import { redirect } from "next/navigation";
import { createClient } from "@/app/utils/supabase/server";

const Dashboard = async () => {
  const tableData = await getTableData();
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }
  return (
    <main>
      <DashboardSection tableData={tableData} />
    </main>
  );
};
export default Dashboard;
