from django.db import models
from recipe.models import RecipeModel
# Create your models here.



class CollectionModel(models.Model):
    name = models.CharField(("name of collection"), max_length=500)
    number_of_recipes = models.IntegerField(default=0)
    recipes = models.ManyToManyField(RecipeModel, blank=True)
    descript = models.TextField(("description of the collection"))

    def __str__(self):
        return f'{self.name} has {self.number_of_recipes} recipes that {self.descript}'

    def list_all_recipes(self):
        return list(self.recipes.all())
