from django.db import models
import string
import random
# Create your models here.

"""Generates a random uppercase ASCII code of length 6."""
def generate_unique_code():
    length = 6
    
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        
        if Room.objects.filter(code=code).count() == 0:
            break
    return code

"""
Group similar users together in a room.
"""
class Room(models.Model):
    code = models.CharField(max_length=8, default="", unique=True)
    host = models.CharField(max_length=50, unique=True)
    guest_can_pause = models.BooleanField(null=False, default=False)
    votes_to_skip = models.IntegerField(null=False, default=2)
    create_at = models.DateTimeField(auto_now_add=True)
