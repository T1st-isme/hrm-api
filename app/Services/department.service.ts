import { Department } from "@prisma/client";
import prisma from "../lib/prisma";

export class DepartmentService {

  async getAllDepartments() {
    return prisma.department.findMany();
  }

  async createDepartment(department: Department): Promise<Department> {
    return prisma.department.create({
      data: {
        ...department,
      },
    });
  }

  async getDepartment(id: string) {
    return prisma.department.findUnique({
      where: { id },
    });
  }

  async updateDepartment(id: string, department: Department): Promise<Department> {
    return prisma.department.update({
      where: { id },
      data: {
        ...department,
      },
    });
  }

  async deleteDepartment(id: string) {
    return prisma.department.delete({
      where: { id },
    });
  }

}
