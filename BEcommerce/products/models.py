from django.db import models

# Create your models here.


class ProductModel(models.Model):

    name = models.CharField(max_length=250, unique=True)
    price = models.DecimalField(
        ("price of product"), max_digits=5, decimal_places=2)
    descript = models.TextField()
    brand = models.CharField(max_length=250, default=None)

    class Meta:
        verbose_name = ("ProductModel")
        verbose_name_plural = ("ProductModels")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("ProductModel_detail", kwargs={"pk": self.pk})
