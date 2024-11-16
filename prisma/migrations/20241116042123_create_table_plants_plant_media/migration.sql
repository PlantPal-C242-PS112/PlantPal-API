-- CreateTable
CREATE TABLE `plants` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `cultivation_tips` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plant_media` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `plant_id` INTEGER UNSIGNED NOT NULL,
    `cultivation` BOOLEAN NOT NULL DEFAULT false,
    `type` VARCHAR(255) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `plant_media` ADD CONSTRAINT `plant_media_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
