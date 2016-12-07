/**
 * Contacts Schema
 * 
 */
import mongoose from 'mongoose';

export default function contactsSchema() {
  return mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    birthdate: { type: date},
    pic: String,
    country: String,
    phone_number: Number
  });
}
