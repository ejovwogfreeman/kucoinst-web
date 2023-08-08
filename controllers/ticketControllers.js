const Ticket = require("../models/ticketModel");

const createTicket = async (req, res) => {
  try {
    const { type, sec, row, seat, artist, title, date, venue, image } =
      req.body;
    let filesArray = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach((element) => {
        const file = {
          fileName: element.originalname,
          fileType: element.mimetype,
          link: `file/${element.filename}`,
        };
        filesArray.push(file);
      });
    }

    const newTicket = new Ticket({
      type,
      sec,
      row,
      seat,
      artist,
      title,
      date,
      venue,
      image: filesArray,
    });

    const savedTicket = await newTicket.save();

    res.status(201).json(savedTicket);
  } catch (error) {
    res.status(500).json({ error: "Error creating Ticket" });
  }
};

const updateTicket = async (req, res) => {
  try {
    const ticketId = req.params.id;

    const { type, sec, row, seat, artist, title, date, venue } = req.body;

    const updatedFields = {
      type,
      sec,
      row,
      seat,
      artist,
      title,
      date,
      venue,
    };

    const updateQuery = {
      $set: updatedFields,
      $unset: { image: 1 },
    };

    const ticket = await Ticket.findByIdAndUpdate(ticketId, updateQuery, {
      new: true,
    });

    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error updating ticket:", error);
    res.status(500).json({ error: "Failed to update ticket" });
  }
};

const deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    console.error("Error deleting ticket:", error);
    res.status(500).json({ error: "Failed to delete ticket" });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const allBlogs = await Ticket.find();

    res.status(200).json(allBlogs);
  } catch (error) {
    console.error("Error getting all tickets:", error);
    res.status(500).json({ error: "Failed to get tickets" });
  }
};

const getSingleTicket = async (req, res) => {
  try {
    const ticketId = req.params.id;

    const ticket = await Ticket.findById(ticketId);

    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    console.error("Error getting ticket by ID:", error);
    res.status(500).json({ error: "Failed to get ticket" });
  }
};

module.exports = {
  createTicket,
  updateTicket,
  deleteTicket,
  getAllTickets,
  getSingleTicket,
};
