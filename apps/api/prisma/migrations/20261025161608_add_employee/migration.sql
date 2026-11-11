-- CreateTable
CREATE TABLE "employees" (
    "id" SERIAL NOT NULL,
    "organization_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "weekly_capacity_hours" DECIMAL(5,2) NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_org_id_unique" ON "employees"("organization_id", "id");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Require positive weekly capacity.
ALTER TABLE "employees"
ADD CONSTRAINT "employees_weekly_capacity_hours_check"
CHECK ("weekly_capacity_hours" > 0);