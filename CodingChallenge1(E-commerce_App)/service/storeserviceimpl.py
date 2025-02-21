# Implementation
from datetime import datetime

from exceptions.itemoutofstock import ItemOutOfStock
from service.storeservices import StoreServices


class StoreServiceImpl(StoreServices):
    def __init__(self, store):
        self.__store_obj = store

    def search_product_by_name(self, name):
        search_name=[]
        for product in self.__store_obj.product_list:
            if product["name"]==name:
                search_name.append(product)
        return search_name

    def add_product_to_cart(self,cart,product_id,quantity):
        for product in self.__store_obj.product_list:
            if product["product_id"]==product_id:
                if product["quantity_in_stock"]>=quantity:
                    cart._Cart__dict_product_quantity[product_id]=cart._Cart__dict_product_quantity.get(product_id, 0)+quantity
                    product["quantity_in_stock"]-=quantity
                    return
                else:
                    raise ItemOutOfStock


    def remove_product_from_cart(self,cart,product_id,quantity):
        if product_id in cart._Cart__dict_product_quantity:
            if cart._Cart__dict_product_quantity[product_id]>=quantity:
                cart._Cart__dict_product_quantity[product_id]-=quantity
                for product in self.__store_obj.product_list:
                    if product["product_id"]==product_id:
                        product["quantity_in_stock"]+=quantity
        else:
            print("Product not in cart!")

    def purchase_products(self, cart, customer):
        total_amount=0
        print("\n---------Bill----------")
        print("Customer:",customer.__getattribute__('_Customer__name'))
        print("Date:", datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        print("-----------------------------------")
        for product_id, quantity in cart._Cart__dict_product_quantity.items():
            for product in self.__store_obj.product_list:
                if product["product_id"]==product_id:
                    item_total = product["price"] * quantity
                    print("product\tQuantity\tPrice\tTotal_Price")
                    print("-----------------------------------")
                    print(product['name'],'\t',quantity,"\t\t",product['price'],"\t",item_total)
                    total_amount+=item_total
        print("-----------------------------------")
        print("Total Amount:",total_amount)
        cart._Cart__dict_product_quantity.clear()

    def reorder_levels(self,product_id):
        reorder_status=False
        for product in self.__store_obj.product_list:
            if product["product_id"]==product_id and product["quantity_in_stock"]<5:
                product["quantity_in_stock"]+=50
                print("Reordered 50 units of",product['name'],"|| New stock:",product['quantity_in_stock'])
                reorder_status=True
        return reorder_status

    def search_product_by_category(self, category):
        search_category=[]
        for product in self.__store_obj.product_list:
            if product["category"]==category:
                search_category.append(product)
        return search_category

