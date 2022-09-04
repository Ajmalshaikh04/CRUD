const express = require("express")
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllera/goalController")

// router.get("/", getGoals)
// router.post("/", setGoal)  //same route can chain
router.route("/").get(getGoals).post(setGoal)

// router.put("/:id", updateGoals)
// router.delete("/:id", deleteGoals)
router.route("/:id").delete(deleteGoal).put(updateGoal)



module.exports = router