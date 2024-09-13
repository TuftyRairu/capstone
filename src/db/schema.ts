
import { pgTable, serial, text, timestamp, pgEnum } from "drizzle-orm/pg-core";


export const roleEnum = pgEnum("role", [ "admin", "student" ]);

export const userTable = pgTable("user", {
	id: text("id").notNull().primaryKey(),
    username: text("username").notNull().unique(),
    password_hash: text("password_hash").notNull()
});

export const sessionTable = pgTable("session", {
	id: text("id").primaryKey(),
	userId: text("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});
