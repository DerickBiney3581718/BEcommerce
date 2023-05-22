from django.test import TestCase
from products.models import ProductModel
from recipe.models import RecipeModel

# Create your tests here.


class CollectionModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):

        RecipeModel.objects.create(name='Italian pasta', origin='Italy', calories_ps=450, difficulty=3.2,
                                   recipe_book='Ingredients\n4 servings\nKosher salt\n Preparation\n Step 1\n Fill a large pot with water and season well with a few big pinches of salt. Bring to a boil.')

    def test_custom_labels(self):
        recipe = RecipeModel.objects.get(id=1)
        name_label = recipe._meta.get_field('name').verbose_name
        self.assertTrue(name_label == 'name of recipe')

    def test_m2m_connect(self):
        b = ProductModel.objects.create(
            name='Blender', brand='Silver Crest', price=400)
        c = ProductModel.objects.create(
            name='air fryer', brand='avinas', price=600)
        recipe = RecipeModel.objects.get(id=1)
        recipe.products.add(b, c)
        self.assertEqual(list(recipe.products.all()), [b, c])

    def test_model_str(self):
        b = ProductModel.objects.create(
            name='Blender', brand='Silver Crest', price=400)
        c = ProductModel.objects.create(
            name='air fryer', brand='avinas', price=600)
        recipe = RecipeModel.objects.get(id=1)
        recipe.products.add(b, c)

        self.assertEqual(str(recipe), 'Italian pasta from Italy contains 450')
