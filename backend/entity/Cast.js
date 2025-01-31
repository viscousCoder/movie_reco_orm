import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Casts",
  tableName: "casts",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    cast_id: {
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
    character: {
      type: "varchar",
      length: 255,
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
