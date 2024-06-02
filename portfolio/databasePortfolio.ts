import { MongoClient, Collection, WithId, ObjectId } from "mongodb";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import { error, log } from "console";
import { Message, User } from "./types";

dotenv.config();
const uri: string = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const collectionMessages: Collection<Message> = client
  .db("portfolio")
  .collection<Message>("Messages");

const collectionUser: Collection<User> = client
  .db("portfolio")
  .collection<User>("User");

const saltRounds: number = 10;

export async function voegBericht(message: Message) {
  if (!message.name || message.name === "") {
    throw new Error(
      "Gelieve een naam in te voeren. Dit veld mag niet leeg zijn."
    );
  }

  if (message.name.length === 1) {
    throw new Error(
      "De opgegeven naam is te kort. Voer een geldige naam in en probeer opnieuw."
    );
  }

  if (!message.mail || message.mail === "") {
    throw new Error(
      "Ongeldig e-mailadres. Het e-mailadres moet ingevuld worden. Probeer het opnieuw."
    );
  }

  if (message.mail.length < 5) {
    throw new Error(
      "Ongeldig e-mailadres. Het e-mailadres is te kort. Gelieve opnieuw te proberen."
    );
  }

  if (!message.mail.includes("@")) {
    throw new Error(
      "Email bevat geen apenstaartje. Gelieve opnieuw te proberen."
    );
  }

  if (
    !message.mail.includes(".") ||
    message.mail.lastIndexOf(".") < message.mail.lastIndexOf("@")
  ) {
    throw new Error(
      "Ongeldig e-mailadres. Het domeinnaam gedeelte ontbreekt of is ongeldig. Gelieve opnieuw te proberen."
    );
  }

  if (!message.text || message.text === "") {
    throw new Error(
      "Het bericht moet worden ingevuld. Voeg meer informatie toe en probeer opnieuw."
    );
  }

  if (message.text.length < 10) {
    throw new Error(
      "Het bericht moet minimaal 10 tekens bevatten. Voeg meer informatie toe en probeer opnieuw."
    );
  }

  await collectionMessages.insertOne(message);
}

export async function insertMessage(message: Message) {
  if (!message.name || message.name === "") {
    throw new Error("Please enter a name. This field cannot be left empty.");
  }

  if (message.name.length === 1) {
    throw new Error(
      "The provided name is too short. Please enter a valid name and try again."
    );
  }

  if (!message.mail || message.mail === "") {
    throw new Error(
      "Invalid email address. The email address must be provided. Please try again."
    );
  }

  if (message.mail.length < 5) {
    throw new Error(
      "Invalid email address. The email address is too short. Please try again."
    );
  }

  if (!message.mail.includes("@")) {
    throw new Error("Email does not contain the '@' symbol. Please try again.");
  }

  if (
    !message.mail.includes(".") ||
    message.mail.lastIndexOf(".") < message.mail.lastIndexOf("@")
  ) {
    throw new Error(
      "Invalid email address. The domain part is missing or invalid. Please try again."
    );
  }

  if (!message.text || message.text === "") {
    throw new Error(
      "The message must be provided. Please add more information and try again."
    );
  }

  if (message.text.length < 10) {
    throw new Error(
      "The message must be at least 10 characters long. Please add more information and try again."
    );
  }

  await collectionMessages.insertOne(message);
}

async function user() {
  if ((await collectionUser.countDocuments()) != 1) {
    await collectionUser.insertOne({
      username: "imranx",
      password: await bcrypt.hash(process.env.ADMINPS!, saltRounds),
    });
  }
}

export async function login(user: User) {
  const databaseUser: WithId<User> | null = await collectionUser.findOne({
    username: user.username,
  });

  if (!user.username || !user.password) {
    return false;
  }

  if (await bcrypt.compare(user.password, databaseUser!.password)) {
    console.log(true);

    return true;
  }
  return false;
}

export async function getMessages() {
  return await collectionMessages.find({}).toArray();
}

async function exit() {
  try {
    await client.close();
    console.log("Disconnected from database");
  } catch (error: any) {
    console.error(error.message);
  } finally {
    process.exit(0);
  }
}

export async function connect() {
  try {
    await client.connect();
    await user();
    console.log("Connected to database");
    process.on("SIGINT", exit);
  } catch (error: any) {
    console.error(error.message);
  }
}
