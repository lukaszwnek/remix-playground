import Jsona from "jsona";

export type Course = {
  name: string
};

export async function getCourses(): Promise<Course[]> {
  const dataFormatter = new Jsona();

  return await fetch(
    "https://api.northpass.com/v2/courses", {
      headers: {
        "X-Api-Key": process.env.NORTHPASS_API_KEY!
      }
    }
  ).then(
    (res) => res.json()
  ).then(
    (json) => dataFormatter.deserialize(json) as Course[]
  );
}
