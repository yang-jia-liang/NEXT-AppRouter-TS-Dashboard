import LayoutHeader from "@/components/layout/header";
import LayoutLeft from "@/components/layout/left";
import LayoutRight from "@/components/layout/right";

export default function Page() {
  return (
      <div>
          <LayoutHeader/>

          <div className="flex min-h-screen p-6">
              <LayoutLeft/>
              <LayoutRight/>
          </div>
      </div>
  );
}
