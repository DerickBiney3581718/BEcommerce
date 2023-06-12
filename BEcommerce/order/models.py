from django.db import models
from users.models import User
from products.models import ProductModel
import datetime

# Create your models here.


class OrderModel(models.Model):
    # user = models.ForeignKey(User, on_delete=models.PROTECT)
    products = models.ManyToManyField(ProductModel)
    # a dictionary of product ids with quantities bought
    product_list = models.JSONField(("list of products"), default=dict)
    timestamp = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(("is paid for"), default=False)
    amount_paid = models.FloatField(("amount paid so far"), default=0)

    def __str__(self):
        return f'{self.id}th order'

    def total_sum(self):
        return sum([ProductModel.objects.get(id=k).price * v for k, v in self.product_list.items()])

    def is_paid(self):
        self.paid = self.amount_paid >= self.total_sum()
        return self.amount_paid >= self.total_sum()
    
    # def save(*args, **kwargs):
    #     save.super(*args, **kwargs)
    #     self.paid.update(self.is_paid)
    # def receipt():
