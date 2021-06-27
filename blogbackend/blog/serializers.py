
from rest_framework import fields, serializers
from .models import Blog

           

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['title','id','headblog','category','short','content','date_post','slug']