import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Language",
  tableName: "language",
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
    english_name: {
      type: "text",
      nullable: true,
    },
  },
  relations: {
    details: {
      target: "Details",
      type: "many-to-many",
      mappedBy: "spoken_languages",
    },
  },
});
