'use strict';

const Nodal = require('nodal');

class CreateSites extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2017012421491140;
  }

  up() {

    return [
      this.createTable("sites", [

          {
              "name":"url","type":"string"
          },
          {
              "name":"directory","type":"string"
          },
          {
              "name":"entire_site","type":"bool"
          }

      ])
    ];

  }

  down() {

    return [
      this.dropTable("sites")
    ];

  }

}

module.exports = CreateSites;