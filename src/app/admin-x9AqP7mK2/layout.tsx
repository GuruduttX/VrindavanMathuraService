import DashboardLayout from "@/components/Admin/Components/DashboardLayout";
import { redirect } from "next/navigation"
import {Toaster} from "react-hot-toast";

export default  async function RootLayout({ children }: { children: React.ReactNode }) {


    return (
        <div className=" bg-[#040421]">
            <DashboardLayout>{children}</DashboardLayout>
            <Toaster/>
        </div>
    )
}