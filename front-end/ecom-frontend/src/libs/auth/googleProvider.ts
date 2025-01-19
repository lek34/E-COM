import GoogleProvider from "next-auth/providers/google";
import environment from "@/config/environment";

const googleProvider = GoogleProvider({
  clientId: environment.GOOGLE_CLIENT_ID as string,
  clientSecret: environment.GOOGLE_CLIENT_SECRET as string,
});
