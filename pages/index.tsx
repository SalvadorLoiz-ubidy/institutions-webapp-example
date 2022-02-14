import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/users")}>Click</button>
    </div>
  );
};

export default Home;
