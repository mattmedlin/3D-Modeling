CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL
);
--> statement-breakpoint
DROP TABLE "order_items";--> statement-breakpoint
DROP TABLE "orders";--> statement-breakpoint
DROP TABLE "products";