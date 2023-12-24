import Complaint from "../models/complaint.model.js";
import { deletefile } from "../libs/deletefile.js";

export const createComplaint = async (req, res) => {
    console.log("funcion controller")
  const {
    date,
    firstname,
    lastnameP,
    lastnameM,
    phonenumber,
    email,
    colony,
    pcode,
    street,
    outnumber,
    innumber,
    staffname,
    staffcharge,
    staffarea,
    commentsCitizen,
  } = req.body;
  const image = req.file.filename;
  try {
    const newComplaint = new Complaint({
      user: req.user.id,
      firstname,
      lastnameP,
      lastnameM,
      phonenumber,
      date,
      email,
      colony,
      pcode,
      street,
      outnumber,
      innumber,
      staffname,
      staffcharge,
      staffarea,
      commentsCitizen,
      image,
    });

    const complaintSaved = await newComplaint.save();

    res.json({
      user: complaintSaved.user,
      date: complaintSaved.date,
      firstname: complaintSaved.firstname,
      lastnameP: complaintSaved.lastnameP,
      lastnameM: complaintSaved.lastnameM,
      phonenumber: complaintSaved.phonenumber,
      email: complaintSaved.email,
      colony: complaintSaved.colony,
      pcode: complaintSaved.pcode,
      street: complaintSaved.street,
      outnumber: complaintSaved.outnumber,
      innumber: complaintSaved.innumber,
      staffname: complaintSaved.staffname,
      staffcharge: complaintSaved.staffcharge,
      staffarea: complaintSaved.staffarea,
      commentsCitizen: complaintSaved.commentsCitizen,
      image: complaintSaved.image,
      createdAt: complaintSaved.createdAt,
      updatedAt: complaintSaved.updatedAt,
    });
  } catch (error) {
    deletefile(req.file);
    res.status(500).json({ message: error.message });
  }
};

export const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({ createdAt: "desc" });
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};