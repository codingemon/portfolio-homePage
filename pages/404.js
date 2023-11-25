import ErrorAnimation from "@/components/home/error-animation";
import Layout from "@/components/layout";

export default function PageNotFound() {
  return (
    <Layout>
      <h1 className="text-center title-font p-5 sm:text-4xl text-3xl mb-4 font-medium text-gray-900"></h1>
      <ErrorAnimation />
    </Layout>
  );
}
