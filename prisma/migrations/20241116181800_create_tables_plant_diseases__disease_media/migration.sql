/*
  Warnings:

  - You are about to alter the column `type` on the `plant_media` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(15)`.

*/
-- AlterTable
ALTER TABLE `plant_media` MODIFY `type` VARCHAR(15) NOT NULL;

-- CreateTable
CREATE TABLE `plant_diseases` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `plant_id` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `prevention` TEXT NOT NULL,
    `treatment` TEXT NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disease_media` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `disease_id` INTEGER UNSIGNED NOT NULL,
    `type` VARCHAR(15) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `plant_diseases` ADD CONSTRAINT `plant_diseases_plant_id_fkey` FOREIGN KEY (`plant_id`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `disease_media` ADD CONSTRAINT `disease_media_disease_id_fkey` FOREIGN KEY (`disease_id`) REFERENCES `plant_diseases`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
