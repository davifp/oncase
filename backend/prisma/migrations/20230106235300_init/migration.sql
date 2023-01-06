-- CreateTable
CREATE TABLE "Holder" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "part" INTEGER NOT NULL,

    CONSTRAINT "Holder_pkey" PRIMARY KEY ("id")
);
