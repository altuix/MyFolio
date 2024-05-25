import React, { Children } from "react";
import Navbar from "../components/common/navbar";
import { I_Children } from "../Interfaces/I_children";

function Layout(props: I_Children) {
  return (
    <div className="flex w-full justify-center">
      <div className="inset-0 flex justify-center relative">
        <div className="flex w-full max-w-7xl relative">
          <div className="w-full bg-white ring-1 ring-zinc-100 shadow-2xl">
            {/* //dark:bg-zinc-900 dark:ring-zinc-300/20 */}
            <Navbar />

            <div className="pt-40 px-12">{props.children}</div>
            <div className="w-full bg-slate-500 h-16 border-t-4 border-indigo-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
