const db = require('../util/database');

module.exports = class Guests {
  constructor(id, name, phone, gender) {
    this.id = id;
    this.name=name;
    this.phone=phone;
    this.gender =gender ;
  }

  // CREATE 
  static add(req, res) {
    //console.log('add():', req.body.name, req.body.price);
    return db.execute(
      'INSERT INTO guests (id, name,phone, gender) VALUES (?, ?, ?, ?)',
      [req.body.name, req.body.phone, req.body.gender]
    );
  }

  // READ
  static fetchAll() {
    return db.execute('SELECT * FROM guests');
  }

  static findById(id) {
    return db.execute('SELECT * FROM post where id = ?', [id]);
  }

  // UPDATE
  static updateById(req, res) {
    const id = req.body.id;
    const name = req.body.name;
    const phone = req.body.phone;
    const gender = req.body.gender;
    //const date = new Date();
    console.log('model:updateById()', id, name, phone, gender)
    return db.execute(
      'UPDATE guests SET name = ?, phone = ?, gender = ?,  WHERE id = ?', [title, category, date, article, id]
    );
  }


  // DELETE
  static deleteById(id) {
    return db.execute(
      'DELETE FROM post WHERE id = ?', [id]
    );
  }


  static getCount() {
    return db.execute('SELECT COUNT(*) as count FROM guests');
  }
};