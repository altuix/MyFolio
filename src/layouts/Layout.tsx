import React, { Children } from "react";
import Navbar from "../components/common/navbar";
import { I_Children } from "../Interfaces/I_children";

function Layout(props: I_Children) {
  return (
    <div className="flex w-full">
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 shadow-2xl">
            {/* //dark:bg-zinc-900 dark:ring-zinc-300/20 */}
            <Navbar />

            <div className="p-40">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
