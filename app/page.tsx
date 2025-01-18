import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { PageRoutes } from "@/lib/pageroutes";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        Emergency Alert
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
  Dan berikut link web-nya:{" "}
  <a 
    href="https://idboosthost.my.id/splash.php/index.php" 
    className="text-blue-500 underline" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    https://idboosthost.my.id/splash.php/index.php
  </a>
</p>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}