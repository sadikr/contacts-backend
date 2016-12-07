/**
 * Contacts Model
 */
import mongoose from 'mongoose';
import contactsSchema from '../schemas/contactsSchema';

class Contacts {
  constructor(args) {
    this.contacts = mongoose.model('contacts', contactsSchema);
    console.log('The contacts' + contacts);
  }

  // methods
}