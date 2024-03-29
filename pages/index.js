import Head from "next/head";
import Layout from "@/components/layout";
import Hero from "@/components/home/hero";
import Animation from "@/components/home/animation";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>최성형 포트폴리오</title>
        <meta name="description" content="가보자고" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </Head>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </Layout>
  );
}
