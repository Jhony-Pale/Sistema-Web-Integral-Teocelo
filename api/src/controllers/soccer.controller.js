import Soccer from "../models/soccer.model.js";

export const createUpdateTeam = async (req, res) => {
  const {
    _id,
    type,
    position,
    teamname,
    plays,
    wins,
    draws,
    losses,
    goalsfavor,
    goalsagainst,
    goaldifference,
    points,
  } = req.body;

  try {
    if (
      _id.startsWith("Femenil") ||
      _id.startsWith("Libre") ||
      _id.startsWith("Infantil")
    ) {
      console.log("new team");
      const newTeam = new Soccer({
        type,
        position,
        teamname,
        plays,
        wins,
        draws,
        losses,
        goalsfavor,
        goalsagainst,
        goaldifference,
        points,
      });
      console.log(newTeam);
      const teamSaved = await newTeam.save();

      return res.json({
        type: teamSaved.type,
        position: teamSaved.position,
        teamname: teamSaved.teamname,
        plays: teamSaved.plays,
        wins: teamSaved.wins,
        draws: teamSaved.draws,
        losses: teamSaved.losses,
        goalsfavor: teamSaved.goalsfavor,
        goalsagainst: teamSaved.goalsagainst,
        goaldifference: teamSaved.goaldifference,
        points: teamSaved.points,
      });
    }
    const updates = {
      type,
      position,
      teamname,
      plays,
      wins,
      draws,
      losses,
      goalsfavor,
      goalsagainst,
      goaldifference,
      points,
    };

    const result = await Soccer.findByIdAndUpdate(
      _id,
      {
        $set: updates,
      },
      {
        new: true,
      }
    );

    if (!result) return res.status(400).json(["Registro no encontrado."]);

    return res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTeam = async (req, res) => {
  try {
    const result = await Soccer.findByIdAndDelete(req.params.id);
    if (!result) return res.status(200).json(["Registro no encontrado"]);
    return res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTeams = async (req, res) => {
  try {
    const soccer = await Soccer.find().sort({ position: "asc" });
    res.json(soccer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
