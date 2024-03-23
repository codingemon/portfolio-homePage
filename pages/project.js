import Layout from "@/components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "@/config";
import ProjectItem from "../components/projects/project-item";
import usePageTilte from "@/hooks/usePageTitle";

export default function Project({ projects }) {
  console.log(projects);
  usePageTilte("최성형 프로젝트 목록");

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
        <Head>
          <title>코딩에몽 포트폴리오</title>
          <meta name="description" content="가보자고" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        </Head>
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트 :
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 ">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      // TOKEN 가져와줌
      authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      // 정렬기준
      // sorts: [{ property: "Name", direction: "ascending" }],
      page_size: 100,
    }),
  };
  // DBID
  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  /* 일단 여기는 건들지마라  */
  const projectNames = projects.results.map(
    // 옵셔널 채이닝해서 해결
    (aProject) => aProject.properties.Name.title[0]?.plain_text
  );

  console.log(`projectNames : ${projectNames}`);

  return {
    props: { projects },
  };
}
