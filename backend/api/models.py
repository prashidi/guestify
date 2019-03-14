from django.db import models

class Guest(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    table = models.IntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('created',)

    def __str__(self):
        return self.name
