import { Model, DataTypes } from "sequelize";
import { sequelize } from "../server";

class FormSubmission extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public message!: string;
}

// Initialize the FormSubmission model
FormSubmission.init(
  {
    // Define columns for the FormSubmission table
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "FormSubmission",
    tableName: "form_submissions",
  },
);

export { FormSubmission };
