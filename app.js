const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => {
    console.log("Server connect successfully");
  })
  .catch((e) => {
    console.log("error in connection", e);
  });

const academicSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  grade: String,
  subject: String,
});
const AcademicModel = mongoose.model("Academic", academicSchema);

const createAcademic = async () => {
  try {
    const allAcademic = await AcademicModel.create([
      { studentId: 11, name: "Mohan", departmment: "CSE", subject: "DBMS" },
      { studentId: 22, name: "Sakshi", departmment: "CIVIL", subject: "COA" },
      { studentId: 33, name: "Somshekar", departmment: "MECH", subject: "OS" },
      { studentId: 44, name: "Noor", departmment: "EECE", subject: "CN" },
    ]);
  } catch (error) {
    console.log("error while creating Academic Model", error);
  }
};
createAcademic();

const getacademic = async () => {
  const academicresult = await AcademicModel.find();
  console.log(academicresult);
};
getacademic();

const curricularSchema = new mongoose.Schema({
  studentId: Number,
  name: String,
  activityType: String,
  Duration: String,
  achievements: String,
});

const CurricularModel = new mongoose.model("Curricular", curricularSchema);

const createCurricular = async () => {
  try {
    const allCurricular = await CurricularModel.create([
      {
        studentId: 11,
        name: "Mohan",
        activityType: "Golf",
        Duration: "4th Year",
        achievements: "2nd",
      },
      {
        studentId: 22,
        name: "Sakshi",
        activityType: "High Jump",
        Duration: "2nd Year",
        achievements: "3rd",
      },
      {
        studentId: 33,
        name: "Somshekar",
        activityType: "swimming",
        Duration: "3rd Year",
        achievements: "4th",
      },
      {
        studentId: 44,
        name: "Noor",
        activityType: "Volleyball",
        Duration: "1st Year",
        achievements: "1st",
      },
    ]);
  } catch (error) {
    console.log("error while createing curricular Model", error);
  }
};
createCurricular();

const getCurricular = async () => {
  const curricularResult = await CurricularModel.find();
  console.log(curricularResult);
};
getCurricular();