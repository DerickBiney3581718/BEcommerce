from django.test import TestCase
from .models import ProductModel
# Create your tests here.


class ProductModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        ProductModel.objects.create(
            name='Blender', price=345.5, brand='Silver Crest', descript='affordable')

    def test_product_price_label(self):
        product = ProductModel.objects.get(id=1)
        product_label = product._meta.get_field('price').verbose_name
        self.assertEqual(product_label, 'price of product')

    def test_product_string(self):
        product = ProductModel.objects.get(id=1)
        self.assertEqual(str(product), 'Silver Crest: Blender costs 345.50\n\taffordable')
