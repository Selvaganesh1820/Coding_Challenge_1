class Company:
    def __init__(self,regn_no,name):
        self.__regn_no=regn_no
        self.__name=name
        self.__employee_list=[]

    def add_employee(self,employee):
        self.__getattribute__("_Company__employee_list").append(employee)

    def __getattribute__(self, __name):
        return super().__getattribute__(__name)

    def __setattr__(self, __name, __value):
        super().__setattr__(__name, __value)

