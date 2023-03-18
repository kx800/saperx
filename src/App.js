
import './App.css';
import Form from './components/Form';

import React, { useState } from 'react';

function PhoneBook() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '', data: '', cpf: '', phone: '' });
  const [editing, setEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact({ name: '', email: '', data: '', cpf: '', phone: '' });
  };

  const handleEditContact = (index) => {
    setNewContact(contacts[index]);
    setEditing(true);
    setEditingIndex(index);
  };

  const handleSaveContact = () => {
    const updatedContacts = [...contacts];
    updatedContacts[editingIndex] = newContact;
    setContacts(updatedContacts);
    setNewContact({ name: '', email: '', data: '', cpf: '', phone: '' });
    setEditing(false);
    setEditingIndex(null);
  };

  const handleDeleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (

    <div className="row">
      <h1 className="title">Agenda Telefônica</h1>

      <div className="col-md-3">
        <form>
          <label>
            <span>Name:</span>
            <input
              type="text"
              name="name"
              value={newContact.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Email:</span>
            <input
              type="text"
              name="email"
              value={newContact.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Data Nasc.:</span>
            <input
              type="text"
              name="data"
              value={newContact.data}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>CPF:</span>
            <input
              type="text"
              name="cpf"
              value={newContact.cpf}
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Phone:</span>
            <input
              type="text"
              name="phone"
              value={newContact.phone}
              onChange={handleInputChange}
            />
          </label>
          {editing ? (
            <button className="btn btn-primary" type="button" onClick={handleSaveContact}>
              Salvar
            </button>
          ) : (
            <button className="btn btn-primary" type="button" onClick={handleAddContact}>
              Adicionar
            </button>
          )}
        </form>
      </div>
	

      <div className="col-md-9">

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th scope="col">Data Nasc.</th>
              <th scope="col">CPF</th>
              <th scope="col">Número de Tel.</th>
              <th scope="col">Editar</th>
              <th scope="col">Deletar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <th scope="row">Giga Chad</th>
                <td>email@email.com</td>
                <td>01/01/1980</td>
                <td>1234567890</td>
                <td>11 8888-8888</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <th scope="row">Aaaaaaa</th>
                <td>aaaaaa@aaaaaaa.aaaaaa</td>
                <td>aa/aa/aaaa</td>
                <td>aaaaaaaaa-aa</td>
                <td>aa aaaa-aaaa</td>
                <td>a</td>
                <td>a</td>
              </tr>

              {contacts.map((contact, index) => (
                <tr>
                <th scope="row" key={index}>{contact.name}</th>
                <td>{contact.email}</td>
                <td>{contact.data}</td>
                <td>{contact.cpf}</td>
                <td>{contact.phone}</td>
                <td>
                  <button className="btn btn-secondary" type="button" onClick={() => handleEditContact(index)}> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                  </svg>
                    </button>
                </td>
                <td>
                  <button className="btn btn-secondary" type="button" onClick={() => handleDeleteContact(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg> 
                  </button>
                </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default PhoneBook;

