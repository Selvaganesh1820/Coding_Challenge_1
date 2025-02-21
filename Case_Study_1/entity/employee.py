class Employee:
    id=10
    def __init__(self,name,salary,designation):
        Employee.id+=1
        self.__emp_id=Employee.id
        self.__name=name
        self.__salary=salary
        self.__designation=designation

    def get_salary(self):
        return self.__getattribute__("_Employee__salary")

    def get_total_payment(self):
        return self.get_salary()

    def __getattribute__(self, __name):
        return super().__getattribute__(__name)

    def __setattr__(self, __name, __value):
        super().__setattr__(__name, __value)

    def __repr__(self):
        return f"{self.__designation}: {self.__name} (ID: {self.__emp_id}, Salary: {self.get_salary()})"
