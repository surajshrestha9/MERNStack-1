import { join } from "path";

let objPerson = [
  {
    pid: 1,
    name: "shiva",
    address: "ktm",
  },
  {
    pid: 2,
    name: "jonas",
    address: "portugal",
  },
  {
    pid: 3,
    name: "Matilda",
    address: "UK",
  },
];

const indexController = (request, response) => {
  // response.render(join(process.cwd(), 'views', 'index'));
  response.status(200).send({ message: "HI, THERE" });
};

const homeController = (request, response) => {
  // response.render(join(process.cwd(), 'views', 'index'));
  // response.status(200).send({person: "All persons"});
  response.status(200).send(objPerson);
};
const singleController = (request, response) => {
  // response.render(join(process.cwd(), 'views', 'index'));
  //   response.status(200).send({person:"Individual Person."});
  // let { id } = request.params;
  // response.status(200).json({
  //   status: "Success",
  //   message: `Individual person - ${id}`,
  // });
  let { pid } = request.params.id;
  console.log(pid);
  objPerson.find((el) => {
    console.log(el.pid);
  });
};

const newController = (request, response) => {
  // response.render(join(process.cwd(), 'views', 'index'));
  response.status(201).send({ message: "Add new person." });
};

const putController = (request, response) => {
  // response.render(join(process.cwd(), 'views', 'index'));
  response.status(200).send({ message: "Update all person record." });
};

const patchController = (request, response) => {
  // response.render(join(process.cwd(), 'views', 'index'));
  response.status(200).send({ message: "Update person partially." });
};

const delController = (request, response) => {
  // response.render(join(process.cwd(), 'views', 'index'));
  response.status(200).send({ message: "Delete person." });
};

export {
  indexController,
  homeController,
  singleController,
  newController,
  putController,
  patchController,
  delController,
};
