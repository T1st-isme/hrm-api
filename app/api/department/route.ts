import { NextResponse } from 'next/server';
import { DepartmentService } from '@/app/Services/department.service';
import { Department } from '@prisma/client';

const departmentService = new DepartmentService();

export async function GET() {
  try {
    const departments = await departmentService.getAllDepartments();
    return NextResponse.json(departments, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching departments', error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const department: Department = await req.json();
    const createdDepartment = await departmentService.createDepartment(department);
    return NextResponse.json(createdDepartment, { status: 201 });
  } catch (error) {
    console.error('Error creating department:', error);
    return NextResponse.json({ message: 'Error creating department', error: error as Error }, { status: 500 });
  }
}
