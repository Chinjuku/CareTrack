import { NextUIProvider } from "@nextui-org/react";
import "@/app/globals.css";
import { getUser } from "@/server/user";
import { auth } from "@/auth/auth";
import { UserProvider } from '@/context/UserProvider';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  let user = null
  if (session?.user?.email) {
    user = await getUser(session.user.email);
  }
  
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" /> */}
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <NextUIProvider>
          <UserProvider user={user}>
            <div className="flex-grow">
              {children}
            </div>
          </UserProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
