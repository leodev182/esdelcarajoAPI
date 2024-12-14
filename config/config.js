import dotenv from "dotenv";

dotenv.config();

if (
  !process.env.DB_NAME ||
  !process.env.DB_USER ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_HOST ||
  !process.env.DB_DIALECT ||
  !process.env.JWT_SECRET ||
  !process.env.JWT_EXPIRATION
) {
  throw new Error(
    "Faltan algunas variables de entorno necesarias en el archivo .env"
  );
}

export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_DIALECT = process.env.DB_DIALECT;

export const JWT_SECRET = process.env.JWT_SECRET;

export const JWT_EXPIRATION = process.env.JWT_EXPIRATION;
