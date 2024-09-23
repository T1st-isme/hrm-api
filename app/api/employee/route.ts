import { NextResponse } from 'next/server';
import { EmployeeService } from '@/app/Services/employee.service';
import { EmployeeDto } from './type';

const employeeService = new EmployeeService();


// Handle GET request
export async function GET() {
  try {
    const employees = await employeeService.getAllEmployee();
    return NextResponse.json(employees, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching employees', error }, { status: 500 });
  }
}

// Handle POST request
export async function POST(req: Request) {
    try {
      const employee: EmployeeDto = await req.json();
      const createdEmployee = await employeeService.createEmployee(employee);
      return NextResponse.json(createdEmployee, { status: 201 });
    } catch (error) {
      console.error('Error creating employee:', error);
      return NextResponse.json({ message: 'Error creating employee', error: error as Error }, { status: 500 });
    }
  }
