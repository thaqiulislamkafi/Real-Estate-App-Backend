-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('APARTMENT', 'LAND', 'HOUSE', 'COMMERCIAL');

-- CreateTable
CREATE TABLE "Property" (
    "id" SERIAL NOT NULL,
    "agentId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "priceRange" TEXT NOT NULL,
    "propertyType" "PropertyType" NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isAdvertised" BOOLEAN NOT NULL DEFAULT false,
    "isBought" BOOLEAN NOT NULL DEFAULT false,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
