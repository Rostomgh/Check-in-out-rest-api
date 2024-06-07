const express = require("express");
const router = express.Router();
const { setstatus } = require("../controller/SetStatusParticipant");
const { getParId } = require("../controller/PartcipantController");
const Participant = require("../model/participantSchema");

router.post("/", async (req, res) => {
  if (req.body.phone.length !== 10) {
    return res.status(400).send({
      message: "Phone number should be 10 digits",
    });
  }
  const participant = new Participant({
    fullname: req.body.fullname,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    city: req.body.city,
  });

  try {
    await participant.save();
    res.json(participant);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", getParId);
router.get("/:id", setstatus);

module.exports = router;
