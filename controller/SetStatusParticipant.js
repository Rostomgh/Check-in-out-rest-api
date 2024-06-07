const express = require("express");
const Participant = require("../model/participantSchema");
const router = express.Router();

const setstatus = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);

    if (!participant) {
      return res.status(404).send({ message: "Participant not found" });
    }

    participant.status.isChecked = req.body.isChecked !== undefined ? req.body.isChecked : participant.status.isChecked;
    participant.status.checkedInAt = req.body.checkedInAt || participant.status.checkedInAt;
    participant.status.checkedOutAt = req.body.checkedOutAt || participant.status.checkedOutAt;

    await participant.save();
    res.json(participant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { setstatus };
