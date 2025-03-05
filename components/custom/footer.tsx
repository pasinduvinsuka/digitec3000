import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-black dark:bg-white relative overflow-hidden">
      {/* Background watermark/pattern */}
      <div className="absolute inset-0 w-full h-full overflow-hidden flex items-end justify-center pointer-events-none z-0">
        <div
          className="text-[350px] font-bold text-gray/[0.05] dark:text-gray-400 dark:opacity-10
 leading-none tracking-tighter whitespace-nowrap transform translate-y-1/4"
        >
          D I G I T E C
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10">
        {/* CTA Section */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-3 text-white dark:text-black">
            Start your free trial today
          </h2>
          <p className="text-muted-foreground mb-6">
            Mainline is the fit-for-purpose tool for planning
            <br />
            and building modern software products.
          </p>
          <Button className="bg-black text-white hover:bg-black/90 px-6">
            Get started
          </Button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-4 text-white dark:text-black">
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Product
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            FAQ
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary flex items-center gap-1"
          >
            <Twitter className="h-4 w-4" /> Twitter{" "}
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:text-primary flex items-center gap-1"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn{" "}
            <ArrowUpRight className="ml-1 h-3 w-3" />
          </Link>
        </div>

        {/* Privacy Policy */}
        <div className="mt-2">
          <Link
            href="#"
            className="text-xs text-muted-foreground hover:text-primary"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
