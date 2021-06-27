from django.db import models
from django.db.models.signals import pre_save
from django.dispatch import receiver
from .util import unique_slug_generator
# Create your models here.
BLOG_CATEGORIES  = (
    ('World','World'),
    ('Technology','Technology'),
    ('Design','Design'),
    ('Culture','Culture'),
    ('Business','Business'),
    ('Politics','Politics'),
    ('Science','Science'),
    ('Health','Health'),
    ('Style','Style'),
    ('Travel','Travel'),
)

# class HeadBlog(models.Model):
#     title = models.CharField(max_length=200)
#     short = models.CharField(max_length=300)
#     category = models.CharField(default='World',choices=BLOG_CATEGORIES,max_length=100)
#     content = models.TextField()
#     # date_post = models.DateField(default='March 20,2021',auto_now_add=True)
#     slug = models.SlugField(max_length = 250, null = True, blank = True)
#     def __str__(self):
#         return self.title
# @receiver(pre_save, sender=HeadBlog)
# def pre_save_receiver(sender, instance, *args, **kwargs):
#     if not instance.slug:
# 	    instance.slug = unique_slug_generator(instance)

class Blog(models.Model):
    title = models.CharField(max_length=200)
    headblog = models.BooleanField(default=False)
    category = models.CharField(default='World',choices=BLOG_CATEGORIES,max_length=100)
    short = models.CharField(max_length=300)
    content = models.TextField()
    date_post = models.DateField(auto_now_add=True)
    slug = models.SlugField(max_length = 250, null = True, blank = True)
    
    def __str__(self):
        return self.title
@receiver(pre_save, sender=Blog)
def pre_save_receiver(sender, instance, *args, **kwargs):
    if not instance.slug:
	    instance.slug = unique_slug_generator(instance)