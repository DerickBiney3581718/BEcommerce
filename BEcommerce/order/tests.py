from django.test import TestCase
from .models import Order
from users.models import User
from products.models import ProductModel
# Create your tests here.


class OrderTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        user = User.objects.create(name='Teiko Cele', email='teikoceles@gmail.com')
        ProductModel.objects.create(name='Blender',brand='Silver Crest', price=400)
        ProductModel.objects.create(name='air fryer',brand='avinas', price=600)

        Order.objects.create(user=user, product_list={1: 0, 2:  0}) 

    def test_product_list_label(self):
        order = Order.objects.get(id=1)
        product_list = order._meta.get_field('product_list').verbose_name
        self.assertEqual(product_list, 'list of products')

    def test_prices_of_products(self):
        order = Order.objects.get(id=1)
        self.assertEqual(order.prices_of_products(), {1: 400, 2: 600})
