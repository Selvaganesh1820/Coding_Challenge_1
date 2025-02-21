from customerrors.employeenotfound import EmployeeNotFound
from services.companyserviceprovider import CompanyServiceProvider

class CompanyServiceProviderImpl(CompanyServiceProvider):
    def __init__(self,company):
        self.__comp_obj=company

    def add_employee(self,employee):
        employee_list=self.__comp_obj.__getattribute__("_Company__employee_list")
        employee_list.append(employee)

    def return_sorted_list(self):
        employee_list=self.__comp_obj.__getattribute__("_Company__employee_list")
        sorted_list=sorted(employee_list, key=lambda e:e.__getattribute__("_Employee__salary"),reverse=True)
        return "Sorted List: "+str(sorted_list)

    def search_employee(self,emp_id):
        employee_list=self.__comp_obj.__getattribute__("_Company__employee_list")
        for emp in employee_list:
            if emp.__getattribute__("_Employee__emp_id")==emp_id:
                return emp
        raise EmployeeNotFound(emp_id)

    def return_selenium_testers(self):
        selenium_tester=[]
        employee_list=self.__comp_obj.__getattribute__("_Company__employee_list")
        for emp in employee_list:
            if hasattr(emp, "_Tester__skilled_selenium") and emp.__getattribute__("_Tester__skilled_selenium"):
                selenium_tester.append(emp)
        return selenium_tester

    def return_uft_testers(self):
        UFT_testers=[]
        employee_list=self.__comp_obj.__getattribute__("_Company__employee_list")
        for emp in employee_list:
            if hasattr(emp, "_Tester__skilled_uft") and emp.__getattribute__("_Tester__skilled_uft"):
                UFT_testers.append(emp)
        return UFT_testers

    def return_managers_with_high_allowance(self):
        managers_high_allowance=[]
        employee_list=self.__comp_obj.__getattribute__("_Company__employee_list")
        for emp in employee_list:
            if hasattr(emp,"_Manager__project_allowance") and emp.__getattribute__("_Manager__project_allowance")>50000:
                managers_high_allowance.append(emp)
        return managers_high_allowance


    def return_unallocated_developers(self):
        unallocated=[]
        employee_list=self.__comp_obj.__getattribute__("_Company__employee_list")
        for emp in employee_list:
            if hasattr(emp,"_Developer__allotted") and not emp.__getattribute__("_Developer__allotted"):
                unallocated.append(emp)
        return unallocated

    def manager_with_max_projects(self):
        manager_max_project=[]
        employee_list=self.__comp_obj.__getattribute__("_Company__employee_list")
        for emp in employee_list:
            if hasattr(emp,"_Manager__num_projects"):
                manager_max_project.append(emp)
        return max(manager_max_project,key=lambda m:m.__getattribute__("_Manager__num_projects"),default=None)

    def return_highly_paid_employees(self):
        employee_list=self.__comp_obj.__getattribute__("_Company__employee_list")
        sorted_list=sorted(employee_list,key=lambda e:e.get_total_payment(),reverse=True)[:5]
        return sorted_list
