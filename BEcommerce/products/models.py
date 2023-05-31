from django.db import models

# Create your models here.


class ProductModel(models.Model):

    name = models.CharField(max_length=250, unique=False)
    price = models.DecimalField(
        ("price of product"), max_digits=5, decimal_places=2)
    descript = models.TextField()
    brand = models.CharField(max_length=250, default=None)
    available = models.BooleanField(default=True)
    photo = models.ImageField(("photo of product"), upload_to='uploads/',
                              height_field=None, width_field=None, max_length=None, blank=True)

    class Meta:
        verbose_name = ("ProductModel")
        verbose_name_plural = ("ProductModels")

    def __str__(self):
        return f"{self.brand}: {self.name} costs {self.price}\n\t{self.descript}"

    def get_absolute_url(self):
        return reverse("ProductModel_detail", kwargs={"pk": self.pk})

    def photo_url(self):
        return self.photo.url
