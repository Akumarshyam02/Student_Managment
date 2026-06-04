import { Suspense } from "react";
import { supabase } from "@/lib/supabase";
import { Course } from "@/types";
import BentoGrid from "@/components/dashboard/BentoGrid";
import CoursesSkeleton from "@/components/ui/CoursesSkeleton";


async function CoursesData() {
  try {
    const { data: courses, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      return (
        <div className="p-6">
          <div className="rounded-2xl border border-red-900/40 bg-red-950/20 p-6">
            <p className="font-mono text-sm text-red-400 mb-3">
              ⚠ Supabase Error: {error.message}
            </p>
            <p className="text-xs text-text-secondary font-semibold mb-2">Yeh check karo:</p>
            <ul className="text-xs text-text-secondary space-y-1 list-disc list-inside">
              <li>.env.local mein NEXT_PUBLIC_SUPABASE_URL sahi hai?</li>
              <li>.env.local mein NEXT_PUBLIC_SUPABASE_ANON_KEY sahi hai?</li>
              <li>Supabase mein courses table bani hai?</li>
              <li>RLS disable hai ya public read policy add ki hai?</li>
            </ul>
          </div>
        </div>
      );
    }

    return <BentoGrid courses={(courses as Course[]) || []} />;
  } catch (e: any) {
    return (
      <div className="p-6">
        <div className="rounded-2xl border border-yellow-900/40 bg-yellow-950/20 p-6">
          <p className="font-mono text-sm text-yellow-400 mb-3">
            ⚠ Network Error: {e?.message ?? "fetch failed"}
          </p>
          <p className="text-xs text-text-secondary font-semibold mb-2">Yeh check karo:</p>
          <ul className="text-xs text-text-secondary space-y-1 list-disc list-inside">
            <li>Internet connection theek hai?</li>
            <li>Supabase project paused toh nahi? (free tier 1 hafte mein pause hota hai)</li>
            <li>.env.local mein URL mein koi typo toh nahi?</li>
            <li>server restart kiya? (Ctrl+C phir npm run dev)</li>
          </ul>
          <p className="text-xs text-yellow-500 mt-3 font-mono">
            Raw: {String(e)}
          </p>
        </div>
      </div>
    );
  }
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<CoursesSkeleton />}>
      <CoursesData />
    </Suspense>
  );
}