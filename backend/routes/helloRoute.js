const { Router } = require("express");
const router = Router();
// const protect = require("../middleware/authMiddleware");

const sayHello = require("../controllers/controler1");
const sayHelloTo = require("../controllers/controler2");

// const {} = require("../controllers/userController");

router.get("/", sayHello);
router.get("/:name", sayHelloTo);

module.exports = router;
