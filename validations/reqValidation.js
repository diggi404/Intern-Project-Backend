const validateSchema = (schema, req, res) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    res.status(400).send({
      message: error["details"][0]["message"],
    });
    return false;
  } else {
    return true;
  }
};

module.exports = {
  validateSchema,
};
