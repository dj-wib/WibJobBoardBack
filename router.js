const router = require("express").Router();


const { getJobs, getOneJob, createJob, updateJob, deleteJob, getSearchJobOffers } = require("./Controllers/Jobs");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

module.exports = router;

//read
router.get("/api/jobs", getJobs);
//search ATTENTION A LA PRIORITE DE PARAMETRE
router.get("/api/jobs/search", getSearchJobOffers);


//read one
router.get("/api/jobs/:jobID", getOneJob);
//create
router.post("/api/jobs", createJob);
//update
router.put("/api/jobs/:jobID", updateJob);
//Deleted
router.delete("/api/jobs/:jobID", deleteJob);

