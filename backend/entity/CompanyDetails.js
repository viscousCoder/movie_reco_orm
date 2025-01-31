import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "CompanyDetails",
  tableName: "company_details",
  columns: {
    id: {
      primary: true,
      type: "int",
    },
    name: {
      type: "text",
      unique: true,
    },
    logo_path: {
      type: "text",
      nullable: true,
    },
  },
  relations: {
    details: {
      target: "Details",
      type: "many-to-many",
      mappedBy: "production_companies",
    },
  },
});
