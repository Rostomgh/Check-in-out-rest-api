const express = require("express");
const Participant = require("../model/participantSchema");
const getParId = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id);
    console.log(id);
    console.log(participant);
    res.json(participant);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  getParId,
};
