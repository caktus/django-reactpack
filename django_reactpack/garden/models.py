from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Garden(models.Model):
    name = models.CharField(max_length=64)
    gardener = models.ForeignKey(
        User,
        help_text="This garden's caretaker.",
        on_delete=models.CASCADE
    )
    description = models.CharField(max_length=128, blank=True)


class Bed(models.Model):
    FULL_SUN = 'FS'
    PART_SUN = 'PS'
    SHADED = 'SH'

    SOLAR_REQS = [
        ('FS', 'Full Sun'),
        ('PS', 'Partial Sun'),
        ('SH', 'Shaded')
    ]

    name = models.CharField(max_length=24)
    description = models.CharField(max_length=128)
    garden = models.ForeignKey(Garden, on_delete=models.CASCADE)
    width = models.PositiveIntegerField()
    length = models.PositiveIntegerField()
    solar_requirements = models.CharField(max_length=2, choices=SOLAR_REQS, default=FULL_SUN)
    date_added = models.DateField(auto_now_add=True)
    date_modified = models.DateField(auto_now=True)

    @property
    def area(self):
        return self.width * self.length

    class Meta:
        ordering = ('name', 'date_modified')


class Plant(models.Model):
    name = models.CharField(
        max_length=256,
        help_text='Name for this plant'
    )
    solar_requirement = models.CharField(choices=Bed.SOLAR_REQS, max_length=2)
    beds = models.ManyToManyField(Bed)
    plant_separation = models.SmallIntegerField()
    planting_depth = models.SmallIntegerField()
    days_to_germinate = models.SmallIntegerField()
    days_to_harvest = models.SmallIntegerField()
    day_planted = models.DateField()

    class Meta:
        ordering = ('plant_separation', 'name')
