import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 최성형입니다.
          <br className="hidden lg:inline-block" />
          발전을 위해 꺄루룽하고 있습니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          꺄루룽꺄루룽꺄루룽꺄루룽꺄루룽꺄루룽꺄루룽꺄루
        </p>
        <div className="flex justify-center">
          <Link href="/project" legacyBehavior>
            <a className="project-btn">프로젝트 보러가기</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
