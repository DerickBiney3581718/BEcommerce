from django.db import models

# Create your models here.


class User(models.Model):

    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    profile_pic = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=None)

    class Meta:
        verbose_name = ("User")
        verbose_name_plural = ("Users")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("User_detail", kwargs={"pk": self.pk})
