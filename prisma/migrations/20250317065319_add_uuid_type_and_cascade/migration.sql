/*
  Warnings:

  - The primary key for the `Building` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Competition` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `EventTag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ExpoStaff` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Floor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `IntaniaLocation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Major` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Visitor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Workshop` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WorkshopSlot` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WorkshopStaff` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `_EventToEventTag` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `id` on the `Building` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Competition` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `intaniaLocationId` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `EventTag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `ExpoStaff` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Floor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `buildingId` to the `Floor` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `IntaniaLocation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Major` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Room` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `floorId` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Visitor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Workshop` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `intaniaLocationId` on the `Workshop` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `WorkshopSlot` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `workshopId` to the `WorkshopSlot` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `WorkshopStaff` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `workshopId` on the `WorkshopStaff` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `A` on the `_EventToEventTag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `B` on the `_EventToEventTag` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_intaniaLocationId_fkey";

-- DropForeignKey
ALTER TABLE "Floor" DROP CONSTRAINT "Floor_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_floorId_fkey";

-- DropForeignKey
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_intaniaLocationId_fkey";

-- DropForeignKey
ALTER TABLE "WorkshopSlot" DROP CONSTRAINT "WorkshopSlot_workshopId_fkey";

-- DropForeignKey
ALTER TABLE "WorkshopStaff" DROP CONSTRAINT "WorkshopStaff_workshopId_fkey";

-- DropForeignKey
ALTER TABLE "_EventToEventTag" DROP CONSTRAINT "_EventToEventTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_EventToEventTag" DROP CONSTRAINT "_EventToEventTag_B_fkey";

-- AlterTable
ALTER TABLE "Building" DROP CONSTRAINT "Building_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Building_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Competition" DROP CONSTRAINT "Competition_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Competition_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "intaniaLocationId",
ADD COLUMN     "intaniaLocationId" UUID NOT NULL,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "EventTag" DROP CONSTRAINT "EventTag_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "EventTag_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ExpoStaff" DROP CONSTRAINT "ExpoStaff_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "ExpoStaff_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Floor" DROP CONSTRAINT "Floor_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "buildingId",
ADD COLUMN     "buildingId" UUID NOT NULL,
ADD CONSTRAINT "Floor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "IntaniaLocation" DROP CONSTRAINT "IntaniaLocation_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "IntaniaLocation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Major" DROP CONSTRAINT "Major_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Major_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "floorId",
ADD COLUMN     "floorId" UUID NOT NULL,
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Visitor" DROP CONSTRAINT "Visitor_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Visitor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Workshop" DROP CONSTRAINT "Workshop_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "intaniaLocationId",
ADD COLUMN     "intaniaLocationId" UUID NOT NULL,
ADD CONSTRAINT "Workshop_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "WorkshopSlot" DROP CONSTRAINT "WorkshopSlot_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "workshopId",
ADD COLUMN     "workshopId" UUID NOT NULL,
ADD CONSTRAINT "WorkshopSlot_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "WorkshopStaff" DROP CONSTRAINT "WorkshopStaff_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "workshopId",
ADD COLUMN     "workshopId" UUID NOT NULL,
ADD CONSTRAINT "WorkshopStaff_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "_EventToEventTag" DROP CONSTRAINT "_EventToEventTag_AB_pkey",
DROP COLUMN "A",
ADD COLUMN     "A" UUID NOT NULL,
DROP COLUMN "B",
ADD COLUMN     "B" UUID NOT NULL,
ADD CONSTRAINT "_EventToEventTag_AB_pkey" PRIMARY KEY ("A", "B");

-- CreateIndex
CREATE INDEX "_EventToEventTag_B_index" ON "_EventToEventTag"("B");

-- AddForeignKey
ALTER TABLE "WorkshopStaff" ADD CONSTRAINT "WorkshopStaff_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "Workshop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Floor" ADD CONSTRAINT "Floor_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_floorId_fkey" FOREIGN KEY ("floorId") REFERENCES "Floor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_intaniaLocationId_fkey" FOREIGN KEY ("intaniaLocationId") REFERENCES "IntaniaLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workshop" ADD CONSTRAINT "Workshop_intaniaLocationId_fkey" FOREIGN KEY ("intaniaLocationId") REFERENCES "IntaniaLocation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkshopSlot" ADD CONSTRAINT "WorkshopSlot_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "Workshop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToEventTag" ADD CONSTRAINT "_EventToEventTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToEventTag" ADD CONSTRAINT "_EventToEventTag_B_fkey" FOREIGN KEY ("B") REFERENCES "EventTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
