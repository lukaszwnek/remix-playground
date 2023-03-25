import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getCourses } from "~/models/courses.server";
import type { Course } from "~/models/courses.server";

type LoaderData = {
  data: Awaited<Course[]>;
};

export const loader = async () => {
  return json<LoaderData>({
    data: await getCourses(),
  });
};

export default function Courses() {
  const { data } = useLoaderData() as LoaderData;
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">List of courses</h1>
      <ul className="mx-auto text-center">
        {data.map((course) => (
          <li key={course.name}>
            <Link to={course.name} className="text-blue-600 underline">
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
