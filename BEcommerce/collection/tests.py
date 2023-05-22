from django.test import TestCase
from .models import CollectionModel
from products.models import ProductModel
from recipe.models import RecipeModel

# Create your tests here.


class CollectionModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        CollectionModel.objects.create(
            name='Slimming diets', descript='delicious and healthy')

    def test_name_label(self):
        collection = CollectionModel.objects.get(id=1)
        coll_label = collection._meta.get_field('name').verbose_name
        self.assertEqual(coll_label, 'name of collection')

    def test_recipes_included(self):
        a = RecipeModel.objects.create(name='Italian pasta', origin='Italy', calories_ps=450, difficulty=3.2,
                                       recipe_book='Ingredients\n4 servings\nKosher salt\n Preparation\n Step 1\n Fill a large pot with water and season well with a few big pinches of salt. Bring to a boil.')
        collection = CollectionModel.objects.get(id=1)
        collection.recipes.add(a)
        self.assertEqual(collection.list_all_recipes(), [a])
