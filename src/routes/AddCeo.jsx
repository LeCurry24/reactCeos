import { Form, redirect } from "react-router-dom";
import slugify from "slugify";

export async function action({ request }) {
  const formData = await request.formData();
  const ceoName = formData.get("ceoName");
  const ceoYear = formData.get("ceoYear");

  const slug = slugify(ceoName, {
    replacement: "_",
    lower: true,
    strict: true,
  });
  const data = { name: ceoName, slug, year: Number(ceoYear) };

  const addCeo = await fetch("http://localhost:8000/ceos/add", {
    mothod: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
  console.log(addCeo);

  return redirect("/ceos");
}

const AddCeo = () => {
  return (
    <Form method="post">
      <label>
        Ceo Name:
        <input type="text" name="ceoName" />
      </label>
      <label>
        Year Served:
        <input type="number" name="ceoYear" min="1930" max="2099" step="1" />
      </label>
      <button type="submit">Add CEO</button>
    </Form>
  );
};
export default AddCeo;
