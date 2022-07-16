function sayHelloTo(req, res) {
  const { name } = req.params;
  res.send("Hello " + name + "!");
}

module.exports = sayHelloTo;
