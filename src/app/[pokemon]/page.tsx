import DetailsPageContainer from "@/container/Details";
import { NextPage } from "next";
import { Suspense } from "react";
import Loading from "../loading";

const page: NextPage = () => {
  return (
      <div className="w-full">
          <Suspense fallback={<Loading />}>
            <DetailsPageContainer/>
          </Suspense>
      </div>
  )
}

export default page;