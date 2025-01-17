import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { PulseLoader } from "react-spinners";
const Loader = () => {
  return (
    <>
      {/* <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-4   w-full ">
        <div className="p-2 flex flex-col space-y-3">
          <Skeleton className="h-[225px] cmn-child-bg rounded-xl " />
          <div className="space-y-2">
            <Skeleton className="h-7  cmn-child-bg " />
            <Skeleton className="h-7  cmn-child-bg " />
          </div>
        </div>

        <div className="p-2 flex flex-col space-y-3">
          <Skeleton className="h-[225px] cmn-child-bg rounded-xl " />
          <div className="space-y-2">
            <Skeleton className="h-7  cmn-child-bg " />
            <Skeleton className="h-7  cmn-child-bg " />
          </div>
        </div>

        <div className="p-2 flex flex-col space-y-3">
          <Skeleton className="h-[225px] cmn-child-bg rounded-xl " />
          <div className="space-y-2">
            <Skeleton className="h-7  cmn-child-bg " />
            <Skeleton className="h-7  cmn-child-bg " />
          </div>
        </div>

        <div className="p-2 flex flex-col space-y-3">
          <Skeleton className="h-[225px] cmn-child-bg rounded-xl " />
          <div className="space-y-2">
            <Skeleton className="h-7  cmn-child-bg " />
            <Skeleton className="h-7  cmn-child-bg " />
          </div>
        </div>

        <div className="p-2 flex flex-col space-y-3">
          <Skeleton className="h-[225px] cmn-child-bg rounded-xl " />
          <div className="space-y-2">
            <Skeleton className="h-7  cmn-child-bg " />
            <Skeleton className="h-7  cmn-child-bg " />
          </div>
        </div>

        <div className="p-2 flex flex-col space-y-3">
          <Skeleton className="h-[225px] cmn-child-bg rounded-xl " />
          <div className="space-y-2">
            <Skeleton className="h-7  cmn-child-bg " />
            <Skeleton className="h-7  cmn-child-bg " />
          </div>
        </div>

        <div className="p-2 flex flex-col space-y-3">
          <Skeleton className="h-[225px] cmn-child-bg rounded-xl " />
          <div className="space-y-2">
            <Skeleton className="h-7  cmn-child-bg " />
            <Skeleton className="h-7  cmn-child-bg " />
          </div>
        </div>

        <div className="p-2 flex flex-col space-y-3">
          <Skeleton className="h-[225px] cmn-child-bg rounded-xl " />
          <div className="space-y-2">
            <Skeleton className="h-7  cmn-child-bg " />
            <Skeleton className="h-7  cmn-child-bg " />
          </div>
        </div>
      </div> */}

      <div className="h-[80vh] w-full flex items-center justify-center">

<PulseLoader   color="#d78330"/>

      </div>
    </>
  );
};

export default Loader;
