import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "change-this-secret";

/**
 * تشفير كلمة المرور
 */
export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

/**
 * التحقق من كلمة المرور
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
) {
  return await bcrypt.compare(password, hashedPassword);
}

/**
 * إنشاء JWT
 */
export function createToken(payload: {
  id: number;
  email: string;
  role: string;
}) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

/**
 * التحقق من JWT
 */
export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}
