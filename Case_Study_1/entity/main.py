from customerrors.employeenotfound import EmployeeNotFound
from entity.company import Company
from entity.developer import Developer
from entity.manager import Manager
from entity.tester import Tester
from services.companyserviceproviderimpl import CompanyServiceProvider, CompanyServiceProviderImpl

my_company = Company(100,"Hexaware")
operation_hexa = CompanyServiceProviderImpl(my_company)

# Add Employees
operation_hexa.add_employee(Developer("Selva",80000,5000,3000,False))
operation_hexa.add_employee(Developer("Kamal",85000,4000,2500,True))
operation_hexa.add_employee(Tester("Akhilesh",75000,True,False,True,3000))
operation_hexa.add_employee(Tester("Shoban",70000,False,True,False,4000))
operation_hexa.add_employee(Manager("Heptha",120000,60000,5))
operation_hexa.add_employee(Manager("Rahul",110000,55000,7))

# Test Functionalities
print("\n Sorted Employees by Salary ")
print(operation_hexa.return_sorted_list())

try:
    print("\n Searching for Employee with ID 103: ")
    print(operation_hexa.search_employee(12))
except EmployeeNotFound as e:
    print(e)

print("\n Selenium Testers: ")
print(operation_hexa.return_selenium_testers())

print("\n  UFT Testers: ")
print(operation_hexa.return_uft_testers())

print("\n  Managers with High Allowance (>50000): ")
print(operation_hexa.return_managers_with_high_allowance())

print("\n  Unallocated Developers: ")
print(operation_hexa.return_unallocated_developers())

print("\n  Manager with Maximum Projects: ")
print(operation_hexa.manager_with_max_projects())

print("\n  Top 5 Highly Paid Employees: ")
print(operation_hexa.return_highly_paid_employees())