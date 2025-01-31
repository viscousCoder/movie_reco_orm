// const EntitySchema = require("typeorm").EntitySchema;
import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "AllTrending",
  tableName: "alltrendinggs",
  columns: {
    id: {
      primary: true,
      type: "int",
    },
    title: {
      type: "varchar",
      nullable: true,
    },
    name: {
      type: "varchar",
      nullable: true,
    },
    backdrop_path: {
      type: "varchar",
      nullable: true,
    },
    profile_path: {
      type: "varchar",
      nullable: true,
    },
    poster_path: {
      type: "varchar",
      nullable: true,
    },

    release_date: {
      type: "varchar",
      nullable: true,
    },
    first_air_date: {
      type: "varchar",
      nullable: true,
    },
    vote_average: {
      type: "float",
      nullable: true,
    },
    vote_count: {
      type: "int",
      nullable: true,
    },
    media_type: {
      type: "varchar",
      nullable: true,
    },
    popularity: {
      type: "varchar",
      nullable: true,
    },
  },
});
