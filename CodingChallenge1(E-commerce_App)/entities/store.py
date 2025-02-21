class Store:
    def __init__(self,store_id,name,location):
        self.__store_id=store_id
        self.__name=name
        self.__location=location
        self.product_list=[]
    def add_product(self, product):
        self.product_list.append({
            "product_id":product._Product__product_id,
            "name":product._Product__name,
            "price":product._Product__price,
            "category":product._Product__category,
            "quantity_in_stock":product._Product__quantity_in_stock
        })

    def __getattribute__(self, __name):
        return super().__getattribute__(__name)

    def __setattr__(self, __name, __value):
        super().__setattr__(__name, __value)

    def __str__(self):
        return "["+"Store ID:"+str(self.__store_id)+" name:"+self.__name+" Location:"+self.__location +"]"

    def __repr__(self):
        return "["+"Store ID:"+str(self.__store_id)+" name:"+self.__name+" Location:"+self.__location + "]"


