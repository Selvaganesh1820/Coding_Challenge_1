from abc import ABC, abstractmethod


class StoreServices(ABC):
    @abstractmethod
    def search_product_by_name(self,name):
        pass

    @abstractmethod
    def add_product_to_cart(self,cart,product_id,quantity):
        pass

    @abstractmethod
    def remove_product_from_cart(self,cart,product_id,quantity):
        pass

    @abstractmethod
    def purchase_products(self,cart,customer):
        pass

    @abstractmethod
    def reorder_levels(self,product_id):
        pass

    @abstractmethod
    def search_product_by_category(self,category):
        pass
