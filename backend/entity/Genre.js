import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Genre",
  tableName: "genre",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "text",
      unique: true,
    },
  },
  relations: {
    details: {
      target: "Details",
      type: "many-to-many",
      mappedBy: "genres",
    },
  },
});
