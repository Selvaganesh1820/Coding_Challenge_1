class EmployeeNotFound(Exception):
    def __init__(self,message="Employee with the mentioned id not found"):
        self.__message=message
        super().__init__(self.__message)
