const validateTitle = (req, res, next) => {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: 'The field "title" is require' });
  }
  if (body.title === "") {
    return res.status(400).json({ message: "title cannot be empty" });
  }
  next();
  //verifica os parametros da requisição da api, validação de campos
};
const validateStatus = (req, res, next) => {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: 'The field "status" is require' });
  }
  if (body.status === "") {
    return res.status(400).json({ message: "status cannot be empty" });
  }
  next();
  //verifica os parametros da requisição da api, validação de campos
};

module.exports = {
  validateTitle,
  validateStatus,
};
