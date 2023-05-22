from django.db import models
from products.models import ProductModel
from django.utils.timezone import now
# Create your models here.


class RecipeModel(models.Model):
    name = models.CharField(("name of recipe"), max_length=250)
    origin = models.CharField(("country of origin"), max_length=50)
    calories_ps = models.IntegerField(("calories per serving"))
    difficulty = models.DecimalField(
        ("difficulty level"),  decimal_places=2, max_digits=3, null=True, blank=True)
    products = models.ManyToManyField(ProductModel, blank=True)

    recipe_book = models.TextField()
    date_added = models.DateTimeField(default=now)

    def __str__(self):
        return f'{self.name} from {self.origin} contains {self.calories_ps} added {self.date_added}'
