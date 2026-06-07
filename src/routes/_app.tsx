import { Outlet, createFileRoute } from "@tanstack/react-router";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className="min-h-screen bg-background flex justify-center">
      <div className="w-full max-w-[480px] relative pb-[64px]">
        <Outlet />
        <BottomNav />
      </div>
    </div>
  );
}
