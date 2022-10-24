const createJob = async (req, res, next) => {
  res.send("create job");
};

const getAllJobs = async (req, res, next) => {
  res.send("get all jobs");
};

const updateJob = async (req, res, next) => {
  res.send("update job");
};

const deleteJob = async (req, res, next) => {
  res.send("delete job");
};

const showStats = async (req, res, next) => {
  res.send("show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
