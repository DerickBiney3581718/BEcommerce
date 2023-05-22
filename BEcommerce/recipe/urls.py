from django.urls import path, include
from .views import ListRecipes, RetrieveRecipe

urlpatterns = [
    path('', ListRecipes.as_view()),
    path('<int:pk>/', RetrieveRecipe.as_view())

]
