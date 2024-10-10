import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login', // Custom login page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to /protected after logging in, unless the original URL was one of the protected routes
      if (url.startsWith(baseUrl)) {
        const protectedRoutes = ['/protected', '/notification', '/doctor', '/activity'];
        const targetPath = new URL(url).pathname;
        if (protectedRoutes.some(route => targetPath.startsWith(route))) {
          return url; // Keep the original URL if it's one of the protected routes
        }
        return '/protected'; // Default redirect to the protected page
      }
      return baseUrl; // Default redirect to base URL for external URLs
    },
    async authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const nextUrl = request.nextUrl;
      const protectedRoutes = ['/protected', '/notification', '/doctor', '/activity'];
      const isProtected = protectedRoutes.some(route => nextUrl.pathname.startsWith(route));

      // If the route is protected, check if the user is logged in
      if (isProtected) {
        if (isLoggedIn) return true; // Allow access to protected routes
        return NextResponse.redirect(new URL('/login', nextUrl)); // Redirect to login if not authenticated
      }

      // If the user is logged in and trying to access non-protected routes, redirect to /protected
      if (isLoggedIn && !isProtected) {
        return NextResponse.redirect(new URL('/protected', nextUrl)); // Redirect to protected page
      }

      return true; // Allow access to public routes
    },
  },
  providers: [], // Add providers here
};
