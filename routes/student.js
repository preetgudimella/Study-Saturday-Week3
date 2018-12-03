
const router = require('express').Router();
const Student = require('../db/models/students');


// Getting all the students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({ include: { all: true } });             // { include: { all: true } } brings in more data (eg test info for each student)
    res.send(students);
  } catch (error) {
    next(error);
  }
});

// Getting a specific student by Id
router.get('/:id', async (req, res, next) => {
  try {
    let student = await Student.findById(req.params.id);
    if (student) {
      res.send(student);
    } else {
      res.status(404).send('Student not found');
    }
  } catch (error) {
    next(error);
  }
});

// Creating a new student
router.post('/', async (req, res, next) => {
  try {
    let student = await Student.create(req.body);
    res.status(201).send(student);
  } catch (err) {
    next(err);
  }
});

// Updating a student
router.put('/:id', async (req, res, next) => {
  try {
    let updatedStudentInfo = await Student.update(req.body, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    res.send(updatedStudentInfo[1]);
  } catch (err) {
    next(err);
  }
});

// Deleting a student
router.delete('/:id', async (req, res, next) => {
  try {
    await Student.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
