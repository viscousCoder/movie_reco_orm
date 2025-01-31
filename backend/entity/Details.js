import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Details",
  tableName: "details",
  columns: {
    id: {
      primary: true,
      type: "int",
    },
    backdrop_path: {
      type: "text",
      nullable: true,
    },
    poster_path: {
      type: "text",
      nullable: true,
    },
    title: {
      type: "text",
      nullable: true,
    },
    name: {
      type: "text",
      nullable: true,
    },
    overview: {
      type: "text",
      nullable: true,
    },
    release_date: {
      type: "varchar",
      length: 233,
      nullable: true,
    },
    first_air_date: {
      type: "varchar",
      length: 233,
      nullable: true,
    },
    vote_average: {
      type: "float",
      nullable: true,
    },
    media_type: {
      type: "text",
      nullable: true,
    },
    runtime: {
      type: "int",
      nullable: true,
    },
  },
  relations: {
    production_companies: {
      target: "CompanyDetails",
      type: "many-to-many",
      joinTable: true,
      cascade: true,
    },
    genres: {
      target: "Genre",
      type: "many-to-many",
      joinTable: true,
      cascade: true,
    },
    spoken_languages: {
      target: "Language",
      type: "many-to-many",
      joinTable: true,
      cascade: true,
    },
  },
});
