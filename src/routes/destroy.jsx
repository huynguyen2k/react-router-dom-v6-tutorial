import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
  console.log("destroy action");

  await deleteContact(params.contactId);
  return redirect("/");
}
