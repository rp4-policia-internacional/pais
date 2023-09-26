-- CreateTable
CREATE TABLE "Pais" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR NOT NULL,
    "gentilico" VARCHAR NOT NULL,
    "extensaoTerritorial" DECIMAL NOT NULL,
    "capital" VARCHAR NOT NULL,
    "continente" VARCHAR NOT NULL,
    "governo" VARCHAR NOT NULL,
    "idioma" VARCHAR NOT NULL,
    "populacao" DECIMAL NOT NULL,
    "moeda" VARCHAR NOT NULL,
    "emailDeContato" VARCHAR NOT NULL,
    "emailDepartamento" VARCHAR NOT NULL,
    "status" VARCHAR NOT NULL,
    "dataIngresso" DATE NOT NULL,

    CONSTRAINT "Pais_pkey" PRIMARY KEY ("id")
);
