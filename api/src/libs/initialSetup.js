import Role from "../models/role.model.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count > 0) return;

    await Promise.all([
      new Role({ name: "citizen" }).save(),
      new Role({ name: "employee.sc" }).save() /* Comunicación social */,
      new Role({ name: "employee.sl" }).save() /* Alumbrado público */,
      new Role({ name: "employee.dw" }).save() /* Agua potable */,
      new Role({ name: "employee.es" }).save() /* Medio ambiente */,
      new Role({ name: "employee.cs" }).save() /* Contraloría */,
      new Role({ name: "employee.op" }).save() /* Oficialía de partes */,
      new Role({ name: "employee.sp" }).save() /* Fomento deportivo */,
    ]);
  } catch (error) {
    console.log(error);
  }
};

export const createUsers = async () => {
  try {
    const count = await User.estimatedDocumentCount();
    const roles = await Role.find()

    if (count > 0) return;
    
    await Promise.all([
      new User({
        email: "ciudadano1@gmail.com",
        password: await bcrypt.hash("ciudadano1", 10),
        firstname: "Juan",
        lastname: "Perez",
      }).save() /* Ciudadano */,
      new User({
        email: "ciudadano2@gmail.com",
        password: await bcrypt.hash("ciudadano2", 10),
        firstname: "Jose",
        lastname: "García",
      }).save() /* Ciudadano */,
      new User({
        email: "empleado1@gmail.com",
        password: await bcrypt.hash("empleado1", 10),
        firstname: "Fomento",
        lastname: "Deportivo",
        role: roles.find(role => role.name === "employee.sp")._id
      }).save() /* Fomento deportivo */,
      new User({
        email: "empleado2@gmail.com",
        password: await bcrypt.hash("empleado2", 10),
        firstname: "Comunicación",
        lastname: "Social",
        role: roles.find(role => role.name === "employee.sc")._id
      }).save() /* Comunicación social */,
      new User({
        email: "empleado3@gmail.com",
        password: await bcrypt.hash("empleado3", 10),
        firstname: "Alumbrado",
        lastname: "Públicp",
        role: roles.find(role => role.name === "employee.sl")._id
      }).save() /* Alumbrado público sl */,
      new User({
        email: "empleado4@gmail.com",
        password: await bcrypt.hash("empleado4", 10),
        firstname: "Agua",
        lastname: "Potable",
        role: roles.find(role => role.name === "employee.dw")._id
      }).save() /* Agua potable */,
      new User({
        email: "empleado5@gmail.com",
        password: await bcrypt.hash("empleado5", 10),
        firstname: "Medio",
        lastname: "Ambiente",
        role: roles.find(role => role.name === "employee.es")._id
      }).save() /* Medio ambiente */,
      new User({
        email: "empleado6@gmail.com",
        password: await bcrypt.hash("empleado6", 10),
        firstname: "Área",
        lastname: "Contraloría",
        role: roles.find(role => role.name === "employee.cs")._id
      }).save() /* Contraloría */,
      new User({
        email: "empleado7@gmail.com",
        password: await bcrypt.hash("empleado7", 10),
        firstname: "Oficialía de",
        lastname: "Partes",
        role: roles.find(role => role.name === "employee.op")._id
      }).save() /* Oficialía de partes */,
    ]);
  } catch (error) {
    console.log(error);
  }
};
