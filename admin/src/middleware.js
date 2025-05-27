import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/signin"
  }
});

// Protect root AND /protected routes
export const config = {
  matcher: ["/", "/protected/:path*", "/teams/:path*"]
};
