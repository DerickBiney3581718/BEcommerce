from django.db import models
from users.models import User
from products.models import ProductModel
import datetime
# Create your models here.


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    products = models.ManyToManyField(ProductModel)
    paid = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.id
