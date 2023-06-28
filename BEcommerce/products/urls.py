from django.urls import path, include,register_converter
from .views import ListProducts, RetrieveProduct, ListFilteredSubset
from .converters import SubsetConverter
register_converter(SubsetConverter,"sub")
urlpatterns = [
    path('', ListProducts.as_view()),
    path('<int:pk>/', RetrieveProduct.as_view()),
    path('<sub:subset>/', ListFilteredSubset.as_view())

]

