from django.db import models
from users.models import User
from products.models import ProductModel
import datetime

# Create your models here.


class OrderModel(models.Model):
    # user = models.ForeignKey(User, on_delete=models.PROTECT)
    products = models.ManyToManyField(ProductModel)
    product_list = models.JSONField(
        ("list of products"), blank=True, null=True)  # a dictionary of product ids with quantities bought
    paid = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.id}th order'

    def prices_of_products(self):
        return {int(prod): int(ProductModel.objects.get(
            id=prod).price) for prod in self.product_list.keys()}
