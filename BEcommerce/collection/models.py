from django.db import models
from recipe.models import RecipeModel
# Create your models here.


class CollectionModel(models.Model):
    name = models.CharField(("name of collection"), max_length=500)
    recipes = models.ManyToManyField(RecipeModel, blank=True)
    descript = models.TextField(("description of the collection"))
    photo = models.ImageField(("photo of collection"), upload_to='uploads', height_field=None, width_field=None, max_length=None,blank=True)

    def __str__(self):
        return f'{self.name} has {self.number_of_recipes()} recipes'

    def intro(self):
        return self.descript[0]

    @property
    def number_of_recipes(self):
        return self.recipes.count
    def photo_url(self):
        return self.photo.url
