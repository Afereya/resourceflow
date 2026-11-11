-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "organization_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_org_id_unique" ON "projects"("organization_id", "id");

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Allow an unknown end date, but reject an end before the start.
ALTER TABLE "projects"
ADD CONSTRAINT "projects_dates_check"
CHECK ("end_date" IS NULL OR "end_date" >= "start_date");