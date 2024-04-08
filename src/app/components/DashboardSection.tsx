"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { TableData } from "../utils/types";

import {
  GetNumberRatings,
  RenderRatingStars,
  RenderStars,
  SnakeToTitleCase,
  WithSkeleton,
} from "../utils/utilities";

type DashboardSectionProps = {
  tableData: TableData;
};

const DashboardSection: React.FC<DashboardSectionProps> = ({ tableData }) => {
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/");
    } else {
      console.log(`error: ${error}`);
    }
  };

  const arrangedOverviewTableData = Object.entries(tableData.overview).map(
    ([rating, count]) => {
      return { rating: rating, count: count };
    }
  );

  const arrangedDetailsTableData = Object.entries(tableData.details).map(
    ([criteria, rating]) => {
      return { criteria: criteria, rating: rating };
    }
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col md:flex-row items-center space-x-0   md:space-x-[35px]">
        {/* left table */}
        <div className="w-[540px] h-fit bg-white border-[#E3E8EF] border rounded-xl">
          <h2 className="text-gray-800 text-sm px-6 py-4 font-medium leading-[20px]">
            Rating Breakdown
          </h2>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-t border-gray-200">
                <th className="px-6 py-4 text-left font-medium text-xs text-gray-600">
                  Rating
                </th>
                <th className="text-left font-medium text-xs text-gray-600 pl-6">
                  # of ratings
                </th>
              </tr>
            </thead>
            <tbody>
              {arrangedOverviewTableData.map(({ rating, count }) => {
                return (
                  <tr key={rating} className="border-b border-gray-200">
                    <td className="px-6 py-4 flex items-center space-x-1">
                      {RenderRatingStars(rating)}
                    </td>
                    <td className="text-gray-700 px-6 py-4 text-left text-sm transition-all">
                      {GetNumberRatings(count)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* right table */}
        <div className="w-[540px] h-fit bg-white border-[#E3E8EF] border rounded-xl md:mt-0 mt-10">
          <h2 className="text-gray-800 text-sm font-medium leading-tight px-6 py-4">
            Detailed Ratings
          </h2>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-t border-gray-200">
                <th className="px-6 py-4 text-left font-medium text-xs text-gray-600">
                  Criteria
                </th>
                <th className="px-6 py-4 text-left font-medium text-xs text-gray-600">
                  Rating
                </th>
                <th className="text-left font-medium text-xs text-gray-600 pl-6">
                  # of ratings
                </th>
              </tr>
            </thead>
            <tbody>
              {arrangedDetailsTableData.map(({ criteria, rating }) => {
                return (
                  <tr
                    key={criteria}
                    className="border-b border-gray-200 h-[72px] flex items-center"
                  >
                    <td className="px-6 py-4 text-left text-sm">
                      <WithSkeleton>
                        {(isLoading) =>
                          isLoading ? "" : SnakeToTitleCase(criteria)
                        }
                      </WithSkeleton>
                    </td>
                    <td className="px-6 py-4 flex items-center">
                      {RenderStars(rating.score)}
                    </td>
                    <td className="text-gray-700 px-6 py-4 text-left text-sm">
                      {GetNumberRatings(rating.number_of_ratings)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={() => handleLogout()}
        className="bg-[#0040C1] my-[62px] text-white px-6 py-2.5 rounded-lg hover:bg-[#1155DD]"
      >
        Logout
      </button>
    </div>
  );
};
export default DashboardSection;
