class ItemOutOfStock(Exception):
    def __init__(self,message="Item requested is out of stock"):
        self.__message=message
        super().__init__(self.__message)
