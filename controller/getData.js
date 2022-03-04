const dataModel = require('../model/dataModel');
const getData = async (req, res) => {
  try {
    let data = await dataModel.find().lean();
    let person = await dataModel.findOne({ name: 'Gerta Turbern' });
    console.log(person);
    console.log(data);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Server error' });
  }
};
module.exports = getData;
