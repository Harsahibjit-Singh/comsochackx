import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

export default async function ProtectedPage() {
  const session = await getServerSession(authOptions);

  return (
    <div>
    </div>
  );
}
