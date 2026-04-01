import { Employee, Claim, Document, ClaimPerson } from '../types';

export const mockEmployees: Employee[] = [
  {
    id: '1',
    maidNo: 'EMP001',
    name: 'John Smith',
    phoneNo: '+1-555-0122',
    type: 'Officer',
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    maidNo: 'EMP002',
    name: 'Sarah Johnson',
    phoneNo: '+1-555-0124',
    type: 'Associate',
    createdAt: new Date('2024-01-20')
  },
  {
    id: '3',
    maidNo: 'EMP003',
    name: 'Dr. Michael Chen',
    phoneNo: '+1-555-0125',
    type: 'Consultant',
    createdAt: new Date('2024-01-25')
  }
];

export const mockDocuments: Document[] = [
  {
    id: '1',
    header: 'Medical Consultation',
    amount: 150.00,
    doctorName: 'Dr. Anderson',
    enteredBy: 'Admin',
    enteredAt: new Date('2024-02-01T10:30:00'),
    pages: 2
  },
  {
    id: '2',
    header: 'Lab Tests',
    amount: 85.50,
    doctorName: 'Dr. Wilson',
    enteredBy: 'Clerk',
    enteredAt: new Date('2024-02-01T14:15:00'),
    pages: 1
  }
];

export const mockClaims: Claim[] = [
  {
    id: '1',
    employeeId: '1',
    employee: mockEmployees[0],
    claimPerson: {
      id: '1',
      name: 'John Smith',
      relation: 'SELF',
      maidNo: 'EMP001'
    },
    hospital: 'City General Hospital',
    billNo: 'BILL-2024-001',
    billDate: new Date('2024-02-01'),
    billAmount: 235.50,
    documents: mockDocuments,
    status: 'Under Review',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-02')
  },
  {
    id: '2',
    employeeId: '2',
    employee: mockEmployees[1],
    claimPerson: {
      id: '2',
      name: 'Emma Johnson',
      relation: 'DAUGHTER 1',
      maidNo: 'DEP002'
    },
    hospital: 'Metro Medical Center',
    billNo: 'BILL-2024-002',
    billDate: new Date('2024-02-03'),
    billAmount: 450.00,
    documents: [mockDocuments[0]],
    status: 'Approved',
    createdAt: new Date('2024-02-03'),
    updatedAt: new Date('2024-02-04')
  }
];