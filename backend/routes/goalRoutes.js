const express = require("express")
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controller/goalController")

const { protect } = require("../middleware/authMiddleware")

// router.get("/", getGoals)
// router.post("/", setGoal)  //same route can chain
router.route("/").get(protect, getGoals).post(protect, setGoal)

// router.put("/:id", updateGoals)
// router.delete("/:id", deleteGoals)
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal)



module.exports = router