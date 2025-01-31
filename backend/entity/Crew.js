const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Crew",
  tableName: "crew",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    crew_id: {
      type: "varchar",
      length: 50,
      nullable: true,
    },
    name: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    profile_path: {
      type: "varchar",
      length: 255,
      nullable: true,
    },
    job: {
      type: "varchar",
      length: 100,
      nullable: true,
    },
  },
  relations: {
    credit: {
      target: "Credits",
      type: "many-to-one",
      joinColumn: { name: "credit_id" },
      onDelete: "CASCADE",
    },
  },
});
