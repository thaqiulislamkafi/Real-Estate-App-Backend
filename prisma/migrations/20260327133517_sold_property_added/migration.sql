-- CreateTable
CREATE TABLE "SoldProperty" (
    "id" SERIAL NOT NULL,
    "bookedPropertyId" INTEGER NOT NULL,
    "propertyId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "soldAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SoldProperty_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SoldProperty" ADD CONSTRAINT "SoldProperty_bookedPropertyId_fkey" FOREIGN KEY ("bookedPropertyId") REFERENCES "BookedProperty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoldProperty" ADD CONSTRAINT "SoldProperty_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoldProperty" ADD CONSTRAINT "SoldProperty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SoldProperty" ADD CONSTRAINT "SoldProperty_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
