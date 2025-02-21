from entity.employee import Employee


class Developer(Employee):
    def __init__(self,name,salary,ot_allowance,night_shift_allowance,allotted=False):
        super().__init__(name,salary,"Developer")
        self.__ot_allowance=ot_allowance
        self.__night_shift_allowance=night_shift_allowance
        self.__allotted=allotted

    def get_total_payment(self):
        return self.get_salary() + self.__ot_allowance + self.__night_shift_allowance

    def __getattribute__(self, __name):
        return super().__getattribute__(__name)

    def __setattr__(self, __name, __value):
        super().__setattr__(__name, __value)

