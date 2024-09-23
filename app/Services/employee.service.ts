import { Employee } from "@prisma/client";
import prisma from "../lib/prisma";
import { EmployeeDto } from "../api/employee/type";

export class EmployeeService {

  async getAllEmployee() {
    return prisma.employee.findMany();
  }

  async getEmployee(id: string) {
    const employee = await prisma.employee.findUnique({
      where: { id },
    });
    return employee;
  }

  async createEmployee(employee: EmployeeDto ): Promise<Employee> {
    return prisma.employee.create({
      data: {
        ...employee,
        dateOfBirth: new Date(employee.dateOfBirth),
      },
    });
  }

  async updateEmployee(id: string, employee: Partial<Employee>) {
    return prisma.employee.update({
      where: { id },
      data: employee,
    });
  }

  async deleteEmployee(id: string) {
    return prisma.employee.delete({
      where: { id },
    });
  }
}
