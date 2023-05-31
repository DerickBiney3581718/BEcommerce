from django.db import models
from products.models import ProductModel
from django.utils.timezone import now
from datetime import datetime
# Create your models here.


class RecipeModel(models.Model):
    name = models.CharField(("name of recipe"), max_length=250)
    photo = models.ImageField(
        upload_to='uploads/', height_field=None, width_field=None, max_length=None, blank=True)
    origin = models.CharField(("country of origin"),
                              max_length=100, blank=True)
    calories_ps = models.IntegerField(("calories per serving"))
    difficulty = models.DecimalField(
        ("difficulty level"),  decimal_places=1, max_digits=2, null=True, blank=True)
    products = models.ManyToManyField(ProductModel, blank=True)
    intro = models.TextField(("introductory note"), blank=True)
    ingredients = models.JSONField(("ingredients"), default=list)
    recipe_book = models.TextField()
    date_added = models.DateTimeField(default=now)

    def __str__(self):
        return f'{self.name} from {self.origin} contains {self.calories_ps} added {self.date_added}'

    def photo_url(self):
        return self.photo.url

    def time_lapse(self):
        td =now() - self.date_added
        return td.days


