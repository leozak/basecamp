"use client";

import { SquareX } from "lucide-react";
import { redirect } from "next/navigation";

import Navbar from "./Navbar";
import DashboardUsersPage from "./users/Users";
import DashboardProductsPage from "./products/products";

const Dashboard = ({ module }: { module: string }) => {
  return (
    <div className="flex w-full max-h-220 overflow-y-scroll">
      <div className="flex w-fit">
        <Navbar />
      </div>
      <div className="relative w-full ml-8 p-4">
        {module === "information" && <div>INFORMATION</div>}
        {/* USERS */}
        {module === "users" && (
          <div>
            <DashboardUsersPage />
          </div>
        )}

        {/* PRODUCTS */}
        {module === "products" && (
          <div>
            <DashboardProductsPage />
          </div>
        )}

        {/* CLOSE BUTTON */}
        <button
          className="absolute cursor-pointer right-4 top-2 text-neutral-400 hover:text-neutral-600"
          onClick={() => redirect("/")}
        >
          <SquareX />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
