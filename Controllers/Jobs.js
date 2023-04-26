const Job = require("../model/jobs");

//get all
const getJobs = (req, res) => {

    Job.find()
        .then((jobs) => {
            res.json(jobs);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });

};

//get one
const getOneJob = (req, res) => {
    Job.findById({ _id: req.params.jobID })
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

//create async
const createJob = (req, res) => {
    const job = new Job({

        company: req.body.company,
        logo: req.body.logo,
        logoBackground: req.body.logoBackground,
        position: req.body.position,
        postedAt: req.body.postedAt,
        contract: req.body.contract,
        location: req.body.location,
        website: req.body.website,
        apply: req.body.apply,
        description: req.body.description,

        requirements: req.body.requirements,
        role: req.body.role,

    });
    job.save()
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

//update async
const updateJob = (req, res) => {
    Job.findOneAndUpdate(
        { _id: req.params.jobID },
        {
            $set: {
                company: req.body.company,
                logo: req.body.logo,
                logoBackground: req.body.logoBackground,
                position: req.body.position,
                postedAt: req.body.postedAt,
                contract: req.body.contract,
                location: req.body.location,
                website: req.body.website,
                apply: req.body.apply,
                description: req.body.description,

                requirements: req.body.requirements,
                role: req.body.role,
            },
        },
        { new: true })
        .then((job) => {
            res.json(job);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
};

//Delete async
const deleteJob = (req, res) => {
    Job.deleteOne({ _id: req.params.jobID })
        .then(() => res.json({ message: "Job Deleted" }))
        .catch((err) => res.send(err));
};

//search
const getSearchJobOffers = async (req, res) => {
    const { position, contract, location } = req.query

    try {
        const query = {}
        if (position) query.position = position
        if (contract) query.contract = contract
        if (location) query.location = location
        
        console.log(query);

        const jobOffers = await Job.find(query)
        res.json(jobOffers)
    } catch (err) {
        res.status(500).send(err.message)
    };
};



module.exports = {
    getJobs,
    getOneJob,
    createJob,
    updateJob,
    deleteJob,
    getSearchJobOffers,
};

