class Cart:
    def __init__(self,cart_id,customer_id):
        self.__cart_id=cart_id
        self.__customer_id=customer_id
        self.__dict_product_quantity={}


    def __getattribute__(self, __name):
        return super().__getattribute__(__name)

    def __setattr__(self, __name, __value):
        super().__setattr__(__name, __value)

    def __str__(self):
        return "["+"Cart ID:"+str(self.__cart_id)+" Dictionary of product quantity:"+str(self.__dict_product_quantity)+" Customer ID:"+str(self.__customer_id)+"]"

    def __repr__(self):
        return "["+"Cart ID:"+str(self.__cart_id)+" Dictionary of product quantity:"+str(self.__dict_product_quantity)+" Customer ID:"+str(self.__customer_id)+"]"
