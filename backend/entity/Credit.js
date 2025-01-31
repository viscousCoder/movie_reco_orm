import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Credits",
  tableName: "credits",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    credit_id: {
      type: "varchar",
      length: 50,
      unique: true,
    },
  },
  relations: {
    casts: {
      target: "Casts",
      type: "one-to-many",
      inverseSide: "credit",
      cascade: true,
    },
    crew: {
      target: "Crew",
      type: "one-to-many",
      inverseSide: "credit",
      cascade: true,
    },
  },
});
