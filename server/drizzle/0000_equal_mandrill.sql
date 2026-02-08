CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text,
	`created_at` integer,
	`updated_at` integer,
	`role` text DEFAULT 'user'
);
