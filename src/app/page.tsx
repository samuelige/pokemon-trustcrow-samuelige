import HomepageContainer from "@/container/Home";
import { NextPage } from "next";
import { Suspense } from "react";
import Loading from "./loading";

const page: NextPage = () => {
  return (
      <div className="w-full">
          <Suspense fallback={<Loading />}>
            <HomepageContainer/>;
          </Suspense>
      </div>
  )
}

export default page;