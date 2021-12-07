export function photoFieldsValidation(
  name,
  description,
  creation_date,
  author,
  camponuevo
) {
  let validation = [];
  if (!name) {
    validation.push({ name: "El campo nombre es requerido" });
  }

  if (name.length < 3) {
    validation.push({
      name: "Name should be at least " + 3 + " characters.",
    });
  }

  if (!description) {
    validation.push({ description: "El campo description es requerido" });
  }

  if (description.length > 130 || description.length < 20) {
    validation.push({
      description:
        "Description should be " + 20 + " to " + 130 + " characters.",
    });
  }

  const badWordsList = ["monas", "chinas", "portainer"];
  /*
  const arrayDescription = description.split(" ");
  const badWordFilter = arrayDescription.filter(badWord => badWordList.includes(badWord)) 
*/
  const checkBadWord = badWordsList.find((badWord) =>
    description.includes(badWord)
  );
  console.log({ checkBadWord });

  if (checkBadWord) {
    validation.push({
      description:
        "El campo description has a bad Word and we dont allow bad words",
    });
  }

  if (!creation_date) {
    validation.push({ creation_date: "El campo creation_date es requerido" });
  }

  if (!author) {
    validation.push({ author: "El campo author es requerido" });
  }

  if (!Number.isInteger(author)) {
    validation.push({
      author: "author should be a number id.",
    });
  }

  if (!camponuevo) {
    validation.push({ camponuevo: "El campo camponuevo es requerido" });
  }

  if (!camponuevo.includes("@")) {
    validation.push({
      camponuevo: "camponuevo should be have the @ special character.",
    });
  }

  return validation;
  /*  if (name && description && creation_date && author && camponuevo) {
    return true;
  }

  return false;*/
}
