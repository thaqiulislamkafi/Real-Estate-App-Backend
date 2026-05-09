/*
  Warnings:

  - A unique constraint covering the columns `[propertyId,userId]` on the table `BookedProperty` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[bookedPropertyId]` on the table `SoldProperty` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[propertyId,userId]` on the table `SoldProperty` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BookedProperty_propertyId_userId_key" ON "BookedProperty"("propertyId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "SoldProperty_bookedPropertyId_key" ON "SoldProperty"("bookedPropertyId");

-- CreateIndex
CREATE UNIQUE INDEX "SoldProperty_propertyId_userId_key" ON "SoldProperty"("propertyId", "userId");
