from entity.employee import Employee


class Manager(Employee):
    def __init__(self,name,salary,project_allowance,num_projects):
        super().__init__(name,salary,"Manager")
        self.__project_allowance=project_allowance
        self.__num_projects=num_projects

    def get_total_payment(self):
        return self.get_salary() + self.__project_allowance

    def __getattribute__(self, __name):
        return super().__getattribute__(__name)

    def __setattr__(self, __name, __value):
        super().__setattr__(__name, __value)

