class Customer:
    def __init__(self,customer_id,name,address):
        self.__customer_id=customer_id
        self.__name=name
        self.__address=address

    def __getattribute__(self, __name):
        return super().__getattribute__(__name)

    def __setattr__(self, __name, __value):
        super().__setattr__(__name, __value)

    def __str__(self):
        return "[" + "ID:" + str(self.__customer_id) + " Name:" + self.__name + " Address:" + self.__address + "]"

    def __repr__(self):
        return "[" + "ID:" + str(self.__customer_id) + " Name:" + self.__name + " Address:" + self.__address + "]"
