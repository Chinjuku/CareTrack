// app/layout.tsx
import { NextUIProvider } from "@nextui-org/react";
import Navbar from "@/components/navbar/navbar";  // ใช้ alias "@/components"
import "@/app/globals.css";  // นำเข้าไฟล์ global CSS ที่นี่

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <NextUIProvider>
          <div className="flex-grow px-2.5"> {/* เนื้อหาหลัก */}
            {children}  
          </div>
          <Navbar />  {/* แสดง Navbar ด้านล่าง */}
        </NextUIProvider>
      </body>
    </html>
  );
}
