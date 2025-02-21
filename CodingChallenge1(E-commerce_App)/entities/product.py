class Product:
    def __init__(self,product_id,name,price,category,quantity_in_stock):
        self.__product_id=product_id
        self.__name=name
        self.__price=price
        self.__category=category
        self.__quantity_in_stock=quantity_in_stock

    def __getattribute__(self, __name):
        return super().__getattribute__(__name)

    def __setattr__(self, __name, __value):
        super().__setattr__(__name, __value)

    def __str__(self):
        return "["+" Product ID:"+str(self.__product_id)+" Name:"+self.__name+" Price:"+str(self.__price)+" Category:"+self.__category+" Quantity in Stock:"+str(self.__quantity_in_stock)+"]"

    def __repr__(self):
        return "["+" Product ID:"+str(self.__product_id)+" Name:"+self.__name+" Price:"+str(self.__price)+" Category:"+self.__category+" Quantity in Stock:"+str(self.__quantity_in_stock)+"]"

