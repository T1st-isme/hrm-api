import { NextResponse } from 'next/server';
import { DepartmentService } from '@/app/Services/department.service';
import { Department } from '@prisma/client';

const departmentService = new DepartmentService();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  try {
    const department = await departmentService.getDepartment(id);
    return NextResponse.json(department, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching department', error }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const updatedData: Department = await req.json();

  try {
    const updatedDepartment = await departmentService.updateDepartment(id, updatedData);
    return NextResponse.json(updatedDepartment, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error updating department', error }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  try {
    await departmentService.deleteDepartment(id);
    return NextResponse.json({ message: 'Department deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error deleting department', error }, { status: 500 });
  }
}
