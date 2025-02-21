from entity.employee import Employee


class Tester(Employee):
    def __init__(self,name,salary,skilled_selenium,skilled_uft,skilled_jmeter,test_allowance):
        super().__init__(name,salary,"Tester")
        self.__skilled_selenium=skilled_selenium
        self.__skilled_uft=skilled_uft
        self.__skilled_jmeter=skilled_jmeter
        self.__test_allowance=test_allowance

    def get_total_payment(self):
        return self.get_salary() + self.__test_allowance

    def __getattribute__(self, __name):
        return super().__getattribute__(__name)

    def __setattr__(self, __name, __value):
        super().__setattr__(__name, __value)

