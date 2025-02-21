from exceptions.itemoutofstock import ItemOutOfStock
from entities.cart import Cart
from entities.customer import Customer
from entities.product import Product
from entities.store import Store
from service.storeserviceimpl import StoreServiceImpl

store_obj=Store(1,"Revathi Stores","Chennai")
store_service=StoreServiceImpl(store_obj)
"""Store object creation"""
store_obj.add_product(Product(101,"shoe",800,"wearables",15))
store_obj.add_product(Product(102,"TV",6000,"appliances",20))
store_obj.add_product(Product(103,"Hoodie",500,"clothing",5))
store_obj.add_product(Product(104,"Joggers",600,"clothing",8))
store_obj.add_product(Product(105,"Watch",1800,"wearables",3))
store_obj.add_product(Product(106,"pen",50,"stationary",17))

"""Customer object creation"""
customer_obj = Customer(1,"Selva","Krishna street")
cart_obj=Cart(1,customer_obj._Customer__customer_id)

"""Menu Driven Program"""
while True:
    print("\n1. Search Product by Name\n2. Add Product to Cart\n3. Remove Product from Cart\n4. Purchase Products\n5. Reorder stock\n6. Search Product by Category\n7. Exit")
    choice=int(input("Enter your choice: "))
    try:
        if choice==1:
            name=input("Enter product name: ")
            products=store_service.search_product_by_name(name)
            if products:
                for p in products:
                    print(p)
            else:
                print("Product not found!")
        elif choice==2:
            pid=int(input("Enter Product ID: "))
            qty=int(input("Enter Quantity: "))
            store_service.add_product_to_cart(cart_obj,pid,qty)
            print("Product added to cart!")
        elif choice==3:
            pid=int(input("Enter Product ID: "))
            qty=int(input("Enter Quantity to Remove: "))
            store_service.remove_product_from_cart(cart_obj,pid,qty)
            print("Product removed from cart!")
        elif choice==4:
            store_service.purchase_products(cart_obj,customer_obj)
        elif choice==5:
            pid=int(input("Enter Product ID:"))
            store_service.reorder_levels(pid)
        elif choice==6:
            category=input("Enter category: ")
            products=store_service.search_product_by_category(category)
            for p in products:
                print(p)
        elif choice==7:
            break
        else:
            print("Invalid Choice!")
    except ItemOutOfStock as e:
        print(e)
    except Exception as e:
        print("Error: ",e)
