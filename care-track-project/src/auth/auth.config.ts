import type { NextAuthConfig } from 'next-auth';
import { NextResponse } from 'next/server';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login', // Custom login page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Always redirect to /protected after logging in
      if (url.startsWith(baseUrl)) {
        return '/protected'; // Redirect to the protected page
      }
      return baseUrl; // Default redirect to base URL for external URLs
    },
    async authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const nextUrl = request.nextUrl;
      const isProtected = nextUrl.pathname.startsWith('/protected');

      // If the route is protected, check if the user is logged in
      if (isProtected) {
        if (isLoggedIn) return true; // Allow access to protected routes
        return NextResponse.redirect(new URL('/login', nextUrl)); // Redirect to login if not authenticated
      }

      // If the user is logged in and trying to access non-protected routes, redirect to /protected
      if (isLoggedIn) {
        return NextResponse.redirect(new URL('/protected', nextUrl)); // Redirect to protected page
      }

      return true; // Allow access to public routes
    },
  },
  providers: [], // Add providers here
};
