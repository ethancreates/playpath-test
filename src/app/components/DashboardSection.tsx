"use client";

import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import fullstar from "../../../public/fullstar.svg";
import emptystar from "../../../public/emptystar.svg";
import Image from "next/image";
import { TableData } from "../utils/types";
import {
  FiveStars,
  FourStars,
  OneStar,
  ThreeStars,
  TwoStars,
} from "../utils/constant";

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
      <div className="flex items-center space-x-[35px]">
        {/* left table */}
        <div className="w-[540px] h-fit bg-white border-[#E3E8EF] border rounded-xl">
          <h2 className="text-gray-800 text-sm leading-tight px-6 py-4 font-medium leading-[20px]">
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
                      {rating === "five_star_ratings" ? <FiveStars /> : null}
                      {rating === "four_star_ratings" ? <FourStars /> : null}
                      {rating === "three_star_ratings" ? <ThreeStars /> : null}
                      {rating === "two_star_ratings" ? <TwoStars /> : null}
                      {rating === "one_star_ratings" ? <OneStar /> : null}
                    </td>
                    <td className="text-gray-700 px-6 py-4 text-left text-sm">
                      {count}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* right table */}
        <div className="w-[540px] h-fit bg-white border-[#E3E8EF] border rounded-xl">
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
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-left text-sm">Item Accuracy</td>
                <td className="px-6 py-4 flex items-center space-x-1">
                  <Image src={fullstar} alt="fullstar" width={20} height={20} />
                  <Image src={fullstar} alt="fullstar" width={20} height={20} />
                  <Image src={fullstar} alt="fullstar" width={20} height={20} />
                  <Image src={fullstar} alt="fullstar" width={20} height={20} />
                  <Image
                    src={emptystar}
                    alt="emptystar"
                    width={20}
                    height={20}
                  />
                </td>
                <td className="text-gray-700 px-6 py-4 text-left text-sm">
                  100
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4 text-left text-sm">Shipping Speed</td>
                <td className="px-6 py-4 flex items-center space-x-1">
                  <Image src={fullstar} alt="fullstar" width={20} height={20} />
                  <Image src={fullstar} alt="fullstar" width={20} height={20} />
                  <Image src={fullstar} alt="fullstar" width={20} height={20} />
                  <Image src={fullstar} alt="fullstar" width={20} height={20} />
                  <Image
                    src={emptystar}
                    alt="emptystar"
                    width={20}
                    height={20}
                  />
                </td>
                <td className="text-gray-700 px-6 py-4 text-left text-sm">
                  100
                </td>
              </tr>
              {arrangedDetailsTableData.map(({ criteria, rating }) => {
                return (
                  <tr key={criteria} className="border-b border-gray-200">
                    <td className="px-6 py-4 text-left text-sm">{criteria}</td>
                    <td className="px-6 py-4 flex items-center space-x-1">
                      {rating.score > 5 ? (
                        <FiveStars />
                      ) : rating.score > 4 ? (
                        <FourStars />
                      ) : rating.score > 3 ? (
                        <ThreeStars />
                      ) : rating.score > 2 ? (
                        <TwoStars />
                      ) : (
                        <OneStar />
                      )}
                    </td>
                    <td className="text-gray-700 px-6 py-4 text-left text-sm">
                      {rating.number_of_ratings}
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
        className="bg-[#0040C1] mt-[62px] text-white px-6 py-2.5 rounded-lg hover:bg-[#1155DD]"
      >
        Logout
      </button>
      <button
        onClick={() => console.log(arrangedDetailsTableData)}
        className="bg-[#0040C1] mt-[62px] text-white px-6 py-2.5 rounded-lg hover:bg-[#1155DD]"
      >
        Test Log
      </button>
    </div>
  );
};
export default DashboardSection;
