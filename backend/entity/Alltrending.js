const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "AllTrending", // Will use table name `category` as default behaviour.
  tableName: "alltrendinggs", // Optional: Provide `tableName` property to override the default behaviour for table name.
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
