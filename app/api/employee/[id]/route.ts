// app/api/employee/[id]/route.ts

import { NextResponse } from 'next/server';
import { EmployeeService } from '@/app/Services/employee.service';

const employeeService = new EmployeeService();


export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    const employee = await employeeService.getEmployee(id);
    if (!employee) {
      return NextResponse.json({ message: 'Employee not found' }, { status: 404 });
    }
    return NextResponse.json(employee, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching employee', error }, { status: 500 });
  }
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const updatedData = await req.json();

  try {
    const updatedEmployee = await employeeService.updateEmployee(id, updatedData);
    return NextResponse.json(updatedEmployee, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating employee', error }, { status: 500 });
  }
}


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await employeeService.deleteEmployee(id);
    return NextResponse.json({ message: 'Employee deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting employee', error }, { status: 500 });
  }
}
