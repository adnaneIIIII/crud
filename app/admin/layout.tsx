import { Card } from "@/components/ui/card";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Card className="flex h-screen">
      {/* Sidebar */}
      <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 p-3"
        >
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <span className="hidden lg:block font-bold text-lg text-gray-800 ">
            GoldenShop
          </span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-#f6f6f8">
        <Navbar />
        {children}
      </div>
    </Card>
  );
}
