const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Reviews",
  tableName: "reviews",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    author_name: {
      type: "text",
      nullable: true,
    },
    username: {
      type: "text",
      nullable: true,
    },
    avatar_path: {
      type: "text",
      nullable: true,
    },
    rating: {
      type: "int",
      nullable: true,
    },
    content: {
      type: "text",
      nullable: true,
    },
    created_at: {
      type: "timestamp without time zone",
      nullable: true,
    },
    type: {
      type: "varchar",
      length: 233,
      nullable: true,
    },
    reference_id: {
      type: "int",
      nullable: true,
    },
  },
});
