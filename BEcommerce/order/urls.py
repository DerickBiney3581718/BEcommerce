from django.urls import path, include
from .views import ListOrders, RetrieveOrder, RetrieveLastOrder

urlpatterns = [
    path('', ListOrders.as_view()),
    path('<int:pk>/', RetrieveOrder.as_view()),
    path('current/', RetrieveLastOrder.as_view())
]
